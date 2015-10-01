(function(){
    var store = {};


    store.action = function(){return "plugins  Store=)"};
    store.html = function(){return "plugin store html"};
    store.text = "text for you";

    jsAtom.plugins.store = store;

}).call(this);




