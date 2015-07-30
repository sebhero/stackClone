/**
 * Created by sebadmin on 2015-07-28.
 */
///<reference path="../typings/tsd.d.ts"/>

angular.module('app').controller('homeCtrl',['$scope',($scope:any)=>{
	$scope.title = "hem";
	$scope.items = ['home','about','contact'];
}]);
