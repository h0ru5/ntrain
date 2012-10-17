var express = require('express');
require('express-resource');
var emr =require('express-mongoose-resource');
var app = express();
app.use(express.bodyParser());
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

//var ModelCtrl = require('./controllers/modelctrl.js');
//var eventCtrl = ModelCtrl.control(Event);
//var userCtrl = ModelCtlr.control(User);
var userCtrl = new emr.ModelController(app,null,User,{trace:false});
userCtrl._register_schema_action();

var eventCtrl = new emr.ModelController(app,null,Event,{trace:false});
eventCtrl._register_schema_action();

console.log('Created Controllers...');


var r_user = app.resource(userCtrl.name,userCtrl.getExpressResourceActions(),{model: User});
var r_user = app.resource(eventCtrl.name,eventCtrl.getExpressResourceActions(),{model: Event});
//var r_event = app.resource("events",eventCtrl,{model: Event});
console.log('Created Resources...');

app.listen(process.env.PORT);
console.log('Listening...');
console.log(app.routes);
