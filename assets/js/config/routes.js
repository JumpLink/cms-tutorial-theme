tutorial.config( function($stateProvider) {
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
