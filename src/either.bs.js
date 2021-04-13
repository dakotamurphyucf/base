// Generated by Melange
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var List0$negBase = require("./list0.bs.js");
var Monad$negBase = require("./monad.bs.js");
var Option$negBase = require("./option.bs.js");
var Either0$negBase = require("./either0.bs.js");
var Applicative$negBase = require("./applicative.bs.js");
var With_return$negBase = require("./with_return.bs.js");

function swap(x) {
  if (x.TAG === /* First */0) {
    return {
            TAG: /* Second */1,
            _0: x._0
          };
  } else {
    return {
            TAG: /* First */0,
            _0: x._0
          };
  }
}

function is_first(param) {
  if (param.TAG === /* First */0) {
    return true;
  } else {
    return false;
  }
}

function is_second(param) {
  if (param.TAG === /* First */0) {
    return false;
  } else {
    return true;
  }
}

function value(param) {
  return param._0;
}

function value_map(t, first, second) {
  if (t.TAG === /* First */0) {
    return Curry._1(first, t._0);
  } else {
    return Curry._1(second, t._0);
  }
}

function map(t, first, second) {
  if (t.TAG === /* First */0) {
    return {
            TAG: /* First */0,
            _0: Curry._1(first, t._0)
          };
  } else {
    return {
            TAG: /* Second */1,
            _0: Curry._1(second, t._0)
          };
  }
}

function first(x) {
  return {
          TAG: /* First */0,
          _0: x
        };
}

function second(x) {
  return {
          TAG: /* Second */1,
          _0: x
        };
}

function equal(eq1, eq2, t1, t2) {
  if (t1.TAG === /* First */0) {
    if (t2.TAG === /* First */0) {
      return Curry._2(eq1, t1._0, t2._0);
    } else {
      return false;
    }
  } else if (t2.TAG === /* First */0) {
    return false;
  } else {
    return Curry._2(eq2, t1._0, t2._0);
  }
}

function invariant(f, s, x) {
  if (x.TAG === /* First */0) {
    return Curry._1(f, x._0);
  } else {
    return Curry._1(s, x._0);
  }
}

function either(t, $$return, other) {
  if (t.TAG === /* First */0) {
    return Curry._1($$return, t._0);
  } else {
    return Curry._1(other, t._0);
  }
}

function combine(t1, t2, f, other) {
  if (t1.TAG === /* First */0) {
    if (t2.TAG === /* First */0) {
      return {
              TAG: /* First */0,
              _0: Curry._2(f, t1._0, t2._0)
            };
    } else {
      return {
              TAG: /* Second */1,
              _0: t2._0
            };
    }
  }
  var x = t1._0;
  if (t2.TAG === /* First */0) {
    return {
            TAG: /* Second */1,
            _0: x
          };
  } else {
    return {
            TAG: /* Second */1,
            _0: Curry._2(other, x, t2._0)
          };
  }
}

function bind(t, f) {
  if (t.TAG === /* First */0) {
    return Curry._1(f, t._0);
  } else {
    return t;
  }
}

function map$1(t, f) {
  return bind(t, (function (x) {
                return {
                        TAG: /* First */0,
                        _0: Curry._1(f, x)
                      };
              }));
}

var map$2 = {
  NAME: "Custom",
  VAL: map$1
};

var include = Monad$negBase.Make2({
      bind: bind,
      map: map$2,
      $$return: first
    });

var bind$1 = include.bind;

var $$return = include.$$return;

function apply(t1, t2) {
  return Curry._2(bind$1, t1, (function (f) {
                return Curry._2(bind$1, t2, (function (x) {
                              return Curry._1($$return, Curry._1(f, x));
                            }));
              }));
}

var map_1 = include.map;

var map$3 = {
  NAME: "Custom",
  VAL: map_1
};

var App = Applicative$negBase.Make2({
      $$return: $$return,
      apply: apply,
      map: map$3
    });

var $$return$1 = App.$$return;

function other_loop(f, acc, param) {
  if (!param) {
    return {
            TAG: /* Second */1,
            _0: acc
          };
  }
  var ts = param.tl;
  return either(param.hd, (function (param) {
                return other_loop(f, acc, ts);
              }), (function (o) {
                return other_loop(f, Curry._2(f, acc, o), ts);
              }));
}

function return_loop(f, acc, param) {
  if (!param) {
    return Curry._1($$return$1, List0$negBase.rev(acc));
  }
  var ts = param.tl;
  return either(param.hd, (function (x) {
                return return_loop(f, {
                            hd: x,
                            tl: acc
                          }, ts);
              }), (function (o) {
                return other_loop(f, o, ts);
              }));
}

function combine_all(ts, f) {
  return return_loop(f, /* [] */0, ts);
}

