const express = require('express')
const routes = express.Router()

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