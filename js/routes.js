var app = angular.module('duApp', ['ngRoute']);

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.when("/contact-us", {
        templateUrl: "templates/contact-us.html"
    });
    $routeProvider.when("/blog", {
        templateUrl: "templates/blog.html"
    });
    $routeProvider.when("/", {
        controller: "homeController",
        templateUrl: "templates/home.html"
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
    //if (window.history && window.history.pushState) {

    //    $locationProvider.html5Mode({
    //       enabled: true,
    //     requireBase: false
    //});
    //}
}]);

app.controller('homeController', ["$scope", "$http", function ($scope, $http) {
    $('.parallax').parallax();

}]);