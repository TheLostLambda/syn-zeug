use bio::alphabets::{self, Alphabet};
use std::collections::HashMap;
// Keep an eye on this: https://github.com/rust-lang/rust/issues/74465
use once_cell::sync::Lazy;

static ALPHABETS: Lazy<HashMap<SeqKind, Alphabet>> = Lazy::new(|| {
    let mut m = HashMap::new();
    m.insert(SeqKind::Dna, alphabets::dna::iupac_alphabet());
    m.insert(SeqKind::Rna, alphabets::rna::iupac_alphabet());
    m.insert(SeqKind::Protein, alphabets::protein::iupac_alphabet());
    m
});

// FIXME: Would references / slices be better here?
#[derive(Clone, Eq, PartialEq, Ord, PartialOrd, Hash, Debug)]
pub struct Seq {
    bytes: Vec<u8>,
    kind: SeqKind,
}

#[derive(Copy, Clone, Eq, PartialEq, Ord, PartialOrd, Hash, Debug)]
pub enum SeqKind {
    Dna,
    Rna,
    Protein,
}

impl Seq {
    // FIXME: I should probably create a custom error type instead us using a string!
    pub fn dna(seq: impl AsRef<[u8]>) -> Result<Self, String> {
        let seq = seq.as_ref();
        // FIXME: `.is_word()` could be improved to return the first non-word byte
        if ALPHABETS[&SeqKind::Dna].is_word(seq) {
            Ok(Self {
                bytes: seq.to_vec(),
                kind: SeqKind::Dna,
            })
        } else {
            Err(String::from("The provided sequence was not valid DNA"))
        }
    }

    pub fn len(&self) -> usize {
        self.bytes.len()
    }

    pub fn is_empty(&self) -> bool {
        self.bytes.is_empty()
    }

    pub fn count_elements(&self) -> HashMap<u8, usize> {
        let mut map = HashMap::new();
        for &i in &self.bytes {
            *map.entry(i).or_default() += 1;
        }
        map
    }

    // FIXME: Maybe I should (also?) have a non-mutable version of this
    pub fn convert(&self, kind: SeqKind) -> Self {
        match (self.kind, kind) {
            (SeqKind::Dna, SeqKind::Rna) => Self {
                bytes: self
                    .bytes
                    .iter()
                    .map(|&b| if b == b'T' || b == b't' { b + 1 } else { b })
                    .collect(),
                /*
                bytes: self
                    .bytes
                    .iter()
                    .map(|&b| match b {
                        b'T' => b'U',
                        b't' => b'u',
                        _ => b,
                    })
                    .collect(),
                */
                kind: SeqKind::Rna,
            },
            _ => todo!(),
        }
    }
}

#[cfg(test)]
// FIXME: These could probably be a bit less repetitive...
mod tests {
    use super::*;

    #[test]
    fn read_valid_dna_sequence() {
        let dna = Seq::dna("AGCTTTTCATTCTGACTGCA");
        assert!(dna.is_ok());
    }

    #[test]
    fn read_invalid_dna_sequence() {
        let dna = Seq::dna("AGCTTTXCATTCTGACNGCA");
        assert_eq!(
            dna,
            Err(String::from("The provided sequence was not valid DNA"))
        );
    }

    #[test]
    fn get_sequence_length() -> Result<(), String> {
        let dna = Seq::dna("AGCTTTTCATTCTGACTGCA")?;
        assert_eq!(dna.len(), 20);
        Ok(())
    }

    #[test]
    fn is_sequence_empty() -> Result<(), String> {
        let dna = Seq::dna("")?;
        assert!(dna.is_empty());
        let dna = Seq::dna("ACGT")?;
        assert!(!dna.is_empty());
        Ok(())
    }

    #[test]
    fn count_nucleotides() -> Result<(), String> {
        let dna =
            Seq::dna("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")?;
        let counts = dna.count_elements();
        assert_eq!(counts.get(&b'A'), Some(&20));
        assert_eq!(counts.get(&b'C'), Some(&12));
        assert_eq!(counts.get(&b'G'), Some(&17));
        assert_eq!(counts.get(&b'T'), Some(&21));
        Ok(())
    }

    #[test]
    fn dna_to_rna() -> Result<(), String> {
        let dna = Seq::dna("GATGGAACTTGACTACGTAAATT")?;
        assert_eq!(dna.convert(SeqKind::Rna).bytes, b"GAUGGAACUUGACUACGUAAAUU");
        Ok(())
    }

    #[test]
    fn dna_to_rna_keep_case() -> Result<(), String> {
        let dna = Seq::dna("GaTgGaAcTtGaCtAcGtAaAtT")?;
        assert_eq!(dna.convert(SeqKind::Rna).bytes, b"GaUgGaAcUuGaCuAcGuAaAuU");
        Ok(())
    }
}