

// Twilio Credentials
/*var accountSid = 'AC9ca5617bd4993908521fd85edd523fb9';
var authToken = 'c80832992f51397eccecf03a622920f9';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: "+51982368392",
    from: "+51 1 7097669 ",
    body: "hola"
}, function(err) {
    console.log(err);
});*/

// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account

var accountSid = 'AC9ca5617bd4993908521fd85edd523fb9';
var authToken = "c80832992f51397eccecf03a622920f9";
var client = require('twilio')(accountSid, authToken);

client.calls.create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "+51982368392",
    from: "+5117097669"
}, function(err, call) {
    console.log(call.sid);
});
