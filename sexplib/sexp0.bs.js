// Generated by Melange
'use strict';

var Char = require("bs-platform/lib/js/char.js");
var Bytes = require("bs-platform/lib/js/bytes.js");
var Curry = require("bs-platform/lib/js/curry.js");
var $$Buffer = require("bs-platform/lib/js/buffer.js");
var Format = require("bs-platform/lib/js/format.js");
var Stdlib = require("bs-platform/lib/js/stdlib.js");
var Caml_bytes = require("bs-platform/lib/js/caml_bytes.js");
var ListLabels = require("bs-platform/lib/js/listLabels.js");
var BytesLabels = require("bs-platform/lib/js/bytesLabels.js");
var Caml_string = require("bs-platform/lib/js/caml_string.js");
var StringLabels = require("bs-platform/lib/js/stringLabels.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");

var bytes_blit_string = Bytes.blit_string;

function sexp_of_t(t) {
  return t;
}

function t_of_sexp(t) {
  return t;
}

function compare(a, b) {
  if (a === b) {
    return 0;
  } else if (a.TAG === /* Atom */0) {
    if (b.TAG === /* Atom */0) {
      return StringLabels.compare(a._0, b._0);
    } else {
      return -1;
    }
  } else if (b.TAG === /* Atom */0) {
    return 1;
  } else {
    var _a = a._0;
    var _b = b._0;
    while(true) {
      var b$1 = _b;
      var a$1 = _a;
      if (!a$1) {
        if (b$1) {
          return -1;
        } else {
          return 0;
        }
      }
      if (!b$1) {
        return 1;
      }
      var res = compare(a$1.hd, b$1.hd);
      if (res !== 0) {
        return res;
      }
      _b = b$1.tl;
      _a = a$1.tl;
      continue ;
    };
  }
}

function equal(a, b) {
  return compare(a, b) === 0;
}

var Not_found_s = /* @__PURE__ */Caml_exceptions.create("Sexp0-Base.Not_found_s");

var Of_sexp_error = /* @__PURE__ */Caml_exceptions.create("Sexp0-Base.Of_sexp_error");

var default_indent = {
  contents: 1
};

function must_escape(str) {
  var len = str.length;
  if (len === 0) {
    return true;
  }
  var _ix = len - 1 | 0;
  while(true) {
    var ix = _ix;
    var match = Caml_string.get(str, ix);
    if (match >= 92) {
      if (match > 126 || match < 93) {
        return true;
      }
      if (match === 124) {
        if (ix <= 0) {
          return false;
        }
        var next = ix - 1 | 0;
        if (Char.equal(Caml_string.get(str, next), /* '#' */35)) {
          return true;
        }
        _ix = next;
        continue ;
      }
      
    } else if (match >= 42) {
      if (match === 59) {
        return true;
      }
      
    } else {
      if (match < 33) {
        return true;
      }
      switch (match) {
        case 35 :
            if (ix <= 0) {
              return false;
            }
            var next$1 = ix - 1 | 0;
            if (Char.equal(Caml_string.get(str, next$1), /* '|' */124)) {
              return true;
            }
            _ix = next$1;
            continue ;
        case 33 :
        case 36 :
        case 37 :
        case 38 :
        case 39 :
            break;
        case 34 :
        case 40 :
        case 41 :
            return true;
        
      }
    }
    if (ix <= 0) {
      return false;
    }
    _ix = ix - 1 | 0;
    continue ;
  };
}

