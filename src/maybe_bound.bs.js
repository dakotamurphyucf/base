// Generated by Melange
'use strict';

var Caml = require("bs-platform/lib/js/caml.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Hash$negBase = require("./hash.bs.js");
var List$negBase = require("./list.bs.js");
var Import$negBase = require("./import.bs.js");
var Sexp_conv_error$negSexplib0 = require("sexplib0/./sexp_conv_error.bs.js");

function all(_all_of_a) {
  var map = function (_l, _acc) {
    while(true) {
      var acc = _acc;
      var l = _l;
      if (!l) {
        return List$negBase.rev(acc);
      }
      _acc = {
        hd: {
          TAG: /* Incl */0,
          _0: l.hd
        },
        tl: acc
      };
      _l = l.tl;
      continue ;
    };
  };
  var map$1 = function (_l, _acc) {
    while(true) {
      var acc = _acc;
      var l = _l;
      if (!l) {
        return List$negBase.rev(acc);
      }
      _acc = {
        hd: {
          TAG: /* Excl */1,
          _0: l.hd
        },
        tl: acc
      };
      _l = l.tl;
      continue ;
    };
  };
  return List$negBase.append(map(_all_of_a, /* [] */0), List$negBase.append(map$1(_all_of_a, /* [] */0), {
                  hd: /* Unbounded */0,
                  tl: /* [] */0
                }));
}

var _tp_loc = "maybe_bound.ml.t";

function t_of_sexp(_of_a, _sexp) {
  if (_sexp.TAG === /* Atom */0) {
    switch (_sexp._0) {
      case "Excl" :
      case "Incl" :
      case "excl" :
      case "incl" :
          return Sexp_conv_error$negSexplib0.stag_takes_args(_tp_loc, _sexp);
      case "Unbounded" :
      case "unbounded" :
          return /* Unbounded */0;
      default:
        return Sexp_conv_error$negSexplib0.unexpected_stag(_tp_loc, _sexp);
    }
  } else {
    var match = _sexp._0;
    if (!match) {
      return Sexp_conv_error$negSexplib0.empty_list_invalid_sum(_tp_loc, _sexp);
    }
    var _tag = match.hd;
    if (_tag.TAG !== /* Atom */0) {
      return Sexp_conv_error$negSexplib0.nested_list_invalid_sum(_tp_loc, _sexp);
    }
    var _tag$1 = _tag._0;
    var exit = 0;
    switch (_tag$1) {
      case "Excl" :
      case "excl" :
          exit = 2;
          break;
      case "Incl" :
      case "incl" :
          exit = 1;
          break;
      case "Unbounded" :
      case "unbounded" :
          return Sexp_conv_error$negSexplib0.stag_no_args(_tp_loc, _sexp);
      default:
        return Sexp_conv_error$negSexplib0.unexpected_stag(_tp_loc, _sexp);
    }
    switch (exit) {
      case 1 :
          var sexp_args = match.tl;
          if (!sexp_args) {
            return Sexp_conv_error$negSexplib0.stag_incorrect_n_args(_tp_loc, _tag$1, _sexp);
          }
          if (sexp_args.tl) {
            return Sexp_conv_error$negSexplib0.stag_incorrect_n_args(_tp_loc, _tag$1, _sexp);
          }
          var v0 = Curry._1(_of_a, sexp_args.hd);
          return {
                  TAG: /* Incl */0,
                  _0: v0
                };
      case 2 :
          var sexp_args$1 = match.tl;
          if (!sexp_args$1) {
            return Sexp_conv_error$negSexplib0.stag_incorrect_n_args(_tp_loc, _tag$1, _sexp);
          }
          if (sexp_args$1.tl) {
            return Sexp_conv_error$negSexplib0.stag_incorrect_n_args(_tp_loc, _tag$1, _sexp);
          }
          var v0$1 = Curry._1(_of_a, sexp_args$1.hd);
          return {
                  TAG: /* Excl */1,
                  _0: v0$1
                };
      
    }
  }
}

function sexp_of_t(_of_a, v0) {
  if (typeof v0 === "number") {
    return {
            TAG: /* Atom */0,
            _0: "Unbounded"
          };
  }
  if (v0.TAG === /* Incl */0) {
    var v0$1 = Curry._1(_of_a, v0._0);
    return {
            TAG: /* List */1,
            _0: {
              hd: {
                TAG: /* Atom */0,
                _0: "Incl"
              },
              tl: {
                hd: v0$1,
                tl: /* [] */0
              }
            }
          };
  }
  var v0$2 = Curry._1(_of_a, v0._0);
  return {
          TAG: /* List */1,
          _0: {
            hd: {
              TAG: /* Atom */0,
              _0: "Excl"
            },
            tl: {
              hd: v0$2,
              tl: /* [] */0
            }
          }
        };
}

function t_sexp_grammar(_$pa_sexp_grammar) {
  return {
          TAG: /* Union */5,
          _0: {
            hd: {
              TAG: /* Enum */1,
              _0: {
                name_kind: /* Capitalized */1,
                names: {
                  hd: "Unbounded",
                  tl: /* [] */0
                }
              }
            },
            tl: {
              hd: {
                TAG: /* Variant */4,
                _0: {
                  name_kind: /* Capitalized */1,
                  clauses: {
                    hd: {
                      name: "Incl",
                      args: {
                        TAG: /* Cons */0,
                        _0: _$pa_sexp_grammar,
                        _1: /* Empty */0
                      }
                    },
                    tl: {
                      hd: {
                        name: "Excl",
                        args: {
                          TAG: /* Cons */0,
                          _0: _$pa_sexp_grammar,
                          _1: /* Empty */0
                        }
                      },
                      tl: /* [] */0
                    }
                  }
                }
              },
              tl: /* [] */0
            }
          }
        };
}

var _tp_loc$1 = "maybe_bound.ml.interval_comparison";

function interval_comparison_of_sexp(sexp) {
  if (sexp.TAG === /* Atom */0) {
    switch (sexp._0) {
      case "Above_upper_bound" :
      case "above_upper_bound" :
          return /* Above_upper_bound */2;
      case "Below_lower_bound" :
      case "below_lower_bound" :
          return /* Below_lower_bound */0;
      case "In_range" :
      case "in_range" :
          return /* In_range */1;
      default:
        return Sexp_conv_error$negSexplib0.unexpected_stag(_tp_loc$1, sexp);
    }
  } else {
    var match = sexp._0;
    if (!match) {
      return Sexp_conv_error$negSexplib0.empty_list_invalid_sum(_tp_loc$1, sexp);
    }
    var match$1 = match.hd;
    if (match$1.TAG !== /* Atom */0) {
      return Sexp_conv_error$negSexplib0.nested_list_invalid_sum(_tp_loc$1, sexp);
    }
    switch (match$1._0) {
      case "Above_upper_bound" :
      case "Below_lower_bound" :
      case "In_range" :
      case "above_upper_bound" :
      case "below_lower_bound" :
      case "in_range" :
          return Sexp_conv_error$negSexplib0.stag_no_args(_tp_loc$1, sexp);
      default:
        return Sexp_conv_error$negSexplib0.unexpected_stag(_tp_loc$1, sexp);
    }
  }
}

function sexp_of_interval_comparison(param) {
  switch (param) {
    case /* Below_lower_bound */0 :
        return {
                TAG: /* Atom */0,
                _0: "Below_lower_bound"
              };
    case /* In_range */1 :
        return {
                TAG: /* Atom */0,
                _0: "In_range"
              };
    case /* Above_upper_bound */2 :
        return {
                TAG: /* Atom */0,
                _0: "Above_upper_bound"
              };
    
  }
}

var compare_interval_comparison = Caml.caml_int_compare;

function hash_fold_interval_comparison(hsv, arg) {
  switch (arg) {
    case /* Below_lower_bound */0 :
        return Hash$negBase.fold_int(hsv, 0);
    case /* In_range */1 :
        return Hash$negBase.fold_int(hsv, 1);
    case /* Above_upper_bound */2 :
        return Hash$negBase.fold_int(hsv, 2);
    
  }
}

function hash_interval_comparison(x) {
  var hsv = Hash$negBase.create(undefined, undefined);
  return Hash$negBase.get_hash_value(hash_fold_interval_comparison(hsv, x));
}

function map(t, f) {
  if (typeof t === "number") {
    return /* Unbounded */0;
  } else if (t.TAG === /* Incl */0) {
    return {
            TAG: /* Incl */0,
            _0: Curry._1(f, t._0)
          };
  } else {
    return {
            TAG: /* Excl */1,
            _0: Curry._1(f, t._0)
          };
  }
}

function is_lower_bound(t, a, compare) {
  if (typeof t === "number") {
    return true;
  } else if (t.TAG === /* Incl */0) {
    return Import$negBase.$less$eq(Curry._2(compare, t._0, a), 0);
  } else {
    return Import$negBase.$less(Curry._2(compare, t._0, a), 0);
  }
}

function is_upper_bound(t, a, compare) {
  if (typeof t === "number") {
    return true;
  } else if (t.TAG === /* Incl */0) {
    return Import$negBase.$less$eq(Curry._2(compare, a, t._0), 0);
  } else {
    return Import$negBase.$less(Curry._2(compare, a, t._0), 0);
  }
}

function bounds_crossed(lower, upper, compare) {
  if (typeof lower === "number" || typeof upper === "number") {
    return false;
  } else {
    return Import$negBase.$great(Curry._2(compare, lower._0, upper._0), 0);
  }
}

function check_interval_exn(lower, upper, compare) {
  if (bounds_crossed(lower, upper, compare)) {
    return Import$negBase.failwith("Maybe_bound.compare_to_interval_exn: lower bound > upper bound");
  }
  
}

function compare_to_interval_exn(lower, upper, a, compare) {
  check_interval_exn(lower, upper, compare);
  if (is_lower_bound(lower, a, compare)) {
    if (is_upper_bound(upper, a, compare)) {
      return /* In_range */1;
    } else {
      return /* Above_upper_bound */2;
    }
  } else {
    return /* Below_lower_bound */0;
  }
}

function interval_contains_exn(lower, upper, a, compare) {
  var match = compare_to_interval_exn(lower, upper, a, compare);
  return match === 1;
}

var interval_comparison_sexp_grammar = {
  TAG: /* Enum */1,
  _0: {
    name_kind: /* Capitalized */1,
    names: {
      hd: "Below_lower_bound",
      tl: {
        hd: "In_range",
        tl: {
          hd: "Above_upper_bound",
          tl: /* [] */0
        }
      }
    }
  }
};

exports.all = all;
exports.t_of_sexp = t_of_sexp;
exports.sexp_of_t = sexp_of_t;
exports.t_sexp_grammar = t_sexp_grammar;
exports.map = map;
exports.is_lower_bound = is_lower_bound;
exports.is_upper_bound = is_upper_bound;
exports.interval_contains_exn = interval_contains_exn;
exports.bounds_crossed = bounds_crossed;
exports.sexp_of_interval_comparison = sexp_of_interval_comparison;
exports.interval_comparison_of_sexp = interval_comparison_of_sexp;
exports.interval_comparison_sexp_grammar = interval_comparison_sexp_grammar;
exports.compare_interval_comparison = compare_interval_comparison;
exports.hash_fold_interval_comparison = hash_fold_interval_comparison;
exports.hash_interval_comparison = hash_interval_comparison;
exports.compare_to_interval_exn = compare_to_interval_exn;
/* Hash-Base Not a pure module */
