/**
 * Created by Vasiliy on 30.09.2015.
 */
(function(){
    var express         = require("express");
    var path            = require("path");
    var IM               = require("immutable");


    IM.Map.isMap([]);
    
    var app = express();

    app.use(express.favicon());
    app.use(express.static(path.join(__dirname, "public")));

    app.use(express.logger('dev')); // выводим все запросы со статусами в консоль
    app.use(express.bodyParser()); // стандартный модуль, для парсинга JSON в запросах
    app.use(express.methodOverride()); // поддержка put и delete
    app.use(app.router); // модуль для простого задания обработчиков путей

    app.get('/api', function (req, res) {
        res.send('<script src="lib/immutable/immutable.min.js"></script><form method="post"> text <input name="name" type="text"> Enter<input type="submit">');
    });


    var printObject = function (data) {


    };

    var doc = {
        a : "a",
        b : "b",
        c : {
            d : "d",
            e : "e"
        }
    };

    app.post('/api', function (req, res) {
        var set = [];
        for(var key in req){set.push('<p>' + key + ": " + req[key] + '</p> </br>')}

        res.send('Result:' + set)
    });

    app.listen(80, function(){
        console.log('Express server listening on port 80');
    });





}).call(this);