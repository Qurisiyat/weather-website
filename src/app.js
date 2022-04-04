 const express = require("express")
 const app = express()
 const path = require('path')
 const request = require('request')
const forecast= require('./forecast')
const geocode= require('./geocode')
 const publicDir = path.join(__dirname, '../public')

 const port = process.env(PORT) || 3000

 app.use(express.static(publicDir))

 app.get('/weather', (req, res) =>{
     if(!req.query.address){
        return res.send({
             error: "please input address"
         })
     }
     geocode(req.query.address, (error, {lattitude, longitude, place} = {}) =>{
         if(error){
          return res.send(error)
         }
        forecast(lattitude, longitude, (error, forecatData) => {
            if(error){
                return res.send(error)
            }
            res.send({
                place: place,
                forecast: forecatData,
            })
        })
        })

    })

 app.listen(port, () => {
     console.log('listening on port ' + port)
 })