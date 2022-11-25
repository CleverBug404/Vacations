const mongoose = require('mongoose');

const openingTimeSchema = new mongoose.Schema({
    days: {type:String, require:true},
    opeing:String,
    closing:String,
    closed: {type:Boolean, required:true}
});
const reviewSchema = new mongoose.Schema({
    author: String,
    rating: {type: Number, required: true, min: 0, max:0},
    reviewText: String,
    createdOn: {type: Date, 'default': Date.now}
});

const locationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: String,
    rating: {type: Number, 'default': 0, min:0, max:5},
    facilities: [String],
    coords: {type:String, coordinates:[Number]},
    openingTime: [openingTimeSchema],
    reviews: [reviewSchema]
});
mongoose.model('Location', locationSchema);
locationSchema.index({coords: '2dsphere'});