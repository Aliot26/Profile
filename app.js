'use strict';
(function(){
	var app = angular.module('app', ['ngMaterial']);

	app.controller('AppCtrl', function($scope, $mdDialog) {
    $scope.user = {
        firstName: '',
        lastName: '',
        country: '',
        city: ''        
    };
    $scope.users = [];
    $scope.save = function() {
        $scope.users.push($scope.user);
        $scope.user = {
            firstName: '',
            lastName: '',
            country: '',
            city: ''
        };
    }
    $scope.delete = function(index, ev) {
        var confirm = $mdDialog.confirm()
            .title('Czy chcesz usunąć dane ?')
            .content('W przypadku zgody dane zostaną całkowicie usunięte z listy.')
            .ok('Usunąć!')
            .cancel('Anulować')
            .targetEvent(ev);
        $mdDialog.show(confirm).then(function() {
            $scope.users.splice(index, 1);
        }, function() {});
    }
});


})(); 