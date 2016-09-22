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

	app.directive("workList", function () {
			return {
				link: function (scope, element, attributes) {
					scope.data = scope[attributes["workList"]];
				},
				restrict: "A",
				template: "<ul><li ng-repeat='item in data'>{{item.itemName}}&nbsp;-&nbsp;{{item.itemPosition}}</li></ul>"
			}
		})
	app.controller("WorkCtrl", function ($scope) {
		$scope.items = [
			{ itemName: "Internet agency Web24", itemPosition: "Web Developer" },
			{ itemName: "Belarusbank", itemPosition: "Specialist" }			
		];
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

	app.directive('mySlider',function(){
		return {			
			link: function (scope, element, attrs) {			
					element.on('mouseup', function () {					
					switch(scope.rating3){
						case 1:
							angular.element(document.querySelector('#eng')).text("podstawowy");
							break;
						case 2:
							angular.element(document.querySelector('#eng')).text("śriedni");
							break;
						case 3:
							angular.element(document.querySelector('#eng')).text("średnio-zaawansowany");
							break;
						case 4:
							angular.element(document.querySelector('#eng')).text("zaawansowany");
							break;
						case 5:
							angular.element(document.querySelector('#eng')).text("ojczysty");
							break;
						default:
							angular.element(document.querySelector('#eng')).text("Niema poziomu");
					};
				
				});
			}
		};	
	});

	app.controller('sliderCtrl', function($scope) {
		$scope.rating1 = 3;
		$scope.rating2 = 2;
		$scope.rating3 = 2;
});


 /*   app.directive('mySlider', function() {
	   return {		 
		 link: function(scope, element, attrs) {
			var sliderFunc = function(aria-valuenow) {
			
				if (aria-valuenow == "4") {
					console.log('click');
				}
										switch(parent.scope.rating3){
						case '1':
							console.log('1');
							break;
						case '2':
							console.log('2');
							break;
						case '3':
							console.log('3');
							break;
						case '4':
							console.log('4');
							break;
						case '5':
							console.log('5');
							break;
					}	
				
			 }
			 
			 
		}
	  };
	})*/
})(); 