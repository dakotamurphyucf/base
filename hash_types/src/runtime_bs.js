var Caml_hash_primitive = require("bs-platform/lib/js/caml_hash_primitive.js");

var Base_internalhash_fold_int64 = Caml_hash_primitive.caml_hash_mix_int;
//caml_hash_mix_int64;
//Provides: Base_internalhash_fold_int
//Requires: caml_hash_mix_int
var Base_internalhash_fold_int = Caml_hash_primitive.caml_hash_mix_int;
//Provides: Base_internalhash_fold_float
//Requires: caml_hash_mix_float
var Base_internalhash_fold_float = Caml_hash_primitive.caml_hash_mix_int;
//caml_hash_mix_float;
//Provides: Base_internalhash_fold_string
//Requires: caml_hash_mix_string
var Base_internalhash_fold_string = Caml_hash_primitive.caml_hash_mix_string;

function Base_internalhash_get_hash_value(seed) {
    var h = Caml_hash_primitive.caml_hash_final_mix(seed);
    return h & 0x3FFFFFFF;
}

exports.Base_internalhash_fold_int64 = Base_internalhash_fold_int64
exports.Base_internalhash_fold_int = Base_internalhash_fold_int
exports.Base_internalhash_fold_float = Base_internalhash_fold_float
exports.Base_internalhash_fold_string = Base_internalhash_fold_string
exports.Base_internalhash_get_hash_value = Base_internalhash_get_hash_value