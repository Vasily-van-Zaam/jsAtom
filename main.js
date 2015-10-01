/**
 * Created by Vasiliy on 30.09.2015.
 */
(function(){
    var express         = require("express");
    var path            = require("path");
    var IM              = require("immutable");
    var init            = require("./init");



    
    var app = express();

    app.use(express.favicon());
    app.use(express.static(path.join(__dirname, "public")));

    app.use(express.logger('dev')); // выводим все запросы со статусами в консоль
    app.use(express.bodyParser()); // стандартный модуль, для парсинга JSON в запросах
    app.use(express.methodOverride()); // поддержка put и delete
    app.use(app.router); // модуль для простого задания обработчиков путей

    /*console.log(app.get('/api', function (req, res) {
        if (!res.send(
                '<script src="lib/immutable/immutable.min.js">' +
                '</script><form method="post"> ' +
                'text <input name="name" type="text"> Enter<input type="submit">' +
                '<p> jsAtom:' + ' rrr: ' + jsAtom.plugins.admin.action() + '</p>')) {

        }
    }));*/


    app.get('/test', function(req, res){

        res.send("test");

    });
    app.get('/*', function(req, res){

        res.send("QQQQQQQQQQ");

    });


    app.post('/api', function (req, res) {
        var set = [];
        var v = global;
        for(var key in v){set.push('<p>' + key + ": " + v[key] + '</p> </br>')}

        res.send('Result:' + set)
    });

    app.listen(80, function(){
        console.log('Express server listening on port 80');
    });





}).call(this);