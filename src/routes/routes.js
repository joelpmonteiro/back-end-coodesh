const express = require('express');
const app = express.Router();
const space = require('../controller/spaceFlightController.js');

app.get("/", (req, res) => {
    return res.status(200).json({ msg: "Fullstack Challenge 2021 🏅 - Space Flight News" })
});


app.get('/articles/:page/:limit', space.getAllArticlePagination)

app.get('/articles/:id', space.getArticleById)

app.post('/articles', space.insertArticle)

app.put('/articles/:id', space.updateArticle)

app.delete('/articles/:id', space.deleteArticle)

module.exports = app;