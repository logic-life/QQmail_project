app.controller('showInfoController', ['$scope', function ($scope) {
    $scope.infos = [
        { username: 'frank', password: '123456' },
        { username: 'zoe', password: '654321' }
    ];
}]);