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
    $scope.saveData = function(newUser) {
		if(angular.isDefined(newUser) && angular.isDefined(newUser.firstName) && angular.isDefined(newUser.lastName) && angular.isDefined(newUser.country)  && angular.isDefined(newUser.city)){
        $scope.users.push({firstName:newUser.firstName, lastName:newUser.lastName, country:newUser.country, city:newUser.city});
        $scope.user = {
            firstName: '',
            lastName: '',
            country: '',
            city: ''
        };
		};
    }
	$scope.limitValue = "5";
    $scope.limitRange = [1,2,3,4,5];
	
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
	app.controller('CheckCtrl', function($scope) {

    $scope.items = ["PHP","HTML","CSS","JS","C++","C#","JAVA","PYTHON"];
      $scope.selected = [];

      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
          list.push(item);
        }
      };

      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
});

})(); 