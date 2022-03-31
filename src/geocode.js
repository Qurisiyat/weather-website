const request = require('request')

    const geocode = (address , callback) => {
        const url =  'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicWJhYnkiLCJhIjoiY2wwMTZxY2RsMGp0bTNwbWV2ZnBhYWt1ayJ9.DlIqJWmHCVRQQfq-hLJIZw&limit=1' 
        request({url:url, json:true }, (error, response) => {
            if(error){
                callback('unable to connect', undefined)
            }
            else if(response.body.features.length == 0){
                callback('address not found', undefined)
            }
            else{
                callback(undefined, {
                    place: response.body.features[0].place_name,
                    lattitude: response.body.features[0].center[1],
                    longitude: response.body.features[0].center[0]
                })
            }
            
        }) 
    
    }
   
    // geocode('lagos', (error, data)=>{
    //     console.log('data:', data)
    // })
    module.exports = geocode

    
   

// list = ['ade', 'bola', 'tinu']
// console.log(list[1])

//  1. the console.log has the weatherstack api
// 2. the  callback function for else is not part of the request function and it has its own link
// 3. they have two = in thier own