// Generated by Melange
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Format = require("bs-platform/lib/js/format.js");
var Printf = require("bs-platform/lib/js/printf.js");
var Printexc = require("bs-platform/lib/js/printexc.js");
var Sexp$negBase = require("./sexp.bs.js");
var Import$negBase = require("./import.bs.js");
var Printf$negBase = require("./printf.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");
var Sexp_conv$negSexplib0 = require("sexplib0/./sexp_conv.bs.js");
var Pretty_printer$negBase = require("./pretty_printer.bs.js");
var Caml_external_polyfill = require("bs-platform/lib/js/caml_external_polyfill.js");

var exit = Import$negBase.Caml.exit;

var Finally = /* @__PURE__ */Caml_exceptions.create("Exn-Base.Finally");

Sexp_conv$negSexplib0.Exn_converter.add(undefined, undefined, Finally, (function (param) {
        if (param.RE_EXN_ID === Finally) {
          var v0 = Import$negBase.sexp_of_exn(param._1);
          var v1 = Import$negBase.sexp_of_exn(param._2);
          return {
                  TAG: /* List */1,
                  _0: {
                    hd: {
                      TAG: /* Atom */0,
                      _0: "exn.ml.Finally"
                    },
                    tl: {
                      hd: v0,
                      tl: {
                        hd: v1,
                        tl: /* [] */0
                      }
                    }
                  }
                };
        }
        throw {
              RE_EXN_ID: "Assert_failure",
              _1: [
                "exn.ml",
                20,
                11
              ],
              Error: new Error()
            };
      }));

var Reraised = /* @__PURE__ */Caml_exceptions.create("Exn-Base.Reraised");

Sexp_conv$negSexplib0.Exn_converter.add(undefined, undefined, Reraised, (function (param) {
        if (param.RE_EXN_ID === Reraised) {
          var v0 = Import$negBase.sexp_of_string(param._1);
          var v1 = Import$negBase.sexp_of_exn(param._2);
          return {
                  TAG: /* List */1,
                  _0: {
                    hd: {
                      TAG: /* Atom */0,
                      _0: "exn.ml.Reraised"
                    },
                    tl: {
                      hd: v0,
                      tl: {
                        hd: v1,
                        tl: /* [] */0
                      }
                    }
                  }
                };
        }
        throw {
              RE_EXN_ID: "Assert_failure",
              _1: [
                "exn.ml",
                34,
                11
              ],
              Error: new Error()
            };
      }));

var Sexp = /* @__PURE__ */Caml_exceptions.create("Exn-Base.Sexp");

Sexp_conv$negSexplib0.Exn_converter.add(undefined, undefined, Sexp, (function (t) {
        if (t.RE_EXN_ID === Sexp) {
          return t._1;
        }
        throw {
              RE_EXN_ID: "Assert_failure",
              _1: [
                "exn.ml",
                55,
                6
              ],
              Error: new Error()
            };
      }));

function create_s(sexp) {
  return {
          RE_EXN_ID: Sexp,
          _1: sexp
        };
}

function reraise(exc, str) {
  throw {
        RE_EXN_ID: Reraised,
        _1: str,
        _2: exc,
        Error: new Error()
      };
}

function reraisef(exc, format) {
  return Printf$negBase.ksprintf((function (str, param) {
                throw {
                      RE_EXN_ID: Reraised,
                      _1: str,
                      _2: exc,
                      Error: new Error()
                    };
              }), format);
}

function to_string(exc) {
  return Sexp$negBase.to_string_hum(2, Import$negBase.sexp_of_exn(exc));
}

function to_string_mach(exc) {
  return Sexp$negBase.to_string_mach(Import$negBase.sexp_of_exn(exc));
}

function protectx(f, x, $$finally) {
  var res;
  try {
    res = Curry._1(f, x);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    var tmp;
    try {
      Curry._1($$finally, x);
      tmp = exn;
    }
    catch (raw_final_exn){
      var final_exn = Caml_js_exceptions.internalToOCamlException(raw_final_exn);
      tmp = {
        RE_EXN_ID: Finally,
        _1: exn,
        _2: final_exn
      };
    }
    throw tmp;
  }
  Curry._1($$finally, x);
  return res;
}

function protect(f, $$finally) {
  return protectx(f, undefined, $$finally);
}

function does_raise(f) {
  try {
    Curry._1(f, undefined);
    return false;
  }
  catch (exn){
    return true;
  }
}

function pp(ppf, t) {
  var sexp = Import$negBase.sexp_of_exn_opt(t);
  if (sexp !== undefined) {
    return Sexp$negBase.pp_hum(ppf, sexp);
  } else {
    return Format.pp_print_string(ppf, Printexc.to_string(t));
  }
}

