const express = require('express');
const app = express();
const server = require('http').Server(app);

app.use(
    express.urlencoded({
        extended: true
    })
)

// Add headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.post('/database', function checkData(req, res) {
    console.log('post', req.body)
    if (req.body.name != '' && req.body.email != '') {
        console.log('Save Data Into Database: This course is out of chapter.')
        res.send('success');
    } else {
        console.log('Try a valid submission.')
        res.send('failed')
    }

});

server.listen(process.env.PORT || 4040);