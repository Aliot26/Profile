angular.module("studyModule", [])
.controller("studyCtrl", function ($scope) {
	$scope.tasks = [
		{ action: "Personalia", complete: 'data="about"' },
		{ action: "Doświadczenie", complete: 'data="experience"' },
		{ action: "Umiejętności", complete: 'data="skills"' },		
		{ action: "Języki", complete: 'data="languages"' },		
		{ action: "Zainteresowania", complete: 'data="hobbies"' }
	];
});
 