function escaped(s) {
  var n = 0;
  for(var i = 0 ,i_finish = s.length; i < i_finish; ++i){
    var match = s.charCodeAt(i);
    n = n + (
      match >= 32 ? (
          match > 92 || match < 34 ? (
              match >= 127 ? 4 : 1
            ) : (
              match > 91 || match < 35 ? 2 : 1
            )
        ) : (
          match >= 11 ? (
              match !== 13 ? 4 : 2
            ) : (
              match >= 8 ? 2 : 4
            )
        )
    ) | 0;
  }
  if (n === s.length) {
    return s;
  }
  var s$p = Caml_bytes.caml_create_bytes(n);
  n = 0;
  for(var i$1 = 0 ,i_finish$1 = s.length; i$1 < i_finish$1; ++i$1){
    var c = s.charCodeAt(i$1);
    var exit = 0;
    if (c >= 35) {
      if (c !== 92) {
        if (c >= 127) {
          exit = 1;
        } else {
          s$p[n] = c;
        }
      } else {
        exit = 2;
      }
    } else if (c >= 32) {
      if (c >= 34) {
        exit = 2;
      } else {
        s$p[n] = c;
      }
    } else if (c >= 14) {
      exit = 1;
    } else {
      switch (c) {
        case 8 :
            s$p[n] = /* '\\' */92;
            n = n + 1 | 0;
            s$p[n] = /* 'b' */98;
            break;
        case 9 :
            s$p[n] = /* '\\' */92;
            n = n + 1 | 0;
            s$p[n] = /* 't' */116;
            break;
        case 10 :
            s$p[n] = /* '\\' */92;
            n = n + 1 | 0;
            s$p[n] = /* 'n' */110;
            break;
        case 0 :
        case 1 :
        case 2 :
        case 3 :
        case 4 :
        case 5 :
        case 6 :
        case 7 :
        case 11 :
        case 12 :
            exit = 1;
            break;
        case 13 :
            s$p[n] = /* '\\' */92;
            n = n + 1 | 0;
            s$p[n] = /* 'r' */114;
            break;
        
      }
    }
    switch (exit) {
      case 1 :
          s$p[n] = /* '\\' */92;
          n = n + 1 | 0;
          s$p[n] = Char.chr(48 + (c / 100 | 0) | 0);
          n = n + 1 | 0;
          s$p[n] = Char.chr(48 + (c / 10 | 0) % 10 | 0);
          n = n + 1 | 0;
          s$p[n] = Char.chr(48 + c % 10 | 0);
          break;
      case 2 :
          s$p[n] = /* '\\' */92;
          n = n + 1 | 0;
          s$p[n] = c;
          break;
      
    }
    n = n + 1 | 0;
  }
  return BytesLabels.unsafe_to_string(s$p);
}

function esc_str(str) {
  var estr = escaped(str);
  var elen = estr.length;
  var res = Caml_bytes.caml_create_bytes(elen + 2 | 0);
  bytes_blit_string(estr, 0, res, 1, elen);
  res[0] = /* '"' */34;
  res[elen + 1 | 0] = /* '"' */34;
  return BytesLabels.unsafe_to_string(res);
}

function index_of_newline(str, start) {
  try {
    return StringLabels.index_from(str, start, /* '\n' */10);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.RE_EXN_ID === Stdlib.Not_found) {
      return ;
    }
    throw exn;
  }
}

function get_substring(str, index, end_pos_opt) {
  var end_pos = end_pos_opt !== undefined ? end_pos_opt : str.length;
  return StringLabels.sub(str, index, end_pos - index | 0);
}

function is_one_line(str) {
  var index = index_of_newline(str, 0);
  if (index !== undefined) {
    return (index + 1 | 0) === str.length;
  } else {
    return true;
  }
}

function mach_maybe_esc_str(str) {
  if (must_escape(str)) {
    return esc_str(str);
  } else {
    return str;
  }
}

function pp_hum_indent(indent, ppf, str) {
  if (str.TAG === /* Atom */0) {
    var str$1 = str._0;
    if (!must_escape(str$1)) {
      return Format.pp_print_string(ppf, str$1);
    }
    if (is_one_line(str$1)) {
      return Format.pp_print_string(ppf, esc_str(str$1));
    }
    var loop = function (_index) {
      while(true) {
        var index = _index;
        var next_newline = index_of_newline(str$1, index);
        var next_line = get_substring(str$1, index, next_newline);
        Format.pp_print_string(ppf, escaped(next_line));
        if (next_newline === undefined) {
          return ;
        }
        Format.pp_print_string(ppf, "\\");
        Format.pp_force_newline(ppf, undefined);
        Format.pp_print_string(ppf, "\\n");
        _index = next_newline + 1 | 0;
        continue ;
      };
    };
    Format.pp_open_box(ppf, 0);
    Format.pp_print_string(ppf, " \"");
    loop(0);
    Format.pp_print_string(ppf, "\"");
    return Format.pp_close_box(ppf, undefined);
  }
  var match = str._0;
  if (match) {
    Format.pp_open_box(ppf, indent);
    Format.pp_print_string(ppf, "(");
    pp_hum_indent(indent, ppf, match.hd);
    var _param = match.tl;
    while(true) {
      var param = _param;
      if (param) {
        Format.pp_print_space(ppf, undefined);
        pp_hum_indent(indent, ppf, param.hd);
        _param = param.tl;
        continue ;
      }
      Format.pp_print_string(ppf, ")");
      return Format.pp_close_box(ppf, undefined);
    };
  } else {
    return Format.pp_print_string(ppf, "()");
  }
}

