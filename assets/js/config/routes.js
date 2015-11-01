tutorial.config( function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  // Hello World
  $stateProvider.state('helloworld', {
    url: '/helloworld',
    views: {
      'layout' : {
        templateUrl: '/views/modern/helloworld/index.jade',
      },
    }
  });
});
