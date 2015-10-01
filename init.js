/**
 * Created by Vasiliy on 01.10.2015.
 */
(function (){

    var initConfig = {
        plugins: {
            admin: "./plugins/admin/main",
            store: "./plugins/store/main"
        },
        templates: {
            content: {
                defaults: "./templates/content/defaults/main",
                templStore: "./templates/content/templstore/main"
            },
            admin: {
                defaults: "./templates/admin/defaults/main"
            }
        }
    };

    /*
    * Create global jsAtom
    * */
    global.jsAtom = {
        plugins: {},
        templates: {
            admin: {},
            content: {}
        }
    };
    /*
    *
    * init all plugins and templates
    *
    * */
    for(var k_plugin in initConfig.plugins){
        require(initConfig.plugins[k_plugin]);
        /* create log here*/
    }
    for(var k_temAdmin in initConfig.templates.admin){
        require(initConfig.templates.admin[k_temAdmin]);
        /* create log here*/
    }
    for(var k_temContent in initConfig.templates.content){
        require(initConfig.templates.content[k_temContent]);
        /* create log here*/
    }


}).call(this);