var include = Pretty_printer$negBase.Register_pp({
      pp: pp,
      module_name: "Base.Exn"
    });

var pp$1 = include.pp;

function print_with_backtrace(exc, raw_backtrace) {
  Curry._2(Format.eprintf(/* Format */{
            _0: {
              TAG: /* Formatting_gen */18,
              _0: {
                TAG: /* Open_box */1,
                _0: /* Format */{
                  _0: {
                    TAG: /* String_literal */11,
                    _0: "<2>",
                    _1: /* End_of_format */0
                  },
                  _1: "<2>"
                }
              },
              _1: {
                TAG: /* String_literal */11,
                _0: "Uncaught exception:",
                _1: {
                  TAG: /* Formatting_lit */17,
                  _0: /* Force_newline */3,
                  _1: {
                    TAG: /* Formatting_lit */17,
                    _0: /* Force_newline */3,
                    _1: {
                      TAG: /* Formatting_gen */18,
                      _0: {
                        TAG: /* Open_box */1,
                        _0: /* Format */{
                          _0: /* End_of_format */0,
                          _1: ""
                        }
                      },
                      _1: {
                        TAG: /* Alpha */15,
                        _0: {
                          TAG: /* Formatting_lit */17,
                          _0: /* Close_box */0,
                          _1: {
                            TAG: /* Formatting_lit */17,
                            _0: /* Close_box */0,
                            _1: {
                              TAG: /* Formatting_lit */17,
                              _0: /* Force_newline */3,
                              _1: {
                                TAG: /* Formatting_lit */17,
                                _0: /* Flush_newline */4,
                                _1: /* End_of_format */0
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            _1: "@[<2>Uncaught exception:@\n@\n@[%a@]@]@\n@."
          }), pp$1, exc);
  if (Printexc.backtrace_status(undefined)) {
    Printexc.print_raw_backtrace(Import$negBase.Caml.stderr, raw_backtrace);
  }
  return Curry._1(Import$negBase.Caml.flush, Import$negBase.Caml.stderr);
}

function handle_uncaught_aux(do_at_exit, exit, f) {
  try {
    return Curry._1(f, undefined);
  }
  catch (raw_exc){
    var exc = Caml_js_exceptions.internalToOCamlException(raw_exc);
    var raw_backtrace = Printexc.get_raw_backtrace(undefined);
    if (do_at_exit) {
      try {
        Curry._1(Import$negBase.Caml.do_at_exit, undefined);
      }
      catch (exn){
        
      }
    }
    try {
      print_with_backtrace(exc, raw_backtrace);
    }
    catch (exn$1){
      try {
        Printf.eprintf(/* Format */{
              _0: {
                TAG: /* String_literal */11,
                _0: "Exn.handle_uncaught could not print; exiting anyway\n",
                _1: {
                  TAG: /* Flush */10,
                  _0: /* End_of_format */0
                }
              },
              _1: "Exn.handle_uncaught could not print; exiting anyway\n%!"
            });
      }
      catch (exn$2){
        
      }
    }
    return Curry._1(exit, 1);
  }
}

function handle_uncaught_and_exit(f) {
  return handle_uncaught_aux(true, exit, f);
}

function handle_uncaught(must_exit, f) {
  return handle_uncaught_aux(must_exit, must_exit ? exit : (function (prim) {
                  
                }), f);
}

function reraise_uncaught(str, func) {
  try {
    return Curry._1(func, undefined);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    throw {
          RE_EXN_ID: Reraised,
          _1: str,
          _2: exn,
          Error: new Error()
        };
  }
}

function raise_without_backtrace(e) {
  Caml_external_polyfill.resolve("Base_clear_caml_backtrace_pos")(undefined);
  throw e;
}

function initialize_module(param) {
  return Printexc.set_uncaught_exception_handler(print_with_backtrace);
}

function clear_backtrace(prim) {
  return Caml_external_polyfill.resolve("Base_clear_caml_backtrace_pos")(prim);
}

var Private = {
  clear_backtrace: clear_backtrace
};

var sexp_of_t = Import$negBase.sexp_of_exn;

exports.sexp_of_t = sexp_of_t;
exports.pp = pp$1;
exports.Finally = Finally;
exports.Reraised = Reraised;
exports.create_s = create_s;
exports.raise_without_backtrace = raise_without_backtrace;
exports.reraise = reraise;
exports.reraisef = reraisef;
exports.to_string = to_string;
exports.to_string_mach = to_string_mach;
exports.protectx = protectx;
exports.protect = protect;
exports.handle_uncaught = handle_uncaught;
exports.handle_uncaught_and_exit = handle_uncaught_and_exit;
exports.reraise_uncaught = reraise_uncaught;
exports.does_raise = does_raise;
exports.initialize_module = initialize_module;
exports.Private = Private;
/*  Not a pure module */