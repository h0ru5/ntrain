var express = require('express');
require('express-resource');
//require('express-mongoose-resource');
var app = express();
var mongoose = require('mongoose');
console.log('Got modules...');

//var db = mongoose.createConnection('localhost', 'ntrain');
var db = mongoose.createConnection('mongodb://ntrain:ntrain@alex.mongohq.com:10011/h0ru5');
console.log('Got db...');

var UserSchema = new mongoose.Schema(require('./schemas/user.js').schema);
var EventSchema  = new mongoose.Schema(require('./schemas/event.js').schema);
console.log('Loaded Schemas...');

var User = db.model("User",UserSchema);
var Event = db.model("Event",EventSchema);
console.log('Created Models...');

var ModelController = require('./controllers/modelctrl.js');

var userCtrl = ModelController.control(User);
var eventCtrl = ModelController.control(Event);
console.log('Created Controllers...');


var r_user = app.resource("users",userCtrl,{model: User});
var r_event = app.resource("events",eventCtrl,{model: Event});
console.log('Created Resources...');

app.listen(process.env.PORT);
console.log('Listening...');
console.log(app.routes);
