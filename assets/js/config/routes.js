tutorial.config( function(jlRoutesProvider) {
  // routes object to store the routes
  var routeOptions = {};

  // active html5 mode, see https://docs.angularjs.org/guide/$location
  jlRoutesProvider.html5Mode(true);

  // basic layout
  jlRoutesProvider.state('layout', {
    abstract: true,
    resolve: {},
    views: {
      'layout' : {
        templateUrl: '/views/modern/layout.jade'
      },
    }
  });

  // Hello World View based on the layout state (parent `layout` + state key `helloworld` = route objectname `layoutHelloworld`)
  routeOptions.layoutHelloworld = {
    views: {
      'toolbar' : {
        templateUrl: '/views/modern/toolbar.jade',
      },
      'content' : {
        templateUrl: '/views/modern/helloworld/index.jade',
      },
      'footer' : {
        templateUrl: '/views/modern/footer.jade',
      },
    }
  };

  /*
   * init all routes from `routes` defined in routeOptions 
   */
  jlRoutesProvider.setRoutes(routes, routeOptions);
});


tutorial.run(function ($rootScope, $state, $window, $log) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    $log.error("[config/routes.js] Error", error);
  });
});