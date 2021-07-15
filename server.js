// Install express server
const PORT = process.env.PORT || '8080';
const express = require('express');
const path = require('path');
const app = express();

// Serve SPA
app.use(express.static(__dirname + '/dist/sauce-boss'));
app.get('/*', function(req,res) { 
    res.sendFile(path.join(__dirname+'/dist/sauce-boss/index.html'));
});
app.set('port', PORT)
app.listen(PORT);