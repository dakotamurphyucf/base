// Generated by Melange
'use strict';

var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var MoreLabels = require("bs-platform/lib/js/moreLabels.js");
var Import$negBase = require("./import.bs.js");

function equal(a, b) {
  if (Import$negBase.phys_equal(a, b)) {
    return true;
  } else if (Import$negBase.phys_equal(a.hash, b.hash) && Import$negBase.phys_equal(a.compare, b.compare)) {
    return Import$negBase.phys_equal(a.sexp_of_t, b.sexp_of_t);
  } else {
    return false;
  }
}

var hash_param = MoreLabels.Hashtbl.hash_param;

var hash = MoreLabels.Hashtbl.hash;

var poly_compare = Caml_obj.caml_compare;

function poly_sexp_of_t(param) {
  return {
          TAG: /* Atom */0,
          _0: "_"
        };
}

var poly = {
  hash: hash,
  compare: poly_compare,
  sexp_of_t: poly_sexp_of_t
};

function of_key(Key) {
  return {
          hash: Key.hash,
          compare: Key.compare,
          sexp_of_t: Key.sexp_of_t
        };
}

function to_key(param) {
  return {
          compare: param.compare,
          sexp_of_t: param.sexp_of_t,
          hash: param.hash
        };
}

var Hashable = {
  equal: equal,
  hash_param: hash_param,
  hash: hash,
  poly: poly,
  of_key: of_key,
  to_key: to_key
};

exports.Hashable = Hashable;
exports.equal = equal;
exports.hash_param = hash_param;
exports.hash = hash;
exports.poly = poly;
exports.of_key = of_key;
exports.to_key = to_key;
/* MoreLabels Not a pure module */
