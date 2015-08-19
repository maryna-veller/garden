require.config({
        tpl: {
        extension: '.ejs'
    },
    paths: {
        cardova: 'cardova',
        underscore: 'js/libs/underscore-min',
        jquery: 'js/libs/jquery-2.1.4',
        jquerymobile: 'js/libs/jquery.mobile-1.4.5',
        text: 'js/libs/text',
        tpl: 'js/libs/tpl',
        backbone: 'js/libs/backbone',
        backbone_localStorage: 'js/libs/backbone.localStorage',
        ejs: 'js/libs/ejs'
        
    }
});

require([

  // Load our app module and pass it to our definition function
  'js/init',
], function(init){
  // The "app" dependency is passed in as "App"
  init.initialize();
});

/*
        <script type="text/javascript" src="js/model.js"></script>
        <script type="text/javascript" src="js/collection.js"></script>
        <script type="text/javascript" src="js/view.js"></script>
        <script type="text/javascript" src="js/routes.js"></script>*/