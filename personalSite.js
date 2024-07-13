const express = require("express");
const app = express();
const path = require('path');

const server = app.listen(3000, () => { // create a HTTP server on port 3000
    console.log(`Express running → PORT ${server.address().port}`)
});

app.use(express.static(path.join(__dirname, '/nickdurnil.github.io')));

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, '../nickdurnil.github.io/index.html'))
})

app.get("/test", (req, res) => {
    return res.sendFile(path.join(__dirname, '../nickdurnil.github.io/test.html'))
})

app.get("*", (req, res) => {
    return res.sendStatus(404)
})
