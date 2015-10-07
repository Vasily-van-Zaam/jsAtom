/**
 * Created by Vasiliy on 30.09.2015.
 */
(function(){
    var express         = require("express");
    var path            = require("path");
    var passport =          require('passport');
    var expressSession =    require('express-session');
    var IM              =   require("immutable");
    var init            =   require("./init");
/*    var templatePath = require.resolve('./templates/content/templstore/index.jade');
    var templateFn = require('jade').compileFile(templatePath);*/



    
    var app = express();
   // app.use(express.favicon());
    app.use(express.static(path.join(__dirname, "public")));
    app.set('view engine', 'jade');
    app.set('views', path.join(__dirname, './templates/'));

   // app.use(express.logger('dev')); // выводим все запросы со статусами в консоль
    //app.use(express.bodyParser()); // стандартный модуль, для парсинга JSON в запросах
    //app.use(express.methodOverride()); // поддержка put и delete
   // app.use(app.router); // модуль для простого задания обработчиков путей

    /*console.log(app.get('/api', function (req, res) {
        if (!res.send(
                '<script src="lib/immutable/immutable.min.js">' +
                '</script><form method="post"> ' +
                'text <input name="name" type="text"> Enter<input type="submit">' +
                '<p> jsAtom:' + ' rrr: ' + jsAtom.plugins.admin.action() + '</p>')) {

        }
    }));*/

    app.all('/movie/:id', function(req, res, next) {
        Movie.get(req.params.id, function(err, movie) {
            // Делает присваивание res.locals.movie = movie
            res.local('movie', movie);
        });
    });


    app.use(expressSession({secret: 'mySecretKey!!!!!!!!!1111111111111'}));
    app.use(passport.initialize());
    app.use(passport.session());


    app.get('/test', function(req, res){

//        res.send("test");
        res.render('content/templstore/view/index.jade');

    });
    app.get('/*', function(req, res){
        res.render('content/templstore/view/index.jade')
    });


  /*  app.post('/api', function (req, res) {
        var set = [];
        var v = global;
        for(var key in v){set.push('<p>' + key + ": " + v[key] + '</p> </br>')}

        res.send('Result:' + set)
    });*/

    app.listen(80, function(){
        console.log('Express server listening on port 80');
    });





}).call(this);