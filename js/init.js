var templates = [];
var appRouter;
$(function() {
    templates["home"] = getTemplateAjax("template/home.hbr");
    templates["new-box"] = getTemplateAjax("template/new-box.hbr");
    templates["edit-box"] = getTemplateAjax("template/edit-box.hbr");
    templates["list-box"] = getTemplateAjax("template/list-box.hbr");
    templates["edit-cell"] = getTemplateAjax("template/edit-cell.hbr");
    appRouter = new GardenRouter;
    Backbone.history.start();    
});

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