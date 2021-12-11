const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:joel451236@cluster0.1dnts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
})

mongoose.Promise = global.Promise

module.exports = mongoose