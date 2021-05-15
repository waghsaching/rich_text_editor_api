var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var textSchema = new mongoose.Schema({
}, { strict: false })

textSchema.plugin(timestamps);

module.exports = mongoose.model('text', textSchema)