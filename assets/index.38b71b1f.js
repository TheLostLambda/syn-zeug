(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function x(){}function ft(e,t){for(const n in t)e[n]=t[n];return e}function Nt(e){return e()}function $t(){return Object.create(null)}function D(e){e.forEach(Nt)}function Pt(e){return typeof e=="function"}function N(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let J;function Rt(e,t){return J||(J=document.createElement("a")),J.href=t,e===J.href}function St(e){return Object.keys(e).length===0}function st(e,t,n,r){if(e){const o=Ut(e,t,n,r);return e[0](o)}}function Ut(e,t,n,r){return e[1]&&r?ft(n.ctx.slice(),e[1](r(t))):n.ctx}function ct(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(t.dirty===void 0)return o;if(typeof o=="object"){const i=[],s=Math.max(t.dirty.length,o.length);for(let c=0;c<s;c+=1)i[c]=t.dirty[c]|o[c];return i}return t.dirty|o}return t.dirty}function _t(e,t,n,r,o,i){if(o){const s=Ut(t,n,r,i);e.p(s,o)}}function at(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function vt(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function Bt(e){const t={};for(const n in e)t[n]=!0;return t}function O(e,t){e.appendChild(t)}function q(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode.removeChild(e)}function v(e){return document.createElement(e)}function Ft(e){return document.createTextNode(e)}function W(){return Ft(" ")}function Tt(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Dt(e){return Array.from(e.childNodes)}function Ht(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ot(e,t){e.value=t==null?"":t}function Gt(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let wt;function S(e){wt=e}const R=[],it=[],Z=[],dt=[],Jt=Promise.resolve();let gt=!1;function Vt(){gt||(gt=!0,Jt.then(Ct))}function bt(e){Z.push(e)}function kt(e){dt.push(e)}const ut=new Set;let V=0;function Ct(){const e=wt;do{for(;V<R.length;){const t=R[V];V++,S(t),Kt(t.$$)}for(S(null),R.length=0,V=0;it.length;)it.pop()();for(let t=0;t<Z.length;t+=1){const n=Z[t];ut.has(n)||(ut.add(n),n())}Z.length=0}while(R.length);for(;dt.length;)dt.pop()();gt=!1,ut.clear(),S(e)}function Kt(e){if(e.fragment!==null){e.update(),D(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(bt)}}const Q=new Set;let T;function At(){T={r:0,c:[],p:T}}function xt(){T.r||D(T.c),T=T.p}function h(e,t){e&&e.i&&(Q.delete(e),e.i(t))}function $(e,t,n,r){if(e&&e.o){if(Q.has(e))return;Q.add(e),T.c.push(()=>{Q.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function jt(e,t,n){const r=e.$$.props[t];r!==void 0&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function I(e){e&&e.c()}function E(e,t,n,r){const{fragment:o,on_mount:i,on_destroy:s,after_update:c}=e.$$;o&&o.m(t,n),r||bt(()=>{const l=i.map(Nt).filter(Pt);s?s.push(...l):D(l),e.$$.on_mount=[]}),c.forEach(bt)}function M(e,t){const n=e.$$;n.fragment!==null&&(D(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Zt(e,t){e.$$.dirty[0]===-1&&(R.push(e),Vt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(e,t,n,r,o,i,s,c=[-1]){const l=wt;S(e);const u=e.$$={fragment:null,ctx:null,props:i,update:x,not_equal:o,bound:$t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:$t(),dirty:c,skip_bound:!1,root:t.target||l.$$.root};s&&s(u.root);let d=!1;if(u.ctx=n?n(e,t.props||{},(p,H,...P)=>{const w=P.length?P[0]:H;return u.ctx&&o(u.ctx[p],u.ctx[p]=w)&&(!u.skip_bound&&u.bound[p]&&u.bound[p](w),d&&Zt(e,p)),H}):[],u.update(),d=!0,D(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const p=Dt(t.target);u.fragment&&u.fragment.l(p),p.forEach(j)}else u.fragment&&u.fragment.c();t.intro&&h(e.$$.fragment),E(e,t.target,t.anchor,t.customElement),Ct()}S(l)}class F{$destroy(){M(this,1),this.$destroy=x}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!St(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}let _;const zt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});zt.decode();let X=new Uint8Array;function Y(){return X.byteLength===0&&(X=new Uint8Array(_.memory.buffer)),X}function z(e,t){return zt.decode(Y().subarray(e,e+t))}const L=new Array(32).fill(void 0);L.push(void 0,null,!0,!1);let B=L.length;function g(e){B===L.length&&L.push(L.length+1);const t=B;return B=L[t],L[t]=e,t}function f(e){return L[e]}function Qt(e){e<36||(L[e]=B,B=e)}function b(e){const t=f(e);return Qt(e),t}function lt(e){return e==null}let tt=new Float64Array;function Xt(){return tt.byteLength===0&&(tt=new Float64Array(_.memory.buffer)),tt}let et=new Int32Array;function a(){return et.byteLength===0&&(et=new Int32Array(_.memory.buffer)),et}let k=0;const nt=new TextEncoder("utf-8"),Yt=typeof nt.encodeInto=="function"?function(e,t){return nt.encodeInto(e,t)}:function(e,t){const n=nt.encode(e);return t.set(n),{read:e.length,written:n.length}};function A(e,t,n){if(n===void 0){const c=nt.encode(e),l=t(c.length);return Y().subarray(l,l+c.length).set(c),k=c.length,l}let r=e.length,o=t(r);const i=Y();let s=0;for(;s<r;s++){const c=e.charCodeAt(s);if(c>127)break;i[o+s]=c}if(s!==r){s!==0&&(e=e.slice(s)),o=n(o,r,r=s+e.length*3);const c=Y().subarray(o+s,o+r);s+=Yt(e,c).written}return k=s,o}function pt(e){const t=typeof e;if(t=="number"||t=="boolean"||e==null)return`${e}`;if(t=="string")return`"${e}"`;if(t=="symbol"){const o=e.description;return o==null?"Symbol":`Symbol(${o})`}if(t=="function"){const o=e.name;return typeof o=="string"&&o.length>0?`Function(${o})`:"Function"}if(Array.isArray(e)){const o=e.length;let i="[";o>0&&(i+=pt(e[0]));for(let s=1;s<o;s++)i+=", "+pt(e[s]);return i+="]",i}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(n.length>1)r=n[1];else return toString.call(e);if(r=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:r}let rt=new Uint32Array;function te(){return rt.byteLength===0&&(rt=new Uint32Array(_.memory.buffer)),rt}function ee(e,t){const r=te().subarray(e/4,e/4+t),o=[];for(let i=0;i<r.length;i++)o.push(b(r[i]));return o}function K(e,t){try{return e.apply(this,t)}catch(n){_.__wbindgen_exn_store(g(n))}}class m{static __wrap(t){const n=Object.create(m.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_seq_free(t)}constructor(t){try{const i=_.__wbindgen_add_to_stack_pointer(-16),s=A(t,_.__wbindgen_malloc,_.__wbindgen_realloc),c=k;_.seq_new(i,s,c);var n=a()[i/4+0],r=a()[i/4+1],o=a()[i/4+2];if(o)throw b(r);return m.__wrap(n)}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_js(t){try{const i=_.__wbindgen_add_to_stack_pointer(-16);_.seq_from_js(i,g(t));var n=a()[i/4+0],r=a()[i/4+1],o=a()[i/4+2];if(o)throw b(r);return m.__wrap(n)}finally{_.__wbindgen_add_to_stack_pointer(16)}}static dna(t){try{const i=_.__wbindgen_add_to_stack_pointer(-16),s=A(t,_.__wbindgen_malloc,_.__wbindgen_realloc),c=k;_.seq_dna(i,s,c);var n=a()[i/4+0],r=a()[i/4+1],o=a()[i/4+2];if(o)throw b(r);return m.__wrap(n)}finally{_.__wbindgen_add_to_stack_pointer(16)}}static dna_n(t){try{const i=_.__wbindgen_add_to_stack_pointer(-16),s=A(t,_.__wbindgen_malloc,_.__wbindgen_realloc),c=k;_.seq_dna_n(i,s,c);var n=a()[i/4+0],r=a()[i/4+1],o=a()[i/4+2];if(o)throw b(r);return m.__wrap(n)}finally{_.__wbindgen_add_to_stack_pointer(16)}}static dna_iupac(t){try{const i=_.__wbindgen_add_to_stack_pointer(-16),s=A(t,_.__wbindgen_malloc,_.__wbindgen_realloc),c=k;_.seq_dna_iupac(i,s,c);var n=a()[i/4+0],r=a()[i/4+1],o=a()[i/4+2];if(o)throw b(r);return m.__wrap(n)}finally{_.__wbindgen_add_to_stack_pointer(16)}}static rna(t){try{const i=_.__wbindgen_add_to_stack_pointer(-16),s=A(t,_.__wbindgen_malloc,_.__wbindgen_realloc),c=k;_.seq_rna(i,s,c);var n=a()[i/4+0],r=a()[i/4+1],o=a()[i/4+2];if(o)throw b(r);return m.__wrap(n)}finally{_.__wbindgen_add_to_stack_pointer(16)}}static rna_n(t){try{const i=_.__wbindgen_add_to_stack_pointer(-16),s=A(t,_.__wbindgen_malloc,_.__wbindgen_realloc),c=k;_.seq_rna_n(i,s,c);var n=a()[i/4+0],r=a()[i/4+1],o=a()[i/4+2];if(o)throw b(r);return m.__wrap(n)}finally{_.__wbindgen_add_to_stack_pointer(16)}}static rna_iupac(t){try{const i=_.__wbindgen_add_to_stack_pointer(-16),s=A(t,_.__wbindgen_malloc,_.__wbindgen_realloc),c=k;_.seq_rna_iupac(i,s,c);var n=a()[i/4+0],r=a()[i/4+1],o=a()[i/4+2];if(o)throw b(r);return m.__wrap(n)}finally{_.__wbindgen_add_to_stack_pointer(16)}}static protein(t){try{const i=_.__wbindgen_add_to_stack_pointer(-16),s=A(t,_.__wbindgen_malloc,_.__wbindgen_realloc),c=k;_.seq_protein(i,s,c);var n=a()[i/4+0],r=a()[i/4+1],o=a()[i/4+2];if(o)throw b(r);return m.__wrap(n)}finally{_.__wbindgen_add_to_stack_pointer(16)}}static protein_iupac(t){try{const i=_.__wbindgen_add_to_stack_pointer(-16),s=A(t,_.__wbindgen_malloc,_.__wbindgen_realloc),c=k;_.seq_protein_iupac(i,s,c);var n=a()[i/4+0],r=a()[i/4+1],o=a()[i/4+2];if(o)throw b(r);return m.__wrap(n)}finally{_.__wbindgen_add_to_stack_pointer(16)}}kind(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.seq_kind(r,this.ptr);var t=a()[r/4+0],n=a()[r/4+1];return z(t,n)}finally{_.__wbindgen_add_to_stack_pointer(16),_.__wbindgen_free(t,n)}}alphabet(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.seq_alphabet(r,this.ptr);var t=a()[r/4+0],n=a()[r/4+1];return z(t,n)}finally{_.__wbindgen_add_to_stack_pointer(16),_.__wbindgen_free(t,n)}}len(){return _.seq_len(this.ptr)>>>0}is_empty(){return _.seq_is_empty(this.ptr)!==0}subseq(t,n){const r=_.seq_subseq(this.ptr,t,n);return m.__wrap(r)}rev(){const t=_.seq_rev(this.ptr);return m.__wrap(t)}reverse_complement(){try{const o=_.__wbindgen_add_to_stack_pointer(-16);_.seq_reverse_complement(o,this.ptr);var t=a()[o/4+0],n=a()[o/4+1],r=a()[o/4+2];if(r)throw b(n);return m.__wrap(t)}finally{_.__wbindgen_add_to_stack_pointer(16)}}normalize_case(t){try{const i=_.__wbindgen_add_to_stack_pointer(-16);_.seq_normalize_case(i,this.ptr,g(t));var n=a()[i/4+0],r=a()[i/4+1],o=a()[i/4+2];if(o)throw b(r);return m.__wrap(n)}finally{_.__wbindgen_add_to_stack_pointer(16)}}convert(t){try{const i=_.__wbindgen_add_to_stack_pointer(-16);_.seq_convert(i,this.ptr,g(t));var n=a()[i/4+0],r=a()[i/4+1],o=a()[i/4+2];if(o)throw b(r);return m.__wrap(n)}finally{_.__wbindgen_add_to_stack_pointer(16)}}count_elements(){try{const o=_.__wbindgen_add_to_stack_pointer(-16);_.seq_count_elements(o,this.ptr);var t=a()[o/4+0],n=a()[o/4+1],r=a()[o/4+2];if(r)throw b(n);return b(t)}finally{_.__wbindgen_add_to_stack_pointer(16)}}find_orfs(t){try{const c=_.__wbindgen_add_to_stack_pointer(-16);_.seq_find_orfs(c,this.ptr,t);var n=a()[c/4+0],r=a()[c/4+1],o=a()[c/4+2],i=a()[c/4+3];if(i)throw b(o);var s=ee(n,r).slice();return _.__wbindgen_free(n,r*4),s}finally{_.__wbindgen_add_to_stack_pointer(16)}}to_string(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.seq_to_string(r,this.ptr);var t=a()[r/4+0],n=a()[r/4+1];return z(t,n)}finally{_.__wbindgen_add_to_stack_pointer(16),_.__wbindgen_free(t,n)}}}async function ne(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function re(){const e={};return e.wbg={},e.wbg.__wbindgen_string_new=function(t,n){const r=z(t,n);return g(r)},e.wbg.__wbindgen_is_object=function(t){const n=f(t);return typeof n=="object"&&n!==null},e.wbg.__wbg_get_2268d91a19a98b92=function(t,n){const r=f(t)[b(n)];return g(r)},e.wbg.__wbindgen_is_string=function(t){return typeof f(t)=="string"},e.wbg.__wbg_entries_65a76a413fc91037=function(t){const n=Object.entries(f(t));return g(n)},e.wbg.__wbg_length_6e3bbe7c8bd4dbd8=function(t){return f(t).length},e.wbg.__wbg_get_57245cc7d7c7619d=function(t,n){const r=f(t)[n>>>0];return g(r)},e.wbg.__wbindgen_object_drop_ref=function(t){b(t)},e.wbg.__wbg_isArray_27c46c67f498e15d=function(t){return Array.isArray(f(t))},e.wbg.__wbindgen_number_get=function(t,n){const r=f(n),o=typeof r=="number"?r:void 0;Xt()[t/8+1]=lt(o)?0:o,a()[t/4+0]=!lt(o)},e.wbg.__wbg_isSafeInteger_dfa0593e8d7ac35a=function(t){return Number.isSafeInteger(f(t))},e.wbg.__wbg_iterator_6f9d4f28845f426c=function(){return g(Symbol.iterator)},e.wbg.__wbg_get_765201544a2b6869=function(){return K(function(t,n){const r=Reflect.get(f(t),f(n));return g(r)},arguments)},e.wbg.__wbindgen_is_function=function(t){return typeof f(t)=="function"},e.wbg.__wbg_call_97ae9d8645dc388b=function(){return K(function(t,n){const r=f(t).call(f(n));return g(r)},arguments)},e.wbg.__wbg_next_579e583d33566a86=function(t){const n=f(t).next;return g(n)},e.wbg.__wbg_next_aaef7c8aa5e212ac=function(){return K(function(t){const n=f(t).next();return g(n)},arguments)},e.wbg.__wbg_done_1b73b0672e15f234=function(t){return f(t).done},e.wbg.__wbg_value_1ccc36bc03462d71=function(t){const n=f(t).value;return g(n)},e.wbg.__wbg_new_268f7b7dd3430798=function(){return g(new Map)},e.wbg.__wbg_fromCodePoint_3a5b15ba4d213634=function(){return K(function(t){const n=String.fromCodePoint(t>>>0);return g(n)},arguments)},e.wbg.__wbindgen_number_new=function(t){return g(t)},e.wbg.__wbg_set_933729cf5b66ac11=function(t,n,r){const o=f(t).set(f(n),f(r));return g(o)},e.wbg.__wbg_new_1d9a920c6bfc44a8=function(){const t=new Array;return g(t)},e.wbg.__wbg_new_0b9bfdd97583284e=function(){const t=new Object;return g(t)},e.wbg.__wbg_set_c943d600fa71e4dd=function(t,n,r){f(t)[b(n)]=b(r)},e.wbg.__wbg_set_a68214f35c417fa9=function(t,n,r){f(t)[n>>>0]=b(r)},e.wbg.__wbindgen_string_get=function(t,n){const r=f(n),o=typeof r=="string"?r:void 0;var i=lt(o)?0:A(o,_.__wbindgen_malloc,_.__wbindgen_realloc),s=k;a()[t/4+1]=s,a()[t/4+0]=i},e.wbg.__wbindgen_is_null=function(t){return f(t)===null},e.wbg.__wbindgen_is_undefined=function(t){return f(t)===void 0},e.wbg.__wbg_new_8d2af00bc1e329ee=function(t,n){const r=new Error(z(t,n));return g(r)},e.wbg.__wbg_length_9e1ae1900cb0fbd5=function(t){return f(t).length},e.wbg.__wbindgen_memory=function(){const t=_.memory;return g(t)},e.wbg.__wbg_buffer_3f3d764d4747d564=function(t){const n=f(t).buffer;return g(n)},e.wbg.__wbg_new_8c3f0052272a457a=function(t){const n=new Uint8Array(f(t));return g(n)},e.wbg.__wbg_set_83db9690f9353e79=function(t,n,r){f(t).set(f(n),r>>>0)},e.wbg.__wbindgen_boolean_get=function(t){const n=f(t);return typeof n=="boolean"?n?1:0:2},e.wbg.__wbg_instanceof_Uint8Array_971eeda69eb75003=function(t){let n;try{n=f(t)instanceof Uint8Array}catch{n=!1}return n},e.wbg.__wbg_instanceof_ArrayBuffer_e5e48f4762c5610b=function(t){let n;try{n=f(t)instanceof ArrayBuffer}catch{n=!1}return n},e.wbg.__wbg_String_c9c0f9be374874ba=function(t,n){const r=String(f(n)),o=A(r,_.__wbindgen_malloc,_.__wbindgen_realloc),i=k;a()[t/4+1]=i,a()[t/4+0]=o},e.wbg.__wbindgen_object_clone_ref=function(t){const n=f(t);return g(n)},e.wbg.__wbindgen_debug_string=function(t,n){const r=pt(f(n)),o=A(r,_.__wbindgen_malloc,_.__wbindgen_realloc),i=k;a()[t/4+1]=i,a()[t/4+0]=o},e.wbg.__wbindgen_throw=function(t,n){throw new Error(z(t,n))},e}function oe(e,t){return _=e.exports,Wt.__wbindgen_wasm_module=t,tt=new Float64Array,et=new Int32Array,rt=new Uint32Array,X=new Uint8Array,_}async function Wt(e){typeof e>"u"&&(e="/syn-zeug/assets/biobox_bg.wasm");const t=re();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await ne(await e,t);return oe(n,r)}const ie="/syn-zeug/assets/Logo.d0a9f6da.svg";function se(e){let t,n,r;return{c(){t=v("header"),n=v("img"),y(n,"class","h-full py-2 pl-4"),Rt(n.src,r=ie)||y(n,"src",r),y(n,"alt","The SynZeug Logo"),y(t,"class","col-span-2 h-16 bg-surface-900 shadow-2xl z-10")},m(o,i){q(o,t,i),O(t,n)},p:x,i:x,o:x,d(o){o&&j(t)}}}class ce extends F{constructor(t){super(),U(this,t,null,se,N,{})}}const _e="/syn-zeug/assets/Grid.71298c67.svg",ae=e=>({}),Ot=e=>({}),ue=e=>({}),qt=e=>({});function Et(e){let t,n;const r=e[6].header,o=st(r,e,e[5],qt);return{c(){t=v("header"),o&&o.c()},m(i,s){q(i,t,s),o&&o.m(t,null),n=!0},p(i,s){o&&o.p&&(!n||s&32)&&_t(o,r,i,i[5],n?ct(r,i[5],s,ue):at(i[5]),qt)},i(i){n||(h(o,i),n=!0)},o(i){$(o,i),n=!1},d(i){i&&j(t),o&&o.d(i)}}}function Mt(e){let t,n;const r=e[6].footer,o=st(r,e,e[5],Ot);return{c(){t=v("footer"),o&&o.c()},m(i,s){q(i,t,s),o&&o.m(t,null),n=!0},p(i,s){o&&o.p&&(!n||s&32)&&_t(o,r,i,i[5],n?ct(r,i[5],s,ae):at(i[5]),Ot)},i(i){n||(h(o,i),n=!0)},o(i){$(o,i),n=!1},d(i){i&&j(t),o&&o.d(i)}}}function le(e){let t,n,r,o,i,s=e[2].header&&Et(e);const c=e[6].default,l=st(c,e,e[5],null);let u=e[2].footer&&Mt(e);return{c(){t=v("div"),s&&s.c(),n=W(),l&&l.c(),r=W(),u&&u.c(),y(t,"class",o="card "+e[0]+" "+e[1].class),y(t,"data-testid","card")},m(d,p){q(d,t,p),s&&s.m(t,null),O(t,n),l&&l.m(t,null),O(t,r),u&&u.m(t,null),i=!0},p(d,[p]){d[2].header?s?(s.p(d,p),p&4&&h(s,1)):(s=Et(d),s.c(),h(s,1),s.m(t,n)):s&&(At(),$(s,1,1,()=>{s=null}),xt()),l&&l.p&&(!i||p&32)&&_t(l,c,d,d[5],i?ct(c,d[5],p,null):at(d[5]),null),d[2].footer?u?(u.p(d,p),p&4&&h(u,1)):(u=Mt(d),u.c(),h(u,1),u.m(t,null)):u&&(At(),$(u,1,1,()=>{u=null}),xt()),(!i||p&3&&o!==(o="card "+d[0]+" "+d[1].class))&&y(t,"class",o)},i(d){i||(h(s),h(l,d),h(u),i=!0)},o(d){$(s),$(l,d),$(u),i=!1},d(d){d&&j(t),s&&s.d(),l&&l.d(d),u&&u.d()}}}function fe(e,t,n){let r,{$$slots:o={},$$scope:i}=t;const s=Bt(o);let{background:c="bg-surface-200 dark:bg-surface-800 space-y-4"}=t,{color:l=void 0}=t,u="p-4 rounded-lg";return e.$$set=d=>{n(1,t=ft(ft({},t),vt(d))),"background"in d&&n(3,c=d.background),"color"in d&&n(4,l=d.color),"$$scope"in d&&n(5,i=d.$$scope)},e.$$.update=()=>{e.$$.dirty&24&&n(0,r=`${u} ${c} ${l}`)},t=vt(t),[r,t,s,c,l,i,o]}class de extends F{constructor(t){super(),U(this,t,fe,le,N,{background:3,color:4})}}const C=[];function ge(e,t=x){let n;const r=new Set;function o(c){if(N(e,c)&&(e=c,n)){const l=!C.length;for(const u of r)u[1](),C.push(u,e);if(l){for(let u=0;u<C.length;u+=2)C[u][0](C[u+1]);C.length=0}}}function i(c){o(c(e))}function s(c,l=x){const u=[c,l];return r.add(u),r.size===1&&(n=t(o)||x),c(e),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:o,update:i,subscribe:s}}const be={message:"Default Toast Message",autohide:!0,timeout:5e3};function pe(){const{subscribe:e,set:t,update:n}=ge([]);return{subscribe:e,trigger:r=>n(o=>{let i={...be,...r};return o.push(i),o}),close:()=>n(r=>(r.length>0&&r.shift(),r)),clear:()=>t([])}}const Lt=pe();let It;Lt.subscribe(e=>{clearTimeout(It),e.length&&(!e[0].autohide||(It=setTimeout(()=>{Lt.close()},e[0].timeout)))});function we(e){let t;const n=e[1].default,r=st(n,e,e[2],null);return{c(){r&&r.c()},m(o,i){r&&r.m(o,i),t=!0},p(o,i){r&&r.p&&(!t||i&4)&&_t(r,n,o,o[2],t?ct(n,o[2],i,null):at(o[2]),null)},i(o){t||(h(r,o),t=!0)},o(o){$(r,o),t=!1},d(o){r&&r.d(o)}}}function me(e){let t,n,r;return{c(){t=v("p"),n=v("span"),r=Ft(e[0]),y(n,"class","bg-surface-700 px-2 rounded-lg"),y(t,"class","font-plex-mono font-bold uppercase text-xl -mt-[1.9rem] ml-[2%]")},m(o,i){q(o,t,i),O(t,n),O(n,r)},p(o,i){i&1&&Ht(r,o[0])},d(o){o&&j(t)}}}function he(e){let t,n;return t=new de({props:{class:"shadow-lg portrait:w-4/5 landscape:w-1/4 portrait:h-1/4 landscape:h-4/6",background:"bg-surface-700",color:"text-surface-200",$$slots:{header:[me],default:[we]},$$scope:{ctx:e}}}),{c(){I(t.$$.fragment)},m(r,o){E(t,r,o),n=!0},p(r,[o]){const i={};o&5&&(i.$$scope={dirty:o,ctx:r}),t.$set(i)},i(r){n||(h(t.$$.fragment,r),n=!0)},o(r){$(t.$$.fragment,r),n=!1},d(r){M(t,r)}}}function ye(e,t,n){let{$$slots:r={},$$scope:o}=t,{title:i}=t;return e.$$set=s=>{"title"in s&&n(0,i=s.title),"$$scope"in s&&n(2,o=s.$$scope)},[i,r,o]}class mt extends F{constructor(t){super(),U(this,t,ye,he,N,{title:0})}}function $e(e){let t,n,r,o,i;return{c(){t=v("div"),n=v("div"),r=v("textarea"),y(r,"class","w-full h-full font-plex-mono focus:outline-none resize-none bg-transparent"),y(r,"placeholder","Enter a DNA, RNA, or Protein sequence here..."),y(r,"spellcheck","false"),y(n,"class","w-full h-full focus-within:ring-2 ring-primary-500 rounded p-2"),y(t,"class","w-full h-full p-2")},m(s,c){q(s,t,c),O(t,n),O(n,r),ot(r,e[0]),o||(i=Tt(r,"input",e[1]),o=!0)},p(s,c){c&1&&ot(r,s[0])},d(s){s&&j(t),o=!1,i()}}}function ve(e){let t,n;return t=new mt({props:{title:"Input",$$slots:{default:[$e]},$$scope:{ctx:e}}}),{c(){I(t.$$.fragment)},m(r,o){E(t,r,o),n=!0},p(r,[o]){const i={};o&5&&(i.$$scope={dirty:o,ctx:r}),t.$set(i)},i(r){n||(h(t.$$.fragment,r),n=!0)},o(r){$(t.$$.fragment,r),n=!1},d(r){M(t,r)}}}function ke(e,t,n){let{value:r}=t;function o(){r=this.value,n(0,r)}return e.$$set=i=>{"value"in i&&n(0,r=i.value)},[r,o]}class Ae extends F{constructor(t){super(),U(this,t,ke,ve,N,{value:0})}}function xe(e){let t,n,r,o,i;return{c(){t=v("div"),n=v("div"),r=v("textarea"),y(r,"class","w-full h-full font-plex-mono focus:outline-none resize-none bg-transparent"),y(r,"spellcheck","false"),y(n,"class","w-full h-full focus-within:ring-2 ring-warning-500 rounded p-2"),y(t,"class","w-full h-full p-2")},m(s,c){q(s,t,c),O(t,n),O(n,r),ot(r,e[0]),o||(i=Tt(r,"input",e[1]),o=!0)},p(s,c){c&1&&ot(r,s[0])},d(s){s&&j(t),o=!1,i()}}}function je(e){let t,n;return t=new mt({props:{title:"Output",$$slots:{default:[xe]},$$scope:{ctx:e}}}),{c(){I(t.$$.fragment)},m(r,o){E(t,r,o),n=!0},p(r,[o]){const i={};o&5&&(i.$$scope={dirty:o,ctx:r}),t.$set(i)},i(r){n||(h(t.$$.fragment,r),n=!0)},o(r){$(t.$$.fragment,r),n=!1},d(r){M(t,r)}}}function Oe(e,t,n){let{value:r}=t;function o(){r=this.value,n(0,r)}return e.$$set=i=>{"value"in i&&n(0,r=i.value)},[r,o]}class qe extends F{constructor(t){super(),U(this,t,Oe,je,N,{value:0})}}function Ee(e){let t,n,r,o,i,s,c,l,u;function d(w){e[3](w)}let p={};e[0]!==void 0&&(p.value=e[0]),n=new Ae({props:p}),it.push(()=>jt(n,"value",d)),i=new mt({props:{title:"Pipeline"}});function H(w){e[4](w)}let P={};return e[1]!==void 0&&(P.value=e[1]),c=new qe({props:P}),it.push(()=>jt(c,"value",H)),{c(){t=v("main"),I(n.$$.fragment),o=W(),I(i.$$.fragment),s=W(),I(c.$$.fragment),y(t,"class","flex portrait:flex-col landscape:flex-row justify-evenly items-center bg-surface-800 bg-repeat"),Gt(t,"background-image","url("+_e+")")},m(w,G){q(w,t,G),E(n,t,null),O(t,o),E(i,t,null),O(t,s),E(c,t,null),u=!0},p(w,[G]){const ht={};!r&&G&1&&(r=!0,ht.value=w[0],kt(()=>r=!1)),n.$set(ht);const yt={};!l&&G&2&&(l=!0,yt.value=w[1],kt(()=>l=!1)),c.$set(yt)},i(w){u||(h(n.$$.fragment,w),h(i.$$.fragment,w),h(c.$$.fragment,w),u=!0)},o(w){$(n.$$.fragment,w),$(i.$$.fragment,w),$(c.$$.fragment,w),u=!1},d(w){w&&j(t),M(n),M(i),M(c)}}}function Me(e,t,n){let r="",o="",i=new m("");function s(l){r=l,n(0,r)}function c(l){o=l,n(1,o),n(2,i),n(0,r)}return e.$$.update=()=>{e.$$.dirty&1&&n(2,i=new m(r)),e.$$.dirty&4&&n(1,o=i.reverse_complement().to_string())},[r,o,i,s,c]}class Le extends F{constructor(t){super(),U(this,t,Me,Ee,N,{})}}function Ie(e){let t;return{c(){t=v("footer"),y(t,"class","col-span-2 h-16 bg-surface-900")},m(n,r){q(n,t,r)},p:x,i:x,o:x,d(n){n&&j(t)}}}class Ne extends F{constructor(t){super(),U(this,t,null,Ie,N,{})}}function Ue(e){let t,n,r,o,i,s;return t=new ce({}),r=new Le({}),i=new Ne({}),{c(){I(t.$$.fragment),n=W(),I(r.$$.fragment),o=W(),I(i.$$.fragment)},m(c,l){E(t,c,l),q(c,n,l),E(r,c,l),q(c,o,l),E(i,c,l),s=!0},p:x,i(c){s||(h(t.$$.fragment,c),h(r.$$.fragment,c),h(i.$$.fragment,c),s=!0)},o(c){$(t.$$.fragment,c),$(r.$$.fragment,c),$(i.$$.fragment,c),s=!1},d(c){M(t,c),c&&j(n),M(r,c),c&&j(o),M(i,c)}}}let Fe="";function Te(e,t,n){let r="",o=null,i=["No tool selected",[{name:"No tool selected",functionality:s=>null}]];e.$$.update=()=>{if(e.$$.dirty&3)try{r=i[1][0].functionality(o)}catch(s){r=s}};try{n(0,o=new m(Fe.trim()))}catch(s){r=s}return[o,i]}class Ce extends F{constructor(t){super(),U(this,t,Te,Ue,N,{})}}(async()=>(await Wt(),new Ce({target:document.body})))();
