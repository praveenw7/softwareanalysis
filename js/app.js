


var app = angular.module("myApp", ['ui.router','ui.bootstrap']);

app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state("/home", {
        url: "/home",
        templateUrl : "home.html"
    })
    .state("/about", {
        url: "/home",
        templateUrl : "about.html"
    })
	
	.state("/services", {
        url: "/home",
        templateUrl : "services.html"
    })
	.state("/portfolio", {
        url: "/home",
        templateUrl : "portfolio.html"
    })
	.state("/contect", {
        url: "/home",
        templateUrl : "contect.html"
   
    });
	
	
}]);





/*

function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://softwareanalysis.in/img/banner.jpg'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];
}


*/

/*
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/about", {
        templateUrl : "about.html"
    })
    .when("/services", {
        templateUrl : "services.html"
    })
    .when("/portfolio", {
        templateUrl : "portfolio.html"
    });
	 .when("/contect", {
        templateUrl : "contect.html"
    });
});

*/