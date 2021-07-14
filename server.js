// Install express server
const PORT = process.env.PORT || '8080';
const express = require('express');
const path = require('path');
const app = express();


// Push notification details
const webpush = require('web-push');
const vapidKeys = webpush.generateVAPIDKeys();

// Hanlde push notifications from app to send to service worker
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));
app.post('/subscribe', (req, res) => {
    let sub = req.body;
    res.set('Content-Type', 'application/json');
    webpush.setVapidDetails(
        'mailto:daburduroglu@gmail.com',
        vapidKeys.publicKey,
        vapidKeys.privateKey
    )
    let payload = JSON.stringify({
        "notification" : {
            "title": "Sauce Boss",
            "body": "Thanks for using Sauce Boss, keep it saucy"
        }
    })
    console.log("Send Notification: ", sub);
    Promise.resolve(webpush.sendNotification(sub, payload))
        .then(() => res.status(200).json({
            message: 'Notification sent'
        }))
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        })
})

// Serve SPA
app.use(express.static(__dirname + '/dist/sauce-boss'));
app.get('/*', function(req,res) { 
    res.sendFile(path.join(__dirname+'/dist/sauce-boss/index.html'));
});
app.set('port', PORT)
app.listen(PORT);