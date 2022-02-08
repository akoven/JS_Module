const helloMessage = "Greetings! Let us begin!";
const {helloMessage} = require('./hello-message')
// module.exports = helloMessage;
// module.exports = {//you can add extra modules with this method using a comma separated list
//     helloMessage
// }

function sayMessage(message){
    console.log(`${message}`)
}

sayMessage(helloMessage);

module.exports = {sayMessage}
