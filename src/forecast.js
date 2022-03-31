const request = require('request')
    
const forecast = (lattitude, longitude, callback) => {
    const url =  'http://api.weatherstack.com/current?access_key=22308b4221f415bd2ebe146cbadb6fd0&query=' + lattitude + ',' + longitude
    request({url:url, json:true }, (error, response) => {
        if(error){
           callback('unable to connect', undefined)
        }
        else if(response.body.error){
            callback('address not found', undefined)
        }
        else{
            const data ="The current temperature is " + response.body.current.temperature + "degrees. But it feels like" + response.body.current.feelslike + " degrees"
            callback(undefined, data)
        }   
    })   
}
module.exports = forecast
// forecast(7.617, 4.300, (error, dataCast) => {
//         console.log('error:', error)
//         console.log('data:', dataCast)
// })

 


