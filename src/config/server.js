const express = require('express');
const router = require('../routes/routes.js');
const app = express();
const cron = require('node-cron');
const axios = require('../axios/axios.js');
const space = require('../models/spaceModel.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

cron.schedule('* 9 * * *', async () => {
    console.log('running a task 9 hours');
    try {
        const spaceItem = await axios.getArticleForInsert();
        await space.insertMany(spaceItem);
    } catch (e) {
        console.log(e.message);
        // console.log(e)
    }

});



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token"
    );
    next();
});

app.use("/", router);

module.exports = app