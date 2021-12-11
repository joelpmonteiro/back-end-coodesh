const mongoose = require('../config/mongoDb.js')
const mongoosePaginate = require('mongoose-paginate-v2')



const spaceModels = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    featured: {
        type: Boolean,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    newsSite: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        // required: true
    },
    publishedAt: {
        type: String,
        required: true,
    },
    launches: [
        {
            id: { type: String },
            provider: { type: String }
        }
    ],
    events: [
        {
            id: { type: String },
            provider: { type: String }
        }
    ],

})

spaceModels.plugin(mongoosePaginate);
const spaceModel = mongoose.model('spaceDba', spaceModels)

module.exports = spaceModel