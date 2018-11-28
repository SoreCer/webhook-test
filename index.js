use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/quote', function(req, res) {
    //var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    //var speech = "Hola Jorge";
    var type = req.body.result && req.body.result.parameters && req.body.result.parameters.TypeOfQuote;
    switch (type){
        case "felicidad":
             var speech ="Aquellos que quieren cantar siempre encuentran una canción";
            break;
        case "amor":
             var speech ="No hay amor imposible en esta vida, lo que sí existe son las personas que desisten justo antes de alcanzar el verdadero amor";
            break;
        case "amistad":
            var speech ="Lo amigos son la familia que se escoge";
            break;
        case "inspiracion":
            var speech ="Solo los que corren el riesgo de avanzar, pueden saber hasta dónde pueden llegar";
            break;
        default:
            var speech ="El destino mezcla las cartas, y nosotros las jugamos";
    }

    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});




 })

 exports.dialogflowFirebaseFulfillment= functions.https.onRequest(app)