function other_loop$1(f, acc, param) {
  if (!param) {
    return {
            TAG: /* Second */1,
            _0: acc
          };
  }
  var ts = param.tl;
  return either(param.hd, (function (param) {
                return other_loop$1(f, acc, ts);
              }), (function (o) {
                return other_loop$1(f, Curry._2(f, acc, o), ts);
              }));
}

function return_loop$1(f, param) {
  if (!param) {
    return Curry._1($$return$1, undefined);
  }
  var ts = param.tl;
  return either(param.hd, (function (param) {
                return return_loop$1(f, ts);
              }), (function (o) {
                return other_loop$1(f, o, ts);
              }));
}

function combine_all_unit(ts, f) {
  return return_loop$1(f, ts);
}

function to_option(t) {
  return either(t, Option$negBase.some, (function (param) {
                
              }));
}

function value$1(t, $$default) {
  return either(t, (function (prim) {
                return prim;
              }), (function (param) {
                return $$default;
              }));
}

function with_return(f) {
  return With_return$negBase.with_return(function (ret) {
              return {
                      TAG: /* Second */1,
                      _0: Curry._1(f, With_return$negBase.prepend(ret, $$return$1))
                    };
            });
}

function either$1(t, $$return, other) {
  if (t.TAG === /* First */0) {
    return Curry._1(other, t._0);
  } else {
    return Curry._1($$return, t._0);
  }
}

function combine$1(t1, t2, f, other) {
  if (t1.TAG !== /* First */0) {
    if (t2.TAG === /* First */0) {
      return {
              TAG: /* First */0,
              _0: t2._0
            };
    } else {
      return {
              TAG: /* Second */1,
              _0: Curry._2(f, t1._0, t2._0)
            };
    }
  }
  var x = t1._0;
  if (t2.TAG === /* First */0) {
    return {
            TAG: /* First */0,
            _0: Curry._2(other, x, t2._0)
          };
  } else {
    return {
            TAG: /* First */0,
            _0: x
          };
  }
}

function bind$2(t, f) {
  if (t.TAG === /* First */0) {
    return t;
  } else {
    return Curry._1(f, t._0);
  }
}

function map$4(t, f) {
  return bind$2(t, (function (x) {
                return {
                        TAG: /* Second */1,
                        _0: Curry._1(f, x)
                      };
              }));
}

var map$5 = {
  NAME: "Custom",
  VAL: map$4
};

var include$1 = Monad$negBase.Make2({
      bind: bind$2,
      map: map$5,
      $$return: second
    });

var bind$3 = include$1.bind;

var $$return$2 = include$1.$$return;

function apply$1(t1, t2) {
  return Curry._2(bind$3, t1, (function (f) {
                return Curry._2(bind$3, t2, (function (x) {
                              return Curry._1($$return$2, Curry._1(f, x));
                            }));
              }));
}

var map_1$1 = include$1.map;

var map$6 = {
  NAME: "Custom",
  VAL: map_1$1
};

var App$1 = Applicative$negBase.Make2({
      $$return: $$return$2,
      apply: apply$1,
      map: map$6
    });

var $$return$3 = App$1.$$return;

function other_loop$2(f, acc, param) {
  if (!param) {
    return {
            TAG: /* First */0,
            _0: acc
          };
  }
  var ts = param.tl;
  return either$1(param.hd, (function (param) {
                return other_loop$2(f, acc, ts);
              }), (function (o) {
                return other_loop$2(f, Curry._2(f, acc, o), ts);
              }));
}

function return_loop$2(f, acc, param) {
  if (!param) {
    return Curry._1($$return$3, List0$negBase.rev(acc));
  }
  var ts = param.tl;
  return either$1(param.hd, (function (x) {
                return return_loop$2(f, {
                            hd: x,
                            tl: acc
                          }, ts);
              }), (function (o) {
                return other_loop$2(f, o, ts);
              }));
}

function combine_all$1(ts, f) {
  return return_loop$2(f, /* [] */0, ts);
}

function other_loop$3(f, acc, param) {
  if (!param) {
    return {
            TAG: /* First */0,
            _0: acc
          };
  }
  var ts = param.tl;
  return either$1(param.hd, (function (param) {
                return other_loop$3(f, acc, ts);
              }), (function (o) {
                return other_loop$3(f, Curry._2(f, acc, o), ts);
              }));
}

function return_loop$3(f, param) {
  if (!param) {
    return Curry._1($$return$3, undefined);
  }
  var ts = param.tl;
  return either$1(param.hd, (function (param) {
                return return_loop$3(f, ts);
              }), (function (o) {
                return other_loop$3(f, o, ts);
              }));
}

function combine_all_unit$1(ts, f) {
  return return_loop$3(f, ts);
}

