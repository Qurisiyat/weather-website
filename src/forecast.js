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
            const time = response.body.location.localtime
            const times = response.body.current.observation_time
            const fore = response.body.current.weather_descriptions[0]
            const data ="observation time: " + times + ". Local time: " + time + ". " + fore + ". The current temperature is " + response.body.current.temperature + "degree celsius. But it feels like" + response.body.current.feelslike + " degree celsuis"
            
            callback(undefined, data)
        }   
    })   
}
module.exports = forecast
// forecast(7.617, 4.300, (error, dataCast) => {
//         console.log('error:', error)
//         console.log('data:', dataCast)
// })

 


