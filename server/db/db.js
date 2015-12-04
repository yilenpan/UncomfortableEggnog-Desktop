var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost/blacklist';
var helpers = require('../helpers/helpers.js');

mongoose.connect(dbUrl);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function (cb) {
  console.log('Connected to db!');
});

//===========Schemas===========
var UserSchema = new mongoose.Schema({
  username: { type: String,
                        required: true },
  password: { type: String,
                        required: true }
});

var PackageEntrySchema = new mongoose.Schema({
  likes: Number,
  dislikes: Number,
  downloads: Number,
  dateCreated: Date,
  // lastUpdated or new Date() upon POST?
  description: String,
  //stringified package object {name, content}
  packageContents: String
});

//===========Models===========
var User = db.model('User', UserSchema);
var PackageEntry = db.model('PackageEntry', PackageEntrySchema);


//===========Encryption=========

UserSchema.pre('save', helpers.hashPassword);


module.exports.db = db;
module.exports.User = User;
module.exports.PackageEntry = PackageEntry;
