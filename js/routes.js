var app = angular.module('duApp', ['ngRoute']);

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    
    
    $routeProvider.when("/", {
        controller: "homeController",
        templateUrl:"templates/home.html"
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
    //if (window.history && window.history.pushState) {
   
    //    $locationProvider.html5Mode({
    //        enabled: true,
    //        requireBase: false
    //    });
    //}
}]);

app.controller('homeController', ["$scope", "$http",  function ($scope, $http) {
 $('.parallax').parallax();
 
}]);