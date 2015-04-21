var templates = [];
$(function() {
    templates["home"] = getTemplateAjax("template/home.js");
    console.log(1);
    var appRouter = new GardenRouter;
    Backbone.history.start();    
    
    console.log(4);
});

function getTemplateAjax(path) {
        var source;
        var template;
      //  alert(path);
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