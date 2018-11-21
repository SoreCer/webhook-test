const functions = require('firebase-functions')
const {dialogflow} =require('actions-on-google')

const WELCOME_INTENT = 'Default Welcome Intent'
const FALLBACK_INTENT= 'Default Fallback Intent'
const NEED_QUOTE_INTENT= 'Need Quote'
const QUOTE_TYPE_ENTITY= 'TypeOfQuote'


const app=dialogflow()


app.intent(WELCOME_INTENT, (conv)=> {
    conv.ask("Hola Santiago! Te gustaria escuchar una frase?")
 })

app.intent(FALLBACK_INTENT, (conv)=> {
    conv.ask("No entendí nada")
 })

 app.intent(NEED_QUOTE_INTENT, (conv)=> {
    const type= conv.parameters[QUOTE_TYPE_ENTITY].toLowerCase();
    switch (type){
        case "felicidad":
             conv.ask("Aquellos que quieren cantar siempre encuentran una canción")
            break;
        case "amor":
             conv.ask("No hay amor imposible en esta vida, lo que sí existe son las personas que desisten justo antes de alcanzar el verdadero amor")
            break;
        case "amistad":
            conv.ask("Lo amigos son la familia que se escoge")
            break;
        case "inspiracion":
            conv.ask("Solo los que corren el riesgo de avanzar, pueden saber hasta dónde pueden llegar")
            break;
        default:
            conv.ask("El destino mezcla las cartas, y nosotros las jugamos")
    }



 })

 exports.dialogflowFirebaseFulfillment= functions.https.onRequest(app)
