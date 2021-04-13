// Generated by Melange
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Error$negBase = require("./error.bs.js");
var Monad$negBase = require("./monad.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Import$negBase = require("./import.bs.js");
var Container$negBase = require("./container.bs.js");
var Applicative$negBase = require("./applicative.bs.js");
var Source_code_position0$negBase = require("./source_code_position0.bs.js");

var t_sexp_grammar = Import$negBase.option_sexp_grammar;

function is_none(param) {
  return param === undefined;
}

function is_some(param) {
  return param !== undefined;
}

function value_map(o, $$default, f) {
  if (o !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(o));
  } else {
    return $$default;
  }
}

function iter(o, f) {
  if (o !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(o));
  }
  
}

function invariant(f, t) {
  return iter(t, f);
}

function call(x, f) {
  if (f !== undefined) {
    return Curry._1(f, x);
  }
  
}

function value(t, $$default) {
  if (t !== undefined) {
    return Caml_option.valFromOption(t);
  } else {
    return $$default;
  }
}

function value_exn(here, error, message, t) {
  if (t !== undefined) {
    return Caml_option.valFromOption(t);
  }
  var tmp;
  if (here !== undefined) {
    tmp = error !== undefined ? Error$negBase.create(undefined, undefined, value(message, ""), [
            Caml_option.valFromOption(error),
            here
          ], (function (param) {
              return Import$negBase.sexp_of_pair(Error$negBase.sexp_of_t, Source_code_position0$negBase.sexp_of_t, param);
            })) : (
        message !== undefined ? Error$negBase.create(undefined, undefined, message, here, Source_code_position0$negBase.sexp_of_t) : Error$negBase.create(undefined, undefined, "Option.value_exn", here, Source_code_position0$negBase.sexp_of_t)
      );
  } else if (error !== undefined) {
    var e = Caml_option.valFromOption(error);
    tmp = message !== undefined ? Error$negBase.tag(e, message) : e;
  } else {
    tmp = message !== undefined ? Error$negBase.of_string(message) : Error$negBase.of_string("Option.value_exn None");
  }
  return Error$negBase.raise(tmp);
}

function to_array(t) {
  if (t !== undefined) {
    return [Caml_option.valFromOption(t)];
  } else {
    return [];
  }
}

function to_list(t) {
  if (t !== undefined) {
    return {
            hd: Caml_option.valFromOption(t),
            tl: /* [] */0
          };
  } else {
    return /* [] */0;
  }
}

function min_elt(t, param) {
  return t;
}

function max_elt(t, param) {
  return t;
}

function sum(M, t, f) {
  return value_map(t, M.zero, f);
}

function for_all(t, f) {
  if (t !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(t));
  } else {
    return true;
  }
}

function exists(t, f) {
  if (t !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(t));
  } else {
    return false;
  }
}

function mem(t, a, equal) {
  if (t !== undefined) {
    return Curry._2(equal, a, Caml_option.valFromOption(t));
  } else {
    return false;
  }
}

function length(t) {
  if (t !== undefined) {
    return 1;
  } else {
    return 0;
  }
}

function fold(t, init, f) {
  if (t !== undefined) {
    return Curry._2(f, init, Caml_option.valFromOption(t));
  } else {
    return init;
  }
}

function count(t, f) {
  if (t !== undefined && Curry._1(f, Caml_option.valFromOption(t))) {
    return 1;
  } else {
    return 0;
  }
}

function find(t, f) {
  if (t === undefined) {
    return ;
  }
  var x = Caml_option.valFromOption(t);
  if (Curry._1(f, x)) {
    return Caml_option.some(x);
  }
  
}

function find_map(t, f) {
  if (t !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(t));
  }
  
}

function equal(f, t, t$p) {
  if (t !== undefined) {
    if (t$p !== undefined) {
      return Curry._2(f, Caml_option.valFromOption(t), Caml_option.valFromOption(t$p));
    } else {
      return false;
    }
  } else {
    return t$p === undefined;
  }
}

function some(x) {
  return Caml_option.some(x);
}

function first_some(x, y) {
  if (x !== undefined) {
    return x;
  } else {
    return y;
  }
}

function some_if(cond, x) {
  if (cond) {
    return Caml_option.some(x);
  }
  
}

function merge(a, b, f) {
  if (a !== undefined) {
    if (b !== undefined) {
      return Caml_option.some(Curry._2(f, Caml_option.valFromOption(a), Caml_option.valFromOption(b)));
    } else {
      return a;
    }
  } else {
    return b;
  }
}

