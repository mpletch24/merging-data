

angular.module('AddressBook', [])
	.controller('AddressController', function($scope) {

		$scope.employees = pawneeEmployees;
		$scope.sortCol = 'lastName';

		$scope.sortBy = function(sortCol) {
			$scope.sortCol = sortCol;
		};

		$scope.isSorted = function(colName) {
			return $scope.sortCol == colName;
		};

	});