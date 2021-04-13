// Generated by Melange
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Int0$negBase = require("./int0.bs.js");
var Caml_int64 = require("bs-platform/lib/js/caml_int64.js");
var Char0$negBase = require("./char0.bs.js");
var List0$negBase = require("./list0.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Import0$negBase = require("./import0.bs.js");
var CamlinternalLazy = require("bs-platform/lib/js/camlinternalLazy.js");
var Caml_external_polyfill = require("bs-platform/lib/js/caml_external_polyfill.js");
var Base_internalhash_types$negBase = require("../hash_types/src/base_internalhash_types.bs.js");

function F(Hash) {
  var alloc = Hash.alloc;
  var reset = Hash.reset;
  var get_hash_value = Hash.get_hash_value;
  var create = function (seed, param) {
    return Curry._2(reset, seed, Curry._1(alloc, undefined));
  };
  var of_fold = function (hash_fold_t, t) {
    return Curry._1(get_hash_value, Curry._2(hash_fold_t, Curry._2(reset, undefined, Curry._1(alloc, undefined)), t));
  };
  var hash_fold_unit = function (s, param) {
    return s;
  };
  var hash_fold_int = Hash.fold_int;
  var hash_fold_int64 = Hash.fold_int64;
  var hash_fold_float = Hash.fold_float;
  var hash_fold_string = Hash.fold_string;
  var hash_fold_int32 = Curry.__2(hash_fold_int);
  var hash_fold_char = function (param, param$1) {
    return Curry._2(hash_fold_int, param, Char0$negBase.to_int(param$1));
  };
  var hash_fold_bool = function (param, param$1) {
    return Curry._2(hash_fold_int, param, param$1 ? 1 : 0);
  };
  var hash_fold_nativeint = function (s, x) {
    return Curry._2(hash_fold_int64, s, Caml_int64.of_int32(x));
  };
  var hash_fold_option = function (hash_fold_elem, s, x) {
    if (x !== undefined) {
      return Curry._2(hash_fold_elem, Curry._2(hash_fold_int, s, 1), Caml_option.valFromOption(x));
    } else {
      return Curry._2(hash_fold_int, s, 0);
    }
  };
  var hash_fold_list = function (hash_fold_elem, s, list) {
    var s$1 = Curry._2(hash_fold_int, s, List0$negBase.length(list));
    var _s = s$1;
    var _list = list;
    while(true) {
      var list$1 = _list;
      var s$2 = _s;
      if (!list$1) {
        return s$2;
      }
      _list = list$1.tl;
      _s = Curry._2(hash_fold_elem, s$2, list$1.hd);
      continue ;
    };
  };
  var hash_fold_lazy_t = function (hash_fold_elem, s, x) {
    return Curry._2(hash_fold_elem, s, CamlinternalLazy.force(x));
  };
  var hash_fold_ref_frozen = function (hash_fold_elem, s, x) {
    return Curry._2(hash_fold_elem, s, x[0]);
  };
  var hash_fold_array_frozen = function (hash_fold_elem, s, array) {
    var _s = Curry._2(hash_fold_int, s, array.length);
    var _i = 0;
    while(true) {
      var i = _i;
      var s$1 = _s;
      if (Import0$negBase.$eq(i, array.length)) {
        return s$1;
      }
      var e = array[i];
      _i = Import0$negBase.$plus(i, 1);
      _s = Curry._2(hash_fold_elem, s$1, e);
      continue ;
    };
  };
  var hash_nativeint = function (x) {
    var s = Curry._2(Hash.reset, undefined, Curry._1(Hash.alloc, undefined));
    return Curry._1(Hash.get_hash_value, Curry._2(hash_fold_int64, s, Caml_int64.of_int32(x)));
  };
  var hash_int64 = function (x) {
    return Curry._1(Hash.get_hash_value, Curry._2(hash_fold_int64, Curry._2(Hash.reset, undefined, Curry._1(Hash.alloc, undefined)), x));
  };
  var hash_int32 = function (x) {
    var param = Curry._2(Hash.reset, undefined, Curry._1(Hash.alloc, undefined));
    return Curry._1(Hash.get_hash_value, Curry._2(hash_fold_int, param, x));
  };
  var hash_char = function (x) {
    var param = Curry._2(Hash.reset, undefined, Curry._1(Hash.alloc, undefined));
    return Curry._1(Hash.get_hash_value, Curry._2(hash_fold_int, param, Char0$negBase.to_int(x)));
  };
  var hash_int = function (x) {
    return Curry._1(Hash.get_hash_value, Curry._2(hash_fold_int, Curry._2(Hash.reset, undefined, Curry._1(Hash.alloc, undefined)), x));
  };
  var hash_bool = function (x) {
    return Curry._1(Hash.get_hash_value, hash_fold_bool(Curry._2(Hash.reset, undefined, Curry._1(Hash.alloc, undefined)), x));
  };
  var hash_string = function (x) {
    return Curry._1(Hash.get_hash_value, Curry._2(hash_fold_string, Curry._2(Hash.reset, undefined, Curry._1(Hash.alloc, undefined)), x));
  };
  var hash_float = function (x) {
    return Curry._1(Hash.get_hash_value, Curry._2(hash_fold_float, Curry._2(Hash.reset, undefined, Curry._1(Hash.alloc, undefined)), x));
  };
  var hash_unit = function (x) {
    return Curry._1(Hash.get_hash_value, Curry._2(Hash.reset, undefined, Curry._1(Hash.alloc, undefined)));
  };
  var Builtin = {
    hash_fold_nativeint: hash_fold_nativeint,
    hash_fold_int64: hash_fold_int64,
    hash_fold_int32: hash_fold_int32,
    hash_fold_char: hash_fold_char,
    hash_fold_int: hash_fold_int,
    hash_fold_bool: hash_fold_bool,
    hash_fold_string: hash_fold_string,
    hash_fold_float: hash_fold_float,
    hash_fold_unit: hash_fold_unit,
    hash_fold_option: hash_fold_option,
    hash_fold_list: hash_fold_list,
    hash_fold_lazy_t: hash_fold_lazy_t,
    hash_fold_ref_frozen: hash_fold_ref_frozen,
    hash_fold_array_frozen: hash_fold_array_frozen,
    hash_nativeint: hash_nativeint,
    hash_int64: hash_int64,
    hash_int32: hash_int32,
    hash_char: hash_char,
    hash_int: hash_int,
    hash_bool: hash_bool,
    hash_string: hash_string,
    hash_float: hash_float,
    hash_unit: hash_unit
  };
  var run = function (seed, folder, x) {
    return Curry._1(Hash.get_hash_value, Curry._2(folder, Curry._2(Hash.reset, seed, Curry._1(Hash.alloc, undefined)), x));
  };
  return {
          description: Hash.description,
          fold_int: Hash.fold_int,
          fold_int64: Hash.fold_int64,
          fold_float: Hash.fold_float,
          fold_string: Hash.fold_string,
          alloc: alloc,
          reset: reset,
          get_hash_value: get_hash_value,
          For_tests: Hash.For_tests,
          create: create,
          of_fold: of_fold,
          Builtin: Builtin,
          run: run
        };
}

function alloc(param) {
  return 0;
}

function reset(seedOpt, _t) {
  if (seedOpt !== undefined) {
    return seedOpt;
  } else {
    return 0;
  }
}

var compare_state = Import0$negBase.compare;

var state_to_string = Int0$negBase.to_string;

var For_tests = {
  compare_state: compare_state,
  state_to_string: state_to_string
};

function create(seed, param) {
  if (seed !== undefined) {
    return seed;
  } else {
    return 0;
  }
}

function run(seed, folder, x) {
  return Base_internalhash_types$negBase.get_hash_value(Curry._2(folder, seed !== undefined ? seed : 0, x));
}

function of_fold(hash_fold_t, t) {
  return Base_internalhash_types$negBase.get_hash_value(Curry._2(hash_fold_t, 0, t));
}

function hash_fold_unit(s, param) {
  return s;
}

var hash_fold_int32 = Base_internalhash_types$negBase.fold_int;

function hash_fold_char(param, param$1) {
  return Base_internalhash_types$negBase.fold_int(param, Char0$negBase.to_int(param$1));
}

function hash_fold_bool(param, param$1) {
  return Base_internalhash_types$negBase.fold_int(param, param$1 ? 1 : 0);
}

function hash_fold_nativeint(s, x) {
  return Base_internalhash_types$negBase.fold_int64(s, Caml_int64.of_int32(x));
}

function hash_fold_option(hash_fold_elem, s, x) {
  if (x !== undefined) {
    return Curry._2(hash_fold_elem, Base_internalhash_types$negBase.fold_int(s, 1), Caml_option.valFromOption(x));
  } else {
    return Base_internalhash_types$negBase.fold_int(s, 0);
  }
}

function hash_fold_list(hash_fold_elem, s, list) {
  var s$1 = Base_internalhash_types$negBase.fold_int(s, List0$negBase.length(list));
  var _s = s$1;
  var _list = list;
  while(true) {
    var list$1 = _list;
    var s$2 = _s;
    if (!list$1) {
      return s$2;
    }
    _list = list$1.tl;
    _s = Curry._2(hash_fold_elem, s$2, list$1.hd);
    continue ;
  };
}

function hash_fold_lazy_t(hash_fold_elem, s, x) {
  return Curry._2(hash_fold_elem, s, CamlinternalLazy.force(x));
}

function hash_fold_ref_frozen(hash_fold_elem, s, x) {
  return Curry._2(hash_fold_elem, s, x[0]);
}

function hash_fold_array_frozen(hash_fold_elem, s, array) {
  var _s = Base_internalhash_types$negBase.fold_int(s, array.length);
  var _i = 0;
  while(true) {
    var i = _i;
    var s$1 = _s;
    if (Import0$negBase.$eq(i, array.length)) {
      return s$1;
    }
    var e = array[i];
    _i = Import0$negBase.$plus(i, 1);
    _s = Curry._2(hash_fold_elem, s$1, e);
    continue ;
  };
}

function hash_nativeint(x) {
  var s = 0;
  return Base_internalhash_types$negBase.get_hash_value(Base_internalhash_types$negBase.fold_int64(s, Caml_int64.of_int32(x)));
}

function hash_int64(x) {
  return Base_internalhash_types$negBase.get_hash_value(Base_internalhash_types$negBase.fold_int64(0, x));
}

function hash_int32(x) {
  var param = 0;
  return Base_internalhash_types$negBase.get_hash_value(Base_internalhash_types$negBase.fold_int(param, x));
}

function hash_string(x) {
  return Base_internalhash_types$negBase.get_hash_value(Base_internalhash_types$negBase.fold_string(0, x));
}

function hash_int(t) {
  var t$1 = Import0$negBase.$plus(Import0$negBase.lnot(t), Import0$negBase.lsl(t, 21));
  var t$2 = Import0$negBase.lxor(t$1, Import0$negBase.lsr(t$1, 24));
  var t$3 = Import0$negBase.$plus(Import0$negBase.$plus(t$2, Import0$negBase.lsl(t$2, 3)), Import0$negBase.lsl(t$2, 8));
  var t$4 = Import0$negBase.lxor(t$3, Import0$negBase.lsr(t$3, 14));
  var t$5 = Import0$negBase.$plus(Import0$negBase.$plus(t$4, Import0$negBase.lsl(t$4, 2)), Import0$negBase.lsl(t$4, 4));
  var t$6 = Import0$negBase.lxor(t$5, Import0$negBase.lsr(t$5, 28));
  return Import0$negBase.$plus(t$6, Import0$negBase.lsl(t$6, 31));
}

function hash_bool(x) {
  if (x) {
    return 1;
  } else {
    return 0;
  }
}

function hash_unit(param) {
  return 0;
}

var description = "internalhash";

var fold_int = Base_internalhash_types$negBase.fold_int;

var fold_int64 = Base_internalhash_types$negBase.fold_int64;

var fold_float = Base_internalhash_types$negBase.fold_float;

var fold_string = Base_internalhash_types$negBase.fold_string;

var get_hash_value = Base_internalhash_types$negBase.get_hash_value;

function Builtin_hash_float(prim) {
  return Caml_external_polyfill.resolve("Base_hash_double")(prim);
}

var Builtin = {
  hash_fold_nativeint: hash_fold_nativeint,
  hash_fold_int64: Base_internalhash_types$negBase.fold_int64,
  hash_fold_int32: hash_fold_int32,
  hash_fold_char: hash_fold_char,
  hash_fold_int: Base_internalhash_types$negBase.fold_int,
  hash_fold_bool: hash_fold_bool,
  hash_fold_string: Base_internalhash_types$negBase.fold_string,
  hash_fold_float: Base_internalhash_types$negBase.fold_float,
  hash_fold_unit: hash_fold_unit,
  hash_fold_option: hash_fold_option,
  hash_fold_list: hash_fold_list,
  hash_fold_lazy_t: hash_fold_lazy_t,
  hash_fold_ref_frozen: hash_fold_ref_frozen,
  hash_fold_array_frozen: hash_fold_array_frozen,
  hash_nativeint: hash_nativeint,
  hash_int64: hash_int64,
  hash_int32: hash_int32,
  hash_char: Char0$negBase.to_int,
  hash_int: hash_int,
  hash_bool: hash_bool,
  hash_string: hash_string,
  hash_float: Builtin_hash_float,
  hash_unit: hash_unit
};

exports.F = F;
exports.description = description;
exports.fold_int = fold_int;
exports.fold_int64 = fold_int64;
exports.fold_float = fold_float;
exports.fold_string = fold_string;
exports.alloc = alloc;
exports.reset = reset;
exports.get_hash_value = get_hash_value;
exports.For_tests = For_tests;
exports.create = create;
exports.of_fold = of_fold;
exports.Builtin = Builtin;
exports.run = run;
/* Char0-Base Not a pure module */
