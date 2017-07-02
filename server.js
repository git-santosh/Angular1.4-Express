require('rootpath')();
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var rootPath = path.normalize(__dirname );
var app = express();
var router = express.Router();
console.log(rootPath);
app.use(express.static(rootPath +'/app'));
app.set('view engine','ejs');
app.set('views',rootPath + '/views');
app.set('port',process.env.PORT || 3000);

var server = app.listen(app.get('port') , function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('Server is running on http://localhost:'+app.get('port'));
    }
});