const FacebookMessengerBot = require('calamars').FacebookMessengerBot;

const myPageToken = 'PASTE_YOUR_PAGE_TOKEN_HERE';
const myVerifyToken = 'TYPE_ANY_RANDOM_STRING_HERE';
const myCallbackPath = '/webhook';
const myPort = 9091;

const myMessageListener = function(updateEvent){
    // output received message
    console.log('received update:', JSON.stringify(updateEvent.update, ' ', 2));
    // reply with the same received message
    updateEvent.bot.sendMessage({
        userId: updateEvent.update.sender.id,
        text: updateEvent.update.message.text
    });
};

const mybot = new FacebookMessengerBot({
    port: myPort,
    callbackPath: myCallbackPath,
    verifyToken: myVerifyToken,
    pageTokens: [myPageToken],
    listeners: {
        onMessage: myMessageListener
    }
});

mybot.launchPromise.then(function(){
    console.log(`server is running on port ${myPort}`);
})