function to_option$1(t) {
  return either$1(t, Option$negBase.some, (function (param) {
                
              }));
}

function value$2(t, $$default) {
  return either$1(t, (function (prim) {
                return prim;
              }), (function (param) {
                return $$default;
              }));
}

function with_return$1(f) {
  return With_return$negBase.with_return(function (ret) {
              return {
                      TAG: /* First */0,
                      _0: Curry._1(f, With_return$negBase.prepend(ret, $$return$3))
                    };
            });
}

var Export = {};

var compare = Either0$negBase.compare;

var hash_fold_t = Either0$negBase.hash_fold_t;

var t_of_sexp = Either0$negBase.t_of_sexp;

var sexp_of_t = Either0$negBase.sexp_of_t;

var t_sexp_grammar = Either0$negBase.t_sexp_grammar;

var iter = value_map;

var First_$great$great$eq = include.$great$great$eq;

var First_Let_syntax = include.Let_syntax;

var First_Monad_infix = include.Monad_infix;

var First_join = include.join;

var First_ignore_m = include.ignore_m;

var First_map = App.map;

var First_both = App.both;

var First_$less$star$great = App.$less$star$great;

var First_$less$star = App.$less$star;

var First_$star$great = App.$star$great;

var First_$great$great$pipe = App.$great$great$pipe;

var First_apply = App.apply;

var First_map2 = App.map2;

var First_map3 = App.map3;

var First_all = App.all;

var First_all_unit = App.all_unit;

var First_Applicative_infix = App.Applicative_infix;

var First = {
  $great$great$eq: First_$great$great$eq,
  Let_syntax: First_Let_syntax,
  Monad_infix: First_Monad_infix,
  bind: bind$1,
  join: First_join,
  ignore_m: First_ignore_m,
  $$return: $$return$1,
  map: First_map,
  both: First_both,
  $less$star$great: First_$less$star$great,
  $less$star: First_$less$star,
  $star$great: First_$star$great,
  $great$great$pipe: First_$great$great$pipe,
  apply: First_apply,
  map2: First_map2,
  map3: First_map3,
  all: First_all,
  all_unit: First_all_unit,
  Applicative_infix: First_Applicative_infix,
  value: value$1,
  to_option: to_option,
  with_return: with_return,
  combine: combine,
  combine_all: combine_all,
  combine_all_unit: combine_all_unit
};

var Second_$great$great$eq = include$1.$great$great$eq;

var Second_Let_syntax = include$1.Let_syntax;

var Second_Monad_infix = include$1.Monad_infix;

var Second_join = include$1.join;

var Second_ignore_m = include$1.ignore_m;

var Second_map = App$1.map;

var Second_both = App$1.both;

var Second_$less$star$great = App$1.$less$star$great;

var Second_$less$star = App$1.$less$star;

var Second_$star$great = App$1.$star$great;

var Second_$great$great$pipe = App$1.$great$great$pipe;

var Second_apply = App$1.apply;

var Second_map2 = App$1.map2;

var Second_map3 = App$1.map3;

var Second_all = App$1.all;

var Second_all_unit = App$1.all_unit;

var Second_Applicative_infix = App$1.Applicative_infix;

var Second = {
  $great$great$eq: Second_$great$great$eq,
  Let_syntax: Second_Let_syntax,
  Monad_infix: Second_Monad_infix,
  bind: bind$3,
  join: Second_join,
  ignore_m: Second_ignore_m,
  $$return: $$return$3,
  map: Second_map,
  both: Second_both,
  $less$star$great: Second_$less$star$great,
  $less$star: Second_$less$star,
  $star$great: Second_$star$great,
  $great$great$pipe: Second_$great$great$pipe,
  apply: Second_apply,
  map2: Second_map2,
  map3: Second_map3,
  all: Second_all,
  all_unit: Second_all_unit,
  Applicative_infix: Second_Applicative_infix,
  value: value$2,
  to_option: to_option$1,
  with_return: with_return$1,
  combine: combine$1,
  combine_all: combine_all$1,
  combine_all_unit: combine_all_unit$1
};

exports.compare = compare;
exports.hash_fold_t = hash_fold_t;
exports.t_of_sexp = t_of_sexp;
exports.sexp_of_t = sexp_of_t;
exports.t_sexp_grammar = t_sexp_grammar;
exports.invariant = invariant;
exports.swap = swap;
exports.value = value;
exports.iter = iter;
exports.value_map = value_map;
exports.map = map;
exports.equal = equal;
exports.First = First;
exports.Second = Second;
exports.is_first = is_first;
exports.is_second = is_second;
exports.first = first;
exports.second = second;
exports.Export = Export;
/* include Not a pure module */