function pp_mach_internal(may_need_space, ppf, str) {
  if (str.TAG === /* Atom */0) {
    var str$1 = str._0;
    var str$p = mach_maybe_esc_str(str$1);
    var new_may_need_space = str$p === str$1;
    if (may_need_space && new_may_need_space) {
      Format.pp_print_string(ppf, " ");
    }
    Format.pp_print_string(ppf, str$p);
    return new_may_need_space;
  }
  var match = str._0;
  if (match) {
    Format.pp_print_string(ppf, "(");
    var may_need_space$1 = pp_mach_internal(false, ppf, match.hd);
    pp_mach_rest(may_need_space$1, ppf, match.tl);
    return false;
  }
  Format.pp_print_string(ppf, "()");
  return false;
}

function pp_mach_rest(_may_need_space, ppf, _param) {
  while(true) {
    var param = _param;
    var may_need_space = _may_need_space;
    if (!param) {
      return Format.pp_print_string(ppf, ")");
    }
    var may_need_space$1 = pp_mach_internal(may_need_space, ppf, param.hd);
    _param = param.tl;
    _may_need_space = may_need_space$1;
    continue ;
  };
}

function pp_hum(ppf, sexp) {
  return pp_hum_indent(default_indent.contents, ppf, sexp);
}

function pp_mach(ppf, sexp) {
  pp_mach_internal(false, ppf, sexp);
  
}

function size_loop(acc, str) {
  if (str.TAG === /* Atom */0) {
    return [
            acc[0] + 1 | 0,
            acc[1] + str._0.length | 0
          ];
  } else {
    return ListLabels.fold_left(size_loop, acc, str._0);
  }
}

function size(sexp) {
  return size_loop([
              0,
              0
            ], sexp);
}

function to_buffer_hum(buf, indentOpt, sexp) {
  var indent = indentOpt !== undefined ? indentOpt : default_indent.contents;
  var ppf = Format.formatter_of_buffer(buf);
  return Curry._2(Format.fprintf(ppf)(/* Format */{
                  _0: {
                    TAG: /* Alpha */15,
                    _0: {
                      TAG: /* Formatting_lit */17,
                      _0: /* FFlush */2,
                      _1: /* End_of_format */0
                    }
                  },
                  _1: "%a@?"
                }), (function (param, param$1) {
                return pp_hum_indent(indent, param, param$1);
              }), sexp);
}

function to_buffer_mach(buf, sexp) {
  var loop = function (may_need_space, str) {
    if (str.TAG === /* Atom */0) {
      var str$1 = str._0;
      var str$p = mach_maybe_esc_str(str$1);
      var new_may_need_space = str$p === str$1;
      if (may_need_space && new_may_need_space) {
        $$Buffer.add_char(buf, /* ' ' */32);
      }
      $$Buffer.add_string(buf, str$p);
      return new_may_need_space;
    }
    var match = str._0;
    if (match) {
      $$Buffer.add_char(buf, /* '(' */40);
      var may_need_space$1 = loop(false, match.hd);
      loop_rest(may_need_space$1, match.tl);
      return false;
    }
    $$Buffer.add_string(buf, "()");
    return false;
  };
  var loop_rest = function (_may_need_space, _param) {
    while(true) {
      var param = _param;
      var may_need_space = _may_need_space;
      if (!param) {
        return $$Buffer.add_char(buf, /* ')' */41);
      }
      var may_need_space$1 = loop(may_need_space, param.hd);
      _param = param.tl;
      _may_need_space = may_need_space$1;
      continue ;
    };
  };
  loop(false, sexp);
  
}

