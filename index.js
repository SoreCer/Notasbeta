const express = require('express');
const bodyParser = require('body-parser');
const fs= require('fs');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());
 
restService.post('/note', function (req,res){

    var tittle = req.body.queryResult.parameters.tittle;
    var description = req.body.queryResult.parameters.description;
    /*fs.writeFile("texto", description, function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    }); */
    
    return res.json({
        fulfillmentText: 'nota guardada',
        source: 'webhook-echo-sample'
    });
});




















