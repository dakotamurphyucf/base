// Generated by Melange
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Scanf = require("bs-platform/lib/js/scanf.js");
var Stdlib = require("bs-platform/lib/js/stdlib.js");
var Hash$negBase = require("./hash.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Import$negBase = require("./import.bs.js");
var Printf$negBase = require("./printf.bs.js");
var String$negBase = require("./string.bs.js");
var Uchar0$negBase = require("./uchar0.bs.js");
var Comparable$negBase = require("./comparable.bs.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");
var Pretty_printer$negBase = require("./pretty_printer.bs.js");
var Sexp_grammar$negSexplib0 = require("sexplib0/./sexp_grammar.bs.js");

function hash_fold_t(state, t) {
  return Hash$negBase.fold_int(state, Uchar0$negBase.to_int(t));
}

function hash(t) {
  return Hash$negBase.run(undefined, hash_fold_t, t);
}

function to_string(t) {
  return Curry._1(Printf$negBase.sprintf(/* Format */{
                  _0: {
                    TAG: /* String_literal */11,
                    _0: "U+",
                    _1: {
                      TAG: /* Int */4,
                      _0: /* Int_X */8,
                      _1: {
                        TAG: /* Lit_padding */0,
                        _0: /* Zeros */2,
                        _1: 4
                      },
                      _2: /* No_precision */0,
                      _3: /* End_of_format */0
                    }
                  },
                  _1: "U+%04X"
                }), Uchar0$negBase.to_int(t));
}

function sexp_of_t(t) {
  return {
          TAG: /* Atom */0,
          _0: to_string(t)
        };
}

function t_of_sexp(sexp) {
  if (sexp.TAG !== /* Atom */0) {
    return Import$negBase.of_sexp_error("Uchar.t_of_sexp: atom needed", sexp);
  }
  try {
    return Curry._1(Scanf.sscanf(sexp._0, /* Format */{
                    _0: {
                      TAG: /* String_literal */11,
                      _0: "U+",
                      _1: {
                        TAG: /* Int */4,
                        _0: /* Int_X */8,
                        _1: /* No_padding */0,
                        _2: /* No_precision */0,
                        _3: /* End_of_format */0
                      }
                    },
                    _1: "U+%X"
                  }), Uchar0$negBase.of_int);
  }
  catch (exn){
    return Import$negBase.of_sexp_error("Uchar.t_of_sexp: atom of the form U+XXXX needed", sexp);
  }
}

var t_sexp_grammar = Sexp_grammar$negSexplib0.coerce(String$negBase.t_sexp_grammar);

var include = Pretty_printer$negBase.Register({
      module_name: "Base.Uchar",
      to_string: to_string
    });

var include$1 = Comparable$negBase.Make({
      compare: Uchar0$negBase.compare,
      sexp_of_t: sexp_of_t
    });

function invariant(param) {
  
}

function succ_exn(c) {
  try {
    return Uchar0$negBase.succ(c);
  }
  catch (raw_msg){
    var msg = Caml_js_exceptions.internalToOCamlException(raw_msg);
    if (msg.RE_EXN_ID === Stdlib.Invalid_argument) {
      return Curry._2(Printf$negBase.failwithf(/* Format */{
                      _0: {
                        TAG: /* String_literal */11,
                        _0: "Uchar.succ_exn: ",
                        _1: {
                          TAG: /* String */2,
                          _0: /* No_padding */0,
                          _1: /* End_of_format */0
                        }
                      },
                      _1: "Uchar.succ_exn: %s"
                    }), msg._1, undefined);
    }
    throw msg;
  }
}

function succ(c) {
  try {
    return Caml_option.some(Uchar0$negBase.succ(c));
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.RE_EXN_ID === Stdlib.Invalid_argument) {
      return ;
    }
    throw exn;
  }
}

function pred_exn(c) {
  try {
    return Uchar0$negBase.pred(c);
  }
  catch (raw_msg){
    var msg = Caml_js_exceptions.internalToOCamlException(raw_msg);
    if (msg.RE_EXN_ID === Stdlib.Invalid_argument) {
      return Curry._2(Printf$negBase.failwithf(/* Format */{
                      _0: {
                        TAG: /* String_literal */11,
                        _0: "Uchar.pred_exn: ",
                        _1: {
                          TAG: /* String */2,
                          _0: /* No_padding */0,
                          _1: /* End_of_format */0
                        }
                      },
                      _1: "Uchar.pred_exn: %s"
                    }), msg._1, undefined);
    }
    throw msg;
  }
}

function pred(c) {
  try {
    return Caml_option.some(Uchar0$negBase.pred(c));
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.RE_EXN_ID === Stdlib.Invalid_argument) {
      return ;
    }
    throw exn;
  }
}

