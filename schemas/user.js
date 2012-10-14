exports.schema=
{
	"name" : String,
	"email" : String,
	"pw"	: String,

	"team" : {"type" : String, "default" : "Rugbears"},

	"votes" :
		[{"value" : String, "count" : Number}]
	
};
