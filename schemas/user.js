function make(Schema) {
return new Schema(
{
	"name" : String,
	"email" : String,
	"pw"	: String,

	"team" : {"type" : String, "default" : "Rugbears"},

	"votes" :
		[{"value" : String, "count" : Number}]
	
});
}

exports.make=make;
