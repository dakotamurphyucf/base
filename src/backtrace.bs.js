// Generated by Melange
'use strict';

var Exn$negBase = require("./exn.bs.js");
var Int$negBase = require("./int.bs.js");
var Printexc = require("bs-platform/lib/js/printexc.js");
var List$negBase = require("./list.bs.js");
var Sys0$negBase = require("./sys0.bs.js");
var Import$negBase = require("./import.bs.js");
var String$negBase = require("./string.bs.js");

var elide = {
  contents: Import$negBase.am_testing
};

function get(at_most_num_framesOpt, param) {
  
}

function to_string(t) {
  if (elide[0]) {
    return "<backtrace elided in test>";
  } else {
    return Printexc.raw_backtrace_to_string(t);
  }
}

function to_string_list(t) {
  return String$negBase.split_lines(to_string(t));
}

function sexp_of_t(t) {
  return {
          TAG: /* List */1,
          _0: List$negBase.map(String$negBase.split_lines(to_string(t)), (function (x) {
                  return {
                          TAG: /* Atom */0,
                          _0: x
                        };
                }))
        };
}

function most_recent(param) {
  return Printexc.get_raw_backtrace(undefined);
}

function with_recording(b, f) {
  var saved = Printexc.backtrace_status(undefined);
  Printexc.record_backtrace(b);
  return Exn$negBase.protect(f, (function (param) {
                return Printexc.record_backtrace(saved);
              }));
}

function initialize_module(param) {
  var x = Sys0$negBase.getenv("OCAMLRUNPARAM");
  var ocamlrunparam_mentions_backtraces = x !== undefined ? List$negBase.exists(String$negBase.split(x, /* ',' */44), (function (param) {
            return String$negBase.is_prefix(param, "b");
          })) : false;
  if (!ocamlrunparam_mentions_backtraces) {
    return Printexc.record_backtrace(true);
  }
  
}

var Exn = {
  am_recording: Printexc.backtrace_status,
  set_recording: Printexc.record_backtrace,
  with_recording: with_recording,
  most_recent: most_recent
};

exports.sexp_of_t = sexp_of_t;
exports.get = get;
exports.to_string = to_string;
exports.to_string_list = to_string_list;
exports.elide = elide;
exports.Exn = Exn;
exports.initialize_module = initialize_module;
/* Exn-Base Not a pure module */