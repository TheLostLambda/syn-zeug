mod utils;

use criterion::{criterion_group, criterion_main, BenchmarkId, Criterion, Throughput};
use pprof::criterion::{Output, PProfProfiler};
use std::{fmt::Debug, time::Duration};
use syn_zeug::{
    seq::{Kind, Seq},
    types::Case,
};

fn new_best(c: &mut Criterion) {
    bench_single_time_complexity(
        c,
        "new_best",
        "ambiguous_seq.txt",
        |s| [s, b"A".to_vec()].concat(),
        // NOTE: Maybe someday the compiler will be clever enough to figure out `Seq::new` on it's
        // own. I get an utterly archaic lifetime error if I don't wrap this in a useless closure
        |d| Seq::new(d),
    );
}

// NOTE: No longer the real worst case for this algorithm
fn new_worst(c: &mut Criterion) {
    bench_single_time_complexity(
        c,
        "new_worst",
        "ambiguous_seq.txt",
        |s| [s, b"X".to_vec()].concat(),
        |d| Seq::new(d),
    );
}

fn new_null(c: &mut Criterion) {
    bench_single_time_complexity(
        c,
        "new_null",
        "ambiguous_seq.txt",
        |s| [b"J".to_vec(), s].concat(),
        |d| Seq::new(d),
    );
}

fn rev(c: &mut Criterion) {
    bench_method(c, "rev", "rosalind_dna.txt", Seq::dna, Seq::rev);
}

fn count_elements(c: &mut Criterion) {
    bench_method(
        c,
        "count_elements",
        "rosalind_dna.txt",
        Seq::dna,
        Seq::count_elements,
    );
}

fn normalize_case(c: &mut Criterion) {
    bench_method(c, "normalize_case", "rosalind_dna.txt", Seq::dna, |seq| {
        seq.normalize_case(Case::Lower)
    });
}

fn dna_to_rna(c: &mut Criterion) {
    bench_method(c, "dna_to_rna", "rosalind_dna.txt", Seq::dna, |seq| {
        seq.convert(Kind::Rna)
    });
}

fn rna_to_protein(c: &mut Criterion) {
    bench_method(
        c,
        "rna_to_protein",
        "rosalind_prot_rna.txt",
        Seq::rna,
        |seq| seq.convert(Kind::Protein),
    );
}

fn dna_to_protein(c: &mut Criterion) {
    bench_method(
        c,
        "dna_to_protein",
        "rosalind_prot_dna.txt",
        Seq::dna,
        |seq| seq.convert(Kind::Protein),
    );
}

fn iupac_dna_to_protein(c: &mut Criterion) {
    bench_method(
        c,
        "iupac_dna_to_protein",
        "rosalind_prot_iupac_dna.txt",
        Seq::dna_iupac,
        |seq| seq.convert(Kind::Protein),
    );
}

fn reverse_complement(c: &mut Criterion) {
    bench_method(
        c,
        "reverse_complement",
        "rosalind_dna.txt",
        Seq::dna,
        Seq::reverse_complement,
    );
}

fn find_orfs(c: &mut Criterion) {
    bench_method(c, "find_orfs", "rosalind_orf.txt", Seq::dna, |seq| {
        seq.find_orfs(1)
    });
}

fn gc_cont_base(c: &mut Criterion) {
    bench_method(
        c,
        "gc_cont_base",
        "rosalind_dna.txt",
        Seq::dna,
        Seq::gc_content,
    );
}

fn gc_cont_iupac(c: &mut Criterion) {
    bench_method(
        c,
        "gc_cont_iupac",
        "rosalind_prot_iupac_dna.txt",
        Seq::dna_iupac,
        Seq::gc_content,
    );
}

criterion_group!(
    name = benches;
    config = Criterion::default().with_profiler(PProfProfiler::new(1000, Output::Flamegraph(None)));
    targets = new_best, new_worst, new_null, rev, count_elements, normalize_case, dna_to_rna,
              rna_to_protein, dna_to_protein, iupac_dna_to_protein, reverse_complement, find_orfs,
              gc_cont_base, gc_cont_iupac
);
criterion_main!(benches);

// NOTE: To compare functions, you may need to cast things to a function pointer at the first site:
// [("Adam", Seq::gc_content as fn(&_) -> _), ("Brooks", Seq::bio_gc_content)],
fn bench_time_complexity<S, C, O, R, D>(
    c: &mut Criterion,
    bench_name: impl Into<String>,
    data_file: impl AsRef<str>,
    builder: C,
    routines: impl AsRef<[(S, R)]>,
) where
    C: Fn(Vec<u8>) -> D,
    S: Into<String> + Clone,
    R: Fn(&D) -> O,
{
    let data = utils::load_bench_data(data_file);

    let mut group = c.benchmark_group(bench_name);
    for p in 0..=5 {
        let data = data.repeat(2_usize.pow(p));
        let size = data.len() as u64;
        let input = builder(data);
        group.measurement_time(Duration::from_secs(5));
        group.throughput(Throughput::Bytes(size));
        for (s, r) in routines.as_ref() {
            // TODO: Is there a way to avoid this clone?
            group.bench_with_input(BenchmarkId::new(s.clone(), size), &input, |b, input| {
                b.iter(|| r(input));
            });
        }
    }
    group.finish();
}

fn bench_single_time_complexity<C, O, R, D>(
    c: &mut Criterion,
    bench_name: impl Into<String>,
    data_file: impl AsRef<str>,
    builder: C,
    routine: R,
) where
    C: Fn(Vec<u8>) -> D,
    R: Fn(&D) -> O,
{
    bench_time_complexity(c, bench_name, data_file, builder, [("", routine)]);
}

fn bench_method<C, O, R, S, E>(
    c: &mut Criterion,
    bench_name: impl Into<String>,
    data_file: impl AsRef<str>,
    constructor: C,
    routine: R,
) where
    C: Fn(Vec<u8>) -> Result<S, E>,
    R: Fn(&S) -> O,
    E: Debug,
{
    bench_single_time_complexity(
        c,
        bench_name,
        data_file,
        |d| constructor(d).unwrap(),
        routine,
    );
}
