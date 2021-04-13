// Generated by Melange
'use strict';

var Caml = require("caml/./Caml.bs.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

function to_string(prim) {
  return String(prim);
}

var of_string = Caml_format.caml_int_of_string;

function to_float(prim) {
  return prim;
}

function of_float(prim) {
  return prim | 0;
}

function succ(prim) {
  return prim + 1 | 0;
}

var max_value = Caml.max_int;

var min_value = Caml.min_int;

exports.to_string = to_string;
exports.of_string = of_string;
exports.to_float = to_float;
exports.of_float = of_float;
exports.max_value = max_value;
exports.min_value = min_value;
exports.succ = succ;
/* No side effect */
