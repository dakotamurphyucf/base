// Generated by Melange
'use strict';

var Nativeint = require("bs-platform/lib/js/nativeint.js");
var Caml_int64 = require("bs-platform/lib/js/caml_int64.js");
var Caml_external_polyfill = require("bs-platform/lib/js/caml_external_polyfill.js");

var m2 = [
  858993459,
  858993459
];

function int64_popcount(x) {
  var x$1 = Caml_int64.sub(x, Caml_int64.and_(Caml_int64.lsr_(x, 1), [
            1431655765,
            1431655765
          ]));
  var x$2 = Caml_int64.add(Caml_int64.and_(x$1, m2), Caml_int64.and_(Caml_int64.lsr_(x$1, 2), m2));
  var x$3 = Caml_int64.and_(Caml_int64.add(x$2, Caml_int64.lsr_(x$2, 4)), [
        252645135,
        252645135
      ]);
  return Caml_int64.to_int32(Caml_int64.lsr_(Caml_int64.mul(x$3, [
                      16843009,
                      16843009
                    ]), 56));
}

function int32_popcount(x) {
  return int64_popcount(Caml_int64.and_(Caml_int64.of_int32(x), [
                  0,
                  4294967295
                ]));
}

var nativeint_popcount;

if (Nativeint.size !== 32) {
  if (Nativeint.size !== 64) {
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "popcount.ml",
            45,
            9
          ],
          Error: new Error()
        };
  }
  nativeint_popcount = (function (x) {
      return int64_popcount(Caml_int64.of_int32(x));
    });
} else {
  nativeint_popcount = int32_popcount;
}

function int_popcount(prim) {
  return Caml_external_polyfill.resolve("Base_int_math_int_popcount")(prim);
}

exports.int_popcount = int_popcount;
exports.int32_popcount = int32_popcount;
exports.int64_popcount = int64_popcount;
exports.nativeint_popcount = nativeint_popcount;
/* nativeint_popcount Not a pure module */