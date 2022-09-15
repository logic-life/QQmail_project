app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/showName', {
            templateUrl: 'view/showName.html',
            controller: 'showNameController'
        })
        .when('/showInfo', {
            templateUrl: 'view/showInfo.html',
            controller: 'showInfoController'
        })
        .otherwise({
            redirectTo: '/showName'
        });
}]);