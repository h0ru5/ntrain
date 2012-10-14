exports.schema = {
	"team" : {"type" : String, "default" : "Rugbears"},
	"name" : String,
	"date" : Date,

	"active" : Number,
	"passive" : Number,
	"absent" : Number,
	
	"constraints" : {
		"minActive" : Number
	},

	"votes" : 
		[{ 
			"who" : String,
			"value" : String,
			"at" : {"type" : Date, "default" : Date.now}
		}],
	

	"comments" : 
		[{ 
			"who" : String,
			"value" : String,
			"at" : {"type" : Date, "default" : Date.now}
		}]


};
