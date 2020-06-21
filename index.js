const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.listen(port);
console.log('hello')

app.get('/hello/:name', (req,res) => {
    res.status(200).send("hello " + req.params.name)
})