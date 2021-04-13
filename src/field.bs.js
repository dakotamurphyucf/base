// Generated by Melange
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

function opaque_identity(prim) {
  return prim;
}

var For_generated_code = {
  opaque_identity: opaque_identity
};

function name(field) {
  return field.name;
}

function get(field, r) {
  return Curry._1(field.getter, r);
}

function fset(field, r, v) {
  return Curry._2(field.fset, r, v);
}

function setter(field) {
  return field.setter;
}

function map(field, r, f) {
  return Curry._2(field.fset, r, Curry._1(f, Curry._1(field.getter, r)));
}

function updater(field) {
  var setter = field.setter;
  if (setter !== undefined) {
    return (function (r, f) {
              return Curry._2(setter, r, Curry._1(f, Curry._1(field.getter, r)));
            });
  }
  
}

exports.For_generated_code = For_generated_code;
exports.name = name;
exports.get = get;
exports.fset = fset;
exports.setter = setter;
exports.map = map;
exports.updater = updater;
/* No side effect */
