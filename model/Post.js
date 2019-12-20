const mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
   
    title: {
       type: String,
       required: 'source can\'t be empty'
    },
    content: {
        type: String,
        required: 'content can\'t be empty'
    },
    CreatedAt: {
        type: Date,
       default:Date.now
    },
    lovesIts: {
        type:Number,
        default :0
    }

});

const Post =module.exports=mongoose.model('Post', PostSchema);