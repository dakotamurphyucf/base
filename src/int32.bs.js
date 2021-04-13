// Generated by Melange
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Int32 = require("bs-platform/lib/js/int32.js");
var Scanf = require("bs-platform/lib/js/scanf.js");
var Sexp$negBase = require("./sexp.bs.js");
var Caml_float = require("bs-platform/lib/js/caml_float.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Error$negBase = require("./error.bs.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Float0$negBase = require("./float0.bs.js");
var Import$negBase = require("./import.bs.js");
var Printf$negBase = require("./printf.bs.js");
var Int_math$negBase = require("./int_math.bs.js");
var Or_error$negBase = require("./or_error.bs.js");
var Popcount$negBase = require("./popcount.bs.js");
var Base_int_math = require("./base_int_math");
var Comparable$negBase = require("./comparable.bs.js");
var Comparator$negBase = require("./comparator.bs.js");
var Pretty_printer$negBase = require("./pretty_printer.bs.js");
var Int_conversions$negBase = require("./int_conversions.bs.js");

var hash = Import$negBase.hash_int32;

var hashable = {
  hash: hash,
  compare: Int32.compare,
  sexp_of_t: Import$negBase.sexp_of_int32
};

var compare = Int32.compare;

var of_string = Caml_format.caml_int32_of_string;

var include = Comparator$negBase.Make({
      compare: compare,
      sexp_of_t: Import$negBase.sexp_of_int32
    });

var float_lower_bound = Float0$negBase.lower_bound_for_int(32);

var float_upper_bound = Float0$negBase.upper_bound_for_int(32);

var float_of_bits = Caml_float.caml_int32_float_of_bits;

var bits_of_float = Caml_float.caml_int32_bits_of_float;

function shift_right_logical(prim, prim$1) {
  return (prim >>> prim$1) | 0;
}

function shift_right(prim, prim$1) {
  return (prim >> prim$1);
}

function shift_left(prim, prim$1) {
  return (prim << prim$1);
}

function bit_xor(prim, prim$1) {
  return prim ^ prim$1;
}

function bit_or(prim, prim$1) {
  return prim | prim$1;
}

function bit_and(prim, prim$1) {
  return prim & prim$1;
}

var rem = Caml_int32.mod_;

function neg(prim) {
  return -prim | 0;
}

function to_float(prim) {
  return prim;
}

function of_float_unchecked(prim) {
  return prim | 0;
}

function of_float(f) {
  if (Curry._2(Import$negBase.Float_replace_polymorphic_compare.$great$eq, f, float_lower_bound) && Curry._2(Import$negBase.Float_replace_polymorphic_compare.$less$eq, f, float_upper_bound)) {
    return f | 0;
  } else {
    return Curry._2(Printf$negBase.invalid_argf(/* Format */{
                    _0: {
                      TAG: /* String_literal */11,
                      _0: "Int32.of_float: argument (",
                      _1: {
                        TAG: /* Float */8,
                        _0: [
                          /* Float_flag_ */0,
                          /* Float_f */0
                        ],
                        _1: /* No_padding */0,
                        _2: /* No_precision */0,
                        _3: {
                          TAG: /* String_literal */11,
                          _0: ") is out of range or NaN",
                          _1: /* End_of_format */0
                        }
                      }
                    },
                    _1: "Int32.of_float: argument (%f) is out of range or NaN"
                  }), Float0$negBase.box(f), undefined);
  }
}

var include$1 = Comparable$negBase.With_zero({
      compare: compare,
      sexp_of_t: Import$negBase.sexp_of_int32,
      zero: Int32.zero
    });

function $great$eq(x, y) {
  return x >= y;
}

function $less$eq(x, y) {
  return x <= y;
}

function $eq(x, y) {
  return x === y;
}

function $great(x, y) {
  return x > y;
}

function $less(x, y) {
  return x < y;
}

function $less$great(x, y) {
  return x !== y;
}

function descending(x, y) {
  return Int32.compare(y, x);
}

function min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function equal(x, y) {
  return x === y;
}

function between(t, low, high) {
  if (low <= t) {
    return t <= high;
  } else {
    return false;
  }
}

function clamp_unchecked(t, min, max) {
  if (t < min) {
    return min;
  } else if (t <= max) {
    return t;
  } else {
    return max;
  }
}

function clamp_exn(t, min, max) {
  if (min > max) {
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "int32.ml",
            98,
            4
          ],
          Error: new Error()
        };
  }
  return clamp_unchecked(t, min, max);
}

