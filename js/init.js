var templates = [];
var appRouter;
$(function() {
    templates["home"] = getTemplateAjax("template/home.hbr");
    templates["new-box"] = getTemplateAjax("template/new-box.hbr");
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