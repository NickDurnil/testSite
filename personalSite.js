const express = require("express");
const app = express();
const path = require('path');

const server = app.listen(3000, () => { // create a HTTP server on port 3000
    console.log(`Express running → PORT ${server.address().port}`)
});

app.use(express.static(path.join(__dirname, '/images'), { // host the whole directory
        extensions: ["html", "htm", "gif", "png"],
    }))

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, '/pages/index.html'))
})

app.get("/test", (req, res) => {
    return res.sendFile(path.join(__dirname, '/pages/test.html'))
})

app.get("*", (req, res) => {
    return res.sendStatus(404)
})
