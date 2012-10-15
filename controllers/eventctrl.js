
exports.index = function (req,res) {
    res.send(Event.find({}));
}