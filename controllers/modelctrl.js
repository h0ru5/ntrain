exports.control = function(Schema) {
    return {
        index : function (req,res) {
            Schema.find({},{},
                function(err,things) {
                   res.send(things);
                }
            );
        }
        
        //...
    };
}