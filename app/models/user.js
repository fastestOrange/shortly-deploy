var db = require('../config');
var mongoose = require('mongoose');


//mongoose
//
var User = mongoose.model('User', userSchema);

// var User = db.Model.extend({
//   tableName: 'users',
//   hasTimestamps: true,

// });

module.exports = User;