function clamp(t, min, max) {
  if (min > max) {
    return Or_error$negBase.error_s(Sexp$negBase.message("clamp requires [min <= max]", {
                    hd: [
                      "min",
                      Import$negBase.sexp_of_int32(min)
                    ],
                    tl: {
                      hd: [
                        "max",
                        Import$negBase.sexp_of_int32(max)
                      ],
                      tl: /* [] */0
                    }
                  }));
  } else {
    return {
            TAG: /* Ok */0,
            _0: clamp_unchecked(t, min, max)
          };
  }
}

function invariant(param) {
  
}

var $slash = Caml_int32.div;

function $star(prim, prim$1) {
  return Math.imul(prim, prim$1);
}

function $neg(prim, prim$1) {
  return prim - prim$1 | 0;
}

function $plus(prim, prim$1) {
  return prim + prim$1 | 0;
}

function incr(r) {
  r[0] = r[0] + Int32.one | 0;
  
}

function decr(r) {
  r[0] = r[0] - Int32.one | 0;
  
}

function of_int32(t) {
  return t;
}

function to_int32(t) {
  return t;
}

function pow(b, e) {
  return Int_conversions$negBase.int_to_int32_exn(Int_math$negBase.Private.int_pow(Int_conversions$negBase.int32_to_int_exn(b), Int_conversions$negBase.int32_to_int_exn(e)));
}

var $star$star = pow;

function non_positive_argument(param) {
  return Curry._1(Printf$negBase.invalid_argf(/* Format */{
                  _0: {
                    TAG: /* String_literal */11,
                    _0: "argument must be strictly positive",
                    _1: /* End_of_format */0
                  },
                  _1: "argument must be strictly positive"
                }), undefined);
}

function ceil_pow2(x) {
  if (Curry._2(Import$negBase.Int32_replace_polymorphic_compare.$less$eq, x, Int32.zero)) {
    non_positive_argument(undefined);
  }
  var x$1 = Int32.pred(x);
  var x$2 = x$1 | (x$1 >>> 1);
  var x$3 = x$2 | (x$2 >>> 2);
  var x$4 = x$3 | (x$3 >>> 4);
  var x$5 = x$4 | (x$4 >>> 8);
  return Int32.succ(x$5 | (x$5 >>> 16));
}

function floor_pow2(x) {
  if (Curry._2(Import$negBase.Int32_replace_polymorphic_compare.$less$eq, x, Int32.zero)) {
    non_positive_argument(undefined);
  }
  var x$1 = x | (x >>> 1);
  var x$2 = x$1 | (x$1 >>> 2);
  var x$3 = x$2 | (x$2 >>> 4);
  var x$4 = x$3 | (x$3 >>> 8);
  var x$5 = x$4 | (x$4 >>> 16);
  return x$5 - (x$5 >>> 1) | 0;
}

function is_pow2(x) {
  if (Curry._2(Import$negBase.Int32_replace_polymorphic_compare.$less$eq, x, Int32.zero)) {
    non_positive_argument(undefined);
  }
  return Curry._2(Import$negBase.Int32_replace_polymorphic_compare.$eq, x & Int32.pred(x), Int32.zero);
}

function clz(prim) {
  return Base_int_math.Base_int_math_int32_clz(prim);
}

function ctz(prim) {
  return Base_int_math.Base_int_math_int32_ctz(prim);
}

function floor_log2(i) {
  if (Curry._2(Import$negBase.Int32_replace_polymorphic_compare.$less$eq, i, Int32.zero)) {
    Error$negBase.raise_s(Sexp$negBase.message("[Int32.floor_log2] got invalid input", {
              hd: [
                "",
                Import$negBase.sexp_of_int32(i)
              ],
              tl: /* [] */0
            }));
  }
  return Import$negBase.$neg(Import$negBase.$neg(32, 1), Base_int_math.Base_int_math_int32_clz(i));
}

function ceil_log2(i) {
  if (Curry._2(Import$negBase.Int32_replace_polymorphic_compare.$less$eq, i, Int32.zero)) {
    Error$negBase.raise_s(Sexp$negBase.message("[Int32.ceil_log2] got invalid input", {
              hd: [
                "",
                Import$negBase.sexp_of_int32(i)
              ],
              tl: /* [] */0
            }));
  }
  if (Int32.equal(i, Int32.one)) {
    return 0;
  } else {
    return Import$negBase.$neg(32, Base_int_math.Base_int_math_int32_clz(Int32.pred(i)));
  }
}