function to_buffer_gen(buf, add_char, add_string, sexp) {
  var loop = function (may_need_space, str) {
    if (str.TAG === /* Atom */0) {
      var str$1 = str._0;
      var str$p = mach_maybe_esc_str(str$1);
      var new_may_need_space = str$p === str$1;
      if (may_need_space && new_may_need_space) {
        Curry._2(add_char, buf, /* ' ' */32);
      }
      Curry._2(add_string, buf, str$p);
      return new_may_need_space;
    }
    var match = str._0;
    if (match) {
      Curry._2(add_char, buf, /* '(' */40);
      var may_need_space$1 = loop(false, match.hd);
      loop_rest(may_need_space$1, match.tl);
      return false;
    }
    Curry._2(add_string, buf, "()");
    return false;
  };
  var loop_rest = function (_may_need_space, _param) {
    while(true) {
      var param = _param;
      var may_need_space = _may_need_space;
      if (!param) {
        return Curry._2(add_char, buf, /* ')' */41);
      }
      var may_need_space$1 = loop(may_need_space, param.hd);
      _param = param.tl;
      _may_need_space = may_need_space$1;
      continue ;
    };
  };
  loop(false, sexp);
  
}

function buffer(param) {
  return $$Buffer.create(1024);
}

function to_string_hum(indent, str) {
  if (str.TAG === /* Atom */0) {
    var str$1 = str._0;
    var match = index_of_newline(str$1, 0);
    if (match === undefined) {
      return mach_maybe_esc_str(str$1);
    }
    
  }
  var buf = $$Buffer.create(1024);
  to_buffer_hum(buf, indent, str);
  return $$Buffer.contents(buf);
}

function to_string_mach(str) {
  if (str.TAG === /* Atom */0) {
    return mach_maybe_esc_str(str._0);
  }
  var buf = $$Buffer.create(1024);
  to_buffer_mach(buf, str);
  return $$Buffer.contents(buf);
}

var of_float_style = {
  contents: "No_underscores"
};

var of_int_style = {
  contents: "No_underscores"
};

function message(name, fields) {
  var conv_fields = function (param) {
    if (!param) {
      return /* [] */0;
    }
    var rest = param.tl;
    var match = param.hd;
    var fsexp = match[1];
    var fname = match[0];
    if (fname === "") {
      return {
              hd: fsexp,
              tl: conv_fields(rest)
            };
    } else {
      return {
              hd: {
                TAG: /* List */1,
                _0: {
                  hd: {
                    TAG: /* Atom */0,
                    _0: fname
                  },
                  tl: {
                    hd: fsexp,
                    tl: /* [] */0
                  }
                }
              },
              tl: conv_fields(rest)
            };
    }
  };
  return {
          TAG: /* List */1,
          _0: {
            hd: {
              TAG: /* Atom */0,
              _0: name
            },
            tl: conv_fields(fields)
          }
        };
}

var t_sexp_grammar = {
  TAG: /* Any */0,
  _0: "Sexp.t"
};

var pp = pp_mach;

var to_string = to_string_mach;

var Private = {
  size: size,
  buffer: buffer,
  to_buffer: to_buffer_mach,
  to_buffer_hum: to_buffer_hum,
  to_buffer_mach: to_buffer_mach,
  to_buffer_gen: to_buffer_gen,
  mach_maybe_esc_str: mach_maybe_esc_str,
  must_escape: must_escape,
  esc_str: esc_str
};

exports.t_of_sexp = t_of_sexp;
exports.sexp_of_t = sexp_of_t;
exports.t_sexp_grammar = t_sexp_grammar;
exports.equal = equal;
exports.compare = compare;
exports.Not_found_s = Not_found_s;
exports.Of_sexp_error = Of_sexp_error;
exports.message = message;
exports.default_indent = default_indent;
exports.pp_hum = pp_hum;
exports.pp_hum_indent = pp_hum_indent;
exports.pp_mach = pp_mach;
exports.pp = pp;
exports.to_string_hum = to_string_hum;
exports.to_string_mach = to_string_mach;
exports.to_string = to_string;
exports.of_float_style = of_float_style;
exports.of_int_style = of_int_style;
exports.Private = Private;
/* Format Not a pure module */