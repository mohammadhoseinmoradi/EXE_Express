const express = require('express')
const routes = express.Router()
let ages = [20, 25, 37, 40, 33]

routes.post('/checkAge', (req, res) => {
    console.log(1);
    if (ages.includes(Number(req.body.ege))) {
        res.status(200).send("ok")
    } else {
        res.status(406).send("nok")
    }
})
routes.get('/a', (req, res) => {
    // console.log(req)
    // res.send("Hello express A")
    res.json({
        name: "mohammad",
        password: "moradi"
    })
})
routes.get('/b', (req, res) => {
    // console.log(req)
    res.send("Hello express B")
})




module.exports = routes;