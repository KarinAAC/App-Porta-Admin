

// Twilio Credentials
var accountSid = 'AC5283b4328eb45bfb2ce02be47bc360bf';
var authToken = "cf4e40139ba660372a7c7377d65c598d";

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: "+51982368392",
    from: "+13233101638",
    body: "Hola, ven a aprender a bordar con nosotros el 8 de Agosto.¡Te esperamos!, más información https://analucia20.github.io/aporta-project/index.html"
}, function(err) {
    console.log(err);
});
//+5117097857
// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account

/*var accountSid = 'AC5283b4328eb45bfb2ce02be47bc360bf';
var authToken = "cf4e40139ba660372a7c7377d65c598d";
var client = require('twilio')(accountSid, authToken);

client.calls.create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "+51969317058",
    from: "+13233101638"
}, function(err, call) {
    console.log(call.sid);
});*/
