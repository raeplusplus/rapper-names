const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage':{
        'age': 29,
        'birthname': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance The rapper':{
        'age': 29,
        'birthname': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan':{
        'age': 29,
        'birthname': 'Dyalan',
        'birthLocation': 'Dylan, Dylan'
    }
}

app.get('http://rapper-names-test-api.herokuapp.com/', (request, response)=>{
    response.sendFile(__dirname + '/index.html') 
})

app.get('http://rapper-names-test-api.herokuapp.com/api/:rapperName', (request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json((rappers[rappersName]))
    }else{
        response.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})