function of_scalar(i) {
  if (Uchar0$negBase.is_valid(i)) {
    return Caml_option.some(Uchar0$negBase.unsafe_of_int(i));
  }
  
}

function of_scalar_exn(i) {
  if (Uchar0$negBase.is_valid(i)) {
    return Uchar0$negBase.unsafe_of_int(i);
  } else {
    return Curry._2(Printf$negBase.failwithf(/* Format */{
                    _0: {
                      TAG: /* String_literal */11,
                      _0: "Uchar.of_int_exn got a invalid Unicode scalar value: ",
                      _1: {
                        TAG: /* Int */4,
                        _0: /* Int_X */8,
                        _1: {
                          TAG: /* Lit_padding */0,
                          _0: /* Zeros */2,
                          _1: 4
                        },
                        _2: /* No_precision */0,
                        _3: /* End_of_format */0
                      }
                    },
                    _1: "Uchar.of_int_exn got a invalid Unicode scalar value: %04X"
                  }), i, undefined);
  }
}

var to_scalar = Uchar0$negBase.to_int;

function to_char(c) {
  if (Uchar0$negBase.is_char(c)) {
    return Uchar0$negBase.unsafe_to_char(c);
  }
  
}

function to_char_exn(c) {
  if (Uchar0$negBase.is_char(c)) {
    return Uchar0$negBase.unsafe_to_char(c);
  } else {
    return Curry._2(Printf$negBase.failwithf(/* Format */{
                    _0: {
                      TAG: /* String_literal */11,
                      _0: "Uchar.to_char_exn got a non latin-1 character: U+",
                      _1: {
                        TAG: /* Int */4,
                        _0: /* Int_X */8,
                        _1: {
                          TAG: /* Lit_padding */0,
                          _0: /* Zeros */2,
                          _1: 4
                        },
                        _2: /* No_precision */0,
                        _3: /* End_of_format */0
                      }
                    },
                    _1: "Uchar.to_char_exn got a non latin-1 character: U+%04X"
                  }), Uchar0$negBase.to_int(c), undefined);
  }
}

var $great$eq = Import$negBase.Uchar_replace_polymorphic_compare.$great$eq;

var $less$eq = Import$negBase.Uchar_replace_polymorphic_compare.$less$eq;

var $eq = Import$negBase.Uchar_replace_polymorphic_compare.$eq;

var $great = Import$negBase.Uchar_replace_polymorphic_compare.$great;

var $less = Import$negBase.Uchar_replace_polymorphic_compare.$less;

var $less$great = Import$negBase.Uchar_replace_polymorphic_compare.$less$great;

var equal = Import$negBase.Uchar_replace_polymorphic_compare.equal;

var compare = Import$negBase.Uchar_replace_polymorphic_compare.compare;

var min = Import$negBase.Uchar_replace_polymorphic_compare.min;

var max = Import$negBase.Uchar_replace_polymorphic_compare.max;

var ascending = Import$negBase.Uchar_replace_polymorphic_compare.ascending;

var descending = Import$negBase.Uchar_replace_polymorphic_compare.descending;

var between = include$1.between;

var clamp_exn = include$1.clamp_exn;

var clamp = include$1.clamp;

var comparator = include$1.comparator;

var pp = include.pp;

var is_char = Uchar0$negBase.is_char;

var of_char = Uchar0$negBase.of_char;

var int_is_scalar = Uchar0$negBase.is_valid;

var min_value = Uchar0$negBase.min_value;

var max_value = Uchar0$negBase.max_value;

exports.hash_fold_t = hash_fold_t;
exports.hash = hash;
exports.t_of_sexp = t_of_sexp;
exports.sexp_of_t = sexp_of_t;
exports.t_sexp_grammar = t_sexp_grammar;
exports.$great$eq = $great$eq;
exports.$less$eq = $less$eq;
exports.$eq = $eq;
exports.$great = $great;
exports.$less = $less;
exports.$less$great = $less$great;
exports.equal = equal;
exports.compare = compare;
exports.min = min;
exports.max = max;
exports.ascending = ascending;
exports.descending = descending;
exports.between = between;
exports.clamp_exn = clamp_exn;
exports.clamp = clamp;
exports.comparator = comparator;
exports.pp = pp;
exports.invariant = invariant;
exports.succ = succ;
exports.succ_exn = succ_exn;
exports.pred = pred;
exports.pred_exn = pred_exn;
exports.is_char = is_char;
exports.to_char = to_char;
exports.to_char_exn = to_char_exn;
exports.of_char = of_char;
exports.int_is_scalar = int_is_scalar;
exports.of_scalar = of_scalar;
exports.of_scalar_exn = of_scalar_exn;
exports.to_scalar = to_scalar;
exports.min_value = min_value;
exports.max_value = max_value;
/* t_sexp_grammar Not a pure module */