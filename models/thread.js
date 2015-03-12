// The Thread model

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var threadSchema = new Schema({
    title:  String,
    author: {type: String, default: 'Anon'}
});

module.exports = mongoose.model('Thread', threadSchema);
