var alexa = require('alexa-app');
var app = new alexa.app('sample');
//var npm = require('npm');
//var http = require('http');


app.launch(function(request,response) {
    console.log('launch request');
    //response.card("Hello World","This is an example card");
    //response.say('hello');
    response.shouldEndSession(false);
});

app.intent('info',
  {
    "slots":{"package":"string"}
    ,"utterances":[ "info {package}"]
  },
  function(request,response) {
    var pkg = request.slot('package')
    console.log(pkg)
    response.say(pkg);
    response.send()
        
    //response.say then response.said
    // Return false immediately so alexa-app doesn't send the response 
    //return false; 
  }
);
app.sessionEnded(function(request,response) {
    // No response necessary
    console.log('session end'); 
});

exports.handler = app.lambda();

console.log(app.utterances());
console.log(app.schema());
