

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
});

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
*/


//Initialize a REST client in a single line:
var client = require('twilio')('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');
 
// Use this convenient shorthand to send an SMS:
client.sendSms({
    to:'YOUR_PHONE',
    from:'TWILIO_NUMBER',
    body:'ahoy hoy! Testing Twilio and node.js'
}, function(error, message) {
    if (!error) {
        console.log('Success! The SID for this SMS message is:');
        console.log(message.sid);
        console.log('Message sent on:');
        console.log(message.dateCreated);
    } else {
        console.log('Oops! There was an error.');
    }
});
