const https = require('https')
const querystring = require('querystring')

const base_url = 'api-gitpod-django-drf.herokuapp.com'

request_params = {
    'format' : 'json',
    'user' : 'admin',
    'password' : 'admin',
}

let api_response = ''

const options = {
    hostname : base_url,
    port : 443,
    path : '/users/',
    method : 'GET',
    headers : {
        'Content-Type' : 'application/json',
        'Content-Type' : Buffer.byteLength(
            querystring.stringify(request_params)
            )
    }
}
const api_request = https.request(
    options,
    (response) => {
        response.on( 'data', 
        data_chunk => api_response += data_chunk
        )

    response.on( 'end', (request_end) => {
        console.log( api_response)
        })

    response.on('error', (error_message) => {
        console.error(`error: ${error_message}`)
        })
    }
)
api_request.end()