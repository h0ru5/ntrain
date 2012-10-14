var express = require('express'),
resource = require('express-resource'),
resource = require('express-mongoose-resource');
app = express();

var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'ntrain');
console.log('Got modules...');


var UserSchema = require('./schemas/user.js').make(mongoose.Schema);
var EventSchema  = new mongoose.Schema(require('./schemas/event.js').schema);
console.log('Loaded Schemas...');

var User = db.model("User",UserSchema);
var Event = db.model("Event",EventSchema);
console.log('Created Models...');

var r_user = app.resource({model: User});
var r_event = app.resource({model: Event});
console.log('Created Resources...');

app.listen(8000);
console.log('Listening...');
