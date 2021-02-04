const express = require('express');
const app = express();
const things = require('./routes/things')
const path = require('path')
const bodyParser = require('body-parser')
    // ------------------------------------------------------------
    // -------------------------------------------------------------
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/', (req, res, next) => {
    console.log(1)
    req.test = "test"
    next();
})
app.get('/', (req, res) => {
    console.log(2, req.test)
        // res.sendFile(__dirname + '\\public\\login.html');
    res.sendFile(path.join(__dirname, 'public/login.html'));


})
app.use('/things', things)
app.listen(5005, () => {
    console.log("the server is started 5005 !!");
})