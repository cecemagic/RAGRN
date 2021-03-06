const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        //mongoose populate, using relational data from logged in user to continue to be the author.
        //machine reads it as an unique ID. but display easy to read username and password.
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    //optional argument for Schema.
    timestamps: true
});

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    elevation: {
        type: Number,
        required: true
    },
    cost: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default: false
    },
    //this is a sub-document
    comments: [commentSchema]
}, {
    timestamps: true
});
//exporting this Schema as a model to apply for data.
const Campsite = mongoose.model('Campsite', campsiteSchema)

module.exports = Campsite;