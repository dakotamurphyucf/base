// Generated by Melange
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Stdlib = require("bs-platform/lib/js/stdlib.js");
var Sys0$negBase = require("./sys0.bs.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var ArrayLabels = require("bs-platform/lib/js/arrayLabels.js");
var Printf$negBase = require("./printf.bs.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");

var Array_int = {};

function create(len, x) {
  try {
    return Caml_array.make(len, x);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.RE_EXN_ID === Stdlib.Invalid_argument) {
      return Curry._2(Printf$negBase.invalid_argf(/* Format */{
                      _0: {
                        TAG: /* String_literal */11,
                        _0: "Array.create ~len:",
                        _1: {
                          TAG: /* Int */4,
                          _0: /* Int_d */0,
                          _1: /* No_padding */0,
                          _2: /* No_precision */0,
                          _3: {
                            TAG: /* String_literal */11,
                            _0: ": invalid length",
                            _1: /* End_of_format */0
                          }
                        }
                      },
                      _1: "Array.create ~len:%d: invalid length"
                    }), len, undefined);
    }
    throw exn;
  }
}

function fold(t, init, f) {
  return ArrayLabels.fold_left(f, init, t);
}

function fold_right(t, f, init) {
  return ArrayLabels.fold_right(f, t, init);
}

function iter(t, f) {
  return ArrayLabels.iter(f, t);
}

function iteri(t, f) {
  return ArrayLabels.iteri(f, t);
}

function map(t, f) {
  return ArrayLabels.map(f, t);
}

function mapi(t, f) {
  return ArrayLabels.mapi(f, t);
}

function stable_sort(t, compare) {
  return ArrayLabels.stable_sort(compare, t);
}

function swap(t, i, j) {
  var elt_i = Caml_array.get(t, i);
  var elt_j = Caml_array.get(t, j);
  t[i] = elt_j;
  t[j] = elt_i;
  
}

var invalid_argf = Printf$negBase.invalid_argf;

var max_length = Sys0$negBase.max_array_length;

var append = ArrayLabels.append;

var blit = ArrayLabels.blit;

var concat = ArrayLabels.concat;

var copy = ArrayLabels.copy;

var fill = ArrayLabels.fill;

var init = ArrayLabels.init;

var make_matrix = ArrayLabels.make_matrix;

var of_list = ArrayLabels.of_list;

var sub = ArrayLabels.sub;

var to_list = ArrayLabels.to_list;

exports.invalid_argf = invalid_argf;
exports.Array_int = Array_int;
exports.max_length = max_length;
exports.create = create;
exports.append = append;
exports.blit = blit;
exports.concat = concat;
exports.copy = copy;
exports.fill = fill;
exports.init = init;
exports.make_matrix = make_matrix;
exports.of_list = of_list;
exports.sub = sub;
exports.to_list = to_list;
exports.fold = fold;
exports.fold_right = fold_right;
exports.iter = iter;
exports.iteri = iteri;
exports.map = map;
exports.mapi = mapi;
exports.stable_sort = stable_sort;
exports.swap = swap;
/* Sys0-Base Not a pure module */