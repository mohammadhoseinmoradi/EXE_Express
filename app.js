const express = require('express');
const app = express();
const things = require('./routes/things')
app.use('/', (req, res, next) => {
    console.log(1)
        // res.json({
        //     name: "reza",
        //     pass: "111111"
        // })
    req.test = "test"
    next();
})
app.get('/', (req, res) => {
    console.log(2, req.test)
    res.send("Hello express")
})
app.use('/things', things)
app.listen(5005, () => {
    console.log("the server is started 5005 !!");
})