var include$2 = Int_conversions$negBase.Make({
      to_string: Int32.to_string
    });

var hash$1 = Import$negBase.hash_int32;

function to_string(i) {
  return Curry._1(Printf$negBase.sprintf(/* Format */{
                  _0: {
                    TAG: /* Int32 */5,
                    _0: /* Int_x */6,
                    _1: /* No_padding */0,
                    _2: /* No_precision */0,
                    _3: /* End_of_format */0
                  },
                  _1: "%lx"
                }), i);
}

function of_string$1(s) {
  return Curry._1(Scanf.sscanf(s, /* Format */{
                  _0: {
                    TAG: /* Int32 */5,
                    _0: /* Int_x */6,
                    _1: /* No_padding */0,
                    _2: /* No_precision */0,
                    _3: /* End_of_format */0
                  },
                  _1: "%lx"
                }), (function (prim) {
                return prim;
              }));
}

var include$3 = Int_conversions$negBase.Make_hex({
      compare: Import$negBase.compare_int32,
      hash_fold_t: Import$negBase.hash_fold_int32,
      hash: hash$1,
      to_string: to_string,
      of_string: of_string$1,
      zero: Int32.zero,
      $less: $less,
      neg: neg,
      module_name: "Base.Int32.Hex"
    });

var include$4 = Pretty_printer$negBase.Register({
      module_name: "Base.Int32",
      to_string: Int32.to_string
    });

var include$5 = Int_math$negBase.Make({
      of_float: of_float,
      to_float: to_float,
      of_string: of_string,
      to_string: Int32.to_string,
      $plus: $plus,
      $neg: $neg,
      $star: $star,
      $slash: $slash,
      $tilde$neg: neg,
      $great$eq: $great$eq,
      $less$eq: $less$eq,
      $eq: $eq,
      $great: $great,
      $less: $less,
      $less$great: $less$great,
      abs: Int32.abs,
      neg: neg,
      zero: Int32.zero,
      of_int_exn: Int_conversions$negBase.int_to_int32_exn,
      rem: rem
    });

var $percent = include$5.$percent;

var $slash$percent = include$5.$slash$percent;

var $slash$slash = include$5.$slash$slash;

var t_sexp_grammar = Import$negBase.int32_sexp_grammar;

var of_int_exn = Int_conversions$negBase.int_to_int32_exn;

var to_int_exn = Int_conversions$negBase.int32_to_int_exn;

var hash_fold_t = Import$negBase.hash_fold_int32;

var t_of_sexp = Import$negBase.int32_of_sexp;

var sexp_of_t = include$2.sexp_of_t;

var to_string$1 = Int32.to_string;

var ascending = compare;

var comparator = include.comparator;

var pp = include$4.pp;

var is_positive = include$1.is_positive;

var is_non_negative = include$1.is_non_negative;

var is_negative = include$1.is_negative;

var is_non_positive = include$1.is_non_positive;

var sign = include$1.sign;

var Hex = include$3.Hex;

var to_string_hum = include$2.to_string_hum;

var zero = Int32.zero;

var one = Int32.one;

var minus_one = Int32.minus_one;

var $tilde$neg = neg;

var land = bit_and;

var lor = bit_or;

var lxor = bit_xor;

var lnot = Int32.lognot;

var lsl = shift_left;

var asr = shift_right;

var round = include$5.round;

var round_towards_zero = include$5.round_towards_zero;

var round_down = include$5.round_down;

var round_up = include$5.round_up;

var round_nearest = include$5.round_nearest;

var abs = Int32.abs;

var succ = Int32.succ;

var pred = Int32.pred;

var bit_not = Int32.lognot;

var popcount = Popcount$negBase.int32_popcount;

var of_int32_exn = of_int32;

var to_int32_exn = to_int32;

var of_int64_exn = Int_conversions$negBase.int64_to_int32_exn;

var to_int64 = Int_conversions$negBase.int32_to_int64;

var of_nativeint_exn = Int_conversions$negBase.nativeint_to_int32_exn;

var to_nativeint_exn = Int_conversions$negBase.int32_to_nativeint;

var num_bits = 32;

var max_value = Int32.max_int;

var min_value = Int32.min_int;

var lsr = shift_right_logical;

