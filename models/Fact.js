var mongoose = require('mongoose');
var FactSchema = new mongoose.Schema({
  fact: String,
  sourceLink: String,
  userName: String
});
mongoose.model('Fact', FactSchema);

module.exports = mongoose.model('Fact');

