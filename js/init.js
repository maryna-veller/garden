define([
    'jquery',
    'underscore',
    'backbone',
    'ejs',
    'js/routes'
], function($, _, Backbone, ejs, routes){
var templates = [];
var appRouter;
    var initialize = function() {
    //    templates["home"] = getEjsTeamplate("template/home.ejs");
    //    templates["new-box"] = getEjsTeamplate("template/new-box.ejs");
    //    templates["edit-box"] = getEjsTeamplate("template/edit-box.ejs");
    //    templates["list-box"] = getEjsTeamplate("template/list-box.ejs");
    //    templates["edit-cell"] = getEjsTeamplate("template/edit-cell.ejs");
        routes.initialize();
        Backbone.history.start();    
    };//

    //function getEjsTeamplate(path){
      //  return new ejs({url: path});

    //}
    
    return {
        initialize: initialize
    };
});

/*
function getTemplateAjax(path) {
        var source;
        var template;
        $.ajax({
            url: path, 
            cache: true,
            async:false,
            dataType: "html",
            success: function(data) {
                source    = data;
                template  = Handlebars.compile(source);
            },
            error: function(xhr, textStatus, errorThrown){
                alert(errorThrown);
            }
        });         
        return template;
    }

Handlebars.registerHelper('flat', function(dataObject, options) {
    var out;
    var boxLength = dataObject.length;
    for(var i=0;i<boxLength;i++){
        var col = dataObject[i];
        out +="<tr>";
        for(var j=0;j<col.length;j++){
            var cell = col[j];
            var id = i*boxLength+j;
            out +="<td><div class='cell' id='cell"+id+"'>Plant: " + cell.plant+"<div></td>";
        }
        out +="</tr>";
    }
        return out;

});

Handlebars.registerHelper('list', function(dataObject, options) {
    var out = "";
    var models = dataObject.models;
    for (var i =0; i<models.length;i++){
        out = out +'<div><a href="#" class="boxLink" id='+models[i].get("id")+'>'+models[i].get("name")+'</a></div>';
    }
    return out;
});
*/