var O = {
  $plus: $plus,
  $neg: $neg,
  $star: $star,
  $slash: $slash,
  $tilde$neg: neg,
  $star$star: $star$star,
  $great$eq: $great$eq,
  $less$eq: $less$eq,
  $eq: $eq,
  $great: $great,
  $less: $less,
  $less$great: $less$great,
  abs: Int32.abs,
  neg: neg,
  zero: Int32.zero,
  $percent: $percent,
  $slash$percent: $slash$percent,
  $slash$slash: $slash$slash,
  land: bit_and,
  lor: bit_or,
  lxor: bit_xor,
  lnot: Int32.lognot,
  lsl: shift_left,
  asr: shift_right,
  lsr: shift_right_logical
};

var of_int = Int_conversions$negBase.int_to_int32;

var to_int = Int_conversions$negBase.int32_to_int;

var of_nativeint = Int_conversions$negBase.nativeint_to_int32;

var to_nativeint = Int_conversions$negBase.int32_to_nativeint;

var of_int64 = Int_conversions$negBase.int64_to_int32;

var of_int_trunc = Int_conversions$negBase.int_to_int32_trunc;

var to_int_trunc = Int_conversions$negBase.int32_to_int_trunc;

var of_nativeint_trunc = Int_conversions$negBase.nativeint_to_int32_trunc;

var of_int64_trunc = Int_conversions$negBase.int64_to_int32_trunc;

exports.t_sexp_grammar = t_sexp_grammar;
exports.of_float = of_float;
exports.to_float = to_float;
exports.of_int_exn = of_int_exn;
exports.to_int_exn = to_int_exn;
exports.hash_fold_t = hash_fold_t;
exports.hash = hash;
exports.t_of_sexp = t_of_sexp;
exports.sexp_of_t = sexp_of_t;
exports.of_string = of_string;
exports.to_string = to_string$1;
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
exports.hashable = hashable;
exports.is_positive = is_positive;
exports.is_non_negative = is_non_negative;
exports.is_negative = is_negative;
exports.is_non_positive = is_non_positive;
exports.sign = sign;
exports.invariant = invariant;
exports.Hex = Hex;
exports.to_string_hum = to_string_hum;
exports.zero = zero;
exports.one = one;
exports.minus_one = minus_one;
exports.$plus = $plus;
exports.$neg = $neg;
exports.$star = $star;
exports.$star$star = $star$star;
exports.neg = neg;
exports.$tilde$neg = $tilde$neg;
exports.$slash$percent = $slash$percent;
exports.$percent = $percent;
exports.$slash = $slash;
exports.rem = rem;
exports.$slash$slash = $slash$slash;
exports.land = land;
exports.lor = lor;
exports.lxor = lxor;
exports.lnot = lnot;
exports.lsl = lsl;
exports.asr = asr;
exports.round = round;
exports.round_towards_zero = round_towards_zero;
exports.round_down = round_down;
exports.round_up = round_up;
exports.round_nearest = round_nearest;
exports.abs = abs;
exports.succ = succ;
exports.pred = pred;
exports.pow = pow;
exports.bit_and = bit_and;
exports.bit_or = bit_or;
exports.bit_xor = bit_xor;
exports.bit_not = bit_not;
exports.popcount = popcount;
exports.shift_left = shift_left;
exports.shift_right = shift_right;
exports.decr = decr;
exports.incr = incr;
exports.of_int32_exn = of_int32_exn;
exports.to_int32_exn = to_int32_exn;
exports.of_int64_exn = of_int64_exn;
exports.to_int64 = to_int64;
exports.of_nativeint_exn = of_nativeint_exn;
exports.to_nativeint_exn = to_nativeint_exn;
exports.of_float_unchecked = of_float_unchecked;
exports.num_bits = num_bits;
exports.max_value = max_value;
exports.min_value = min_value;
exports.lsr = lsr;
exports.shift_right_logical = shift_right_logical;
exports.ceil_pow2 = ceil_pow2;
exports.floor_pow2 = floor_pow2;
exports.ceil_log2 = ceil_log2;
exports.floor_log2 = floor_log2;
exports.is_pow2 = is_pow2;
exports.clz = clz;
exports.ctz = ctz;
exports.O = O;
exports.of_int = of_int;
exports.to_int = to_int;
exports.of_int32 = of_int32;
exports.to_int32 = to_int32;
exports.of_nativeint = of_nativeint;
exports.to_nativeint = to_nativeint;
exports.of_int64 = of_int64;
exports.of_int_trunc = of_int_trunc;
exports.to_int_trunc = to_int_trunc;
exports.of_nativeint_trunc = of_nativeint_trunc;
exports.of_int64_trunc = of_int64_trunc;
exports.bits_of_float = bits_of_float;
exports.float_of_bits = float_of_bits;
/* include Not a pure module */