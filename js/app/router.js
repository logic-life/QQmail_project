app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/draftBox', {
            templateUrl: 'view/draftBox.html',
            controller: 'draftBoxCtrl'
        })
        .when('/inBox', {
            templateUrl: 'view/inBox.html',
            controller: 'inBoxCtrl'
        })
        .when('/outBox', {
            templateUrl: 'view/outBox.html',
            controller: 'outBoxCtrl'
        })
        .otherwise({
            redirectTo: '/showName'
        });
}]);