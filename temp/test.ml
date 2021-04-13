open Sexplib0

let a = Sexp.Atom "sdsd"
open Shadow_stdlib
let b = List.map
let () = Js.log (Sexp.to_string a);