function filter(t, f) {
  if (t !== undefined && Curry._1(f, Caml_option.valFromOption(t))) {
    return t;
  }
  
}

function try_with(f) {
  var x;
  try {
    x = Curry._1(f, undefined);
  }
  catch (exn){
    return ;
  }
  return Caml_option.some(x);
}

function try_with_join(f) {
  try {
    return Curry._1(f, undefined);
  }
  catch (exn){
    return ;
  }
}

function map(t, f) {
  if (t !== undefined) {
    return Caml_option.some(Curry._1(f, Caml_option.valFromOption(t)));
  }
  
}

function apply(f, x) {
  if (f !== undefined) {
    return map(x, f);
  }
  
}

function $$return(x) {
  return Caml_option.some(x);
}

var map$1 = {
  NAME: "Custom",
  VAL: map
};

function bind(o, f) {
  if (o !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(o));
  }
  
}

var Monad_arg = {
  $$return: $$return,
  apply: apply,
  map: map$1,
  bind: bind
};

var include = Monad$negBase.Make({
      bind: bind,
      $$return: $$return,
      map: map$1
    });

var include$1 = Applicative$negBase.Make(Monad_arg);

function fold_result(t, init, f) {
  return Container$negBase.fold_result(fold, init, f, t);
}

function fold_until(t, init, f) {
  return function (param) {
    return Container$negBase.fold_until(fold, init, f, param, t);
  };
}

var compare = Import$negBase.compare_option;

var hash_fold_t = Import$negBase.hash_fold_option;

var t_of_sexp = Import$negBase.option_of_sexp;

var sexp_of_t = Import$negBase.sexp_of_option;

var both = include$1.both;

var $less$star$great = include$1.$less$star$great;

var $less$star = include$1.$less$star;

var $star$great = include$1.$star$great;

var apply$1 = include$1.apply;

var map2 = include$1.map2;

var map3 = include$1.map3;

var Applicative_infix = include$1.Applicative_infix;

var $great$great$eq = include.$great$great$eq;

var $great$great$pipe = include$1.$great$great$pipe;

var Monad_infix = include.Monad_infix;

var bind$1 = include.bind;

var $$return$1 = include$1.$$return;

var map$2 = include$1.map;

var join = include.join;

var ignore_m = include.ignore_m;

var all = include$1.all;

var all_unit = include$1.all_unit;

var Let_syntax = include.Let_syntax;

var is_empty = is_none;

exports.compare = compare;
exports.hash_fold_t = hash_fold_t;
exports.t_sexp_grammar = t_sexp_grammar;
exports.equal = equal;
exports.invariant = invariant;
exports.t_of_sexp = t_of_sexp;
exports.sexp_of_t = sexp_of_t;
exports.both = both;
exports.$less$star$great = $less$star$great;
exports.$less$star = $less$star;
exports.$star$great = $star$great;
exports.apply = apply$1;
exports.map2 = map2;
exports.map3 = map3;
exports.Applicative_infix = Applicative_infix;
exports.$great$great$eq = $great$great$eq;
exports.$great$great$pipe = $great$great$pipe;
exports.Monad_infix = Monad_infix;
exports.bind = bind$1;
exports.$$return = $$return$1;
exports.map = map$2;
exports.join = join;
exports.ignore_m = ignore_m;
exports.all = all;
exports.all_unit = all_unit;
exports.Let_syntax = Let_syntax;
exports.value = value;
exports.value_exn = value_exn;
exports.value_map = value_map;
exports.fold = fold;
exports.mem = mem;
exports.length = length;
exports.iter = iter;
exports.exists = exists;
exports.for_all = for_all;
exports.find = find;
exports.find_map = find_map;
exports.to_list = to_list;
exports.to_array = to_array;
exports.call = call;
exports.merge = merge;
exports.filter = filter;
exports.try_with = try_with;
exports.try_with_join = try_with_join;
exports.some = some;
exports.first_some = first_some;
exports.some_if = some_if;
exports.is_none = is_none;
exports.is_some = is_some;
exports.is_empty = is_empty;
exports.fold_result = fold_result;
exports.fold_until = fold_until;
exports.min_elt = min_elt;
exports.max_elt = max_elt;
exports.count = count;
exports.sum = sum;
/* include Not a pure module */