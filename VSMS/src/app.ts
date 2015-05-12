/// <reference path="types.ts"/>
module app {
    angular.module('myApp', ['ngRoute']).
        config(config);

    config.$inject = ["$routeProvider"];
    function config($routeProvider: ng.route.IRouteProvider): void {
        $routeProvider.
            when('/home', {
            templateUrl: 'views/home.html'
        }).
            when('/add', {
            templateUrl: 'views/addrequest.html'
        }).
            when('/view/:requestid', {
            templateUrl: 'views/viewrequest.html',
            controller: ($scope: IAppScope, $routeParams: ng.route.IRouteParamsService): void => {
                $scope.RequestDetail = $scope.requestList[$routeParams['requestid']];
            }
        }).
            otherwise({
            redirectTo: '/home'
        });
    }
}

