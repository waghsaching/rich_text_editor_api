
var textModal = require('../modals/textSchema');

exports.create = function(req, res) {
    textModal.create(req.body, function(err, data) {
        if (err) {
            res.status(500).json({err:err,message:'failed'});
        } else {
            res.status(200).json({data:data,message:'success'});
        }
    })
}


exports.getOne = function(req, res) {
    textModal.findOne({ _id: req.params.id }, function(err, data) {
        if (err) {
            res.status(500).json({err:err,message:'failed'});
        } else {
            res.status(200).json({data:data,message:'success'});
        }
    })
}
