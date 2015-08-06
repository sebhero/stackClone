/**
 * Created by sebadmin on 2015-08-06.
 */
///<reference path='../typingsCustom/myInterfaces.d.ts' />

namespace stackClone{

	'use strict';

	angular.module('stackClone')
		.config(['$urlRouterProvider','$stateProvider',
			function($urlRouterProvider:ng.ui.IUrlRouterProvider,
					 $stateProvider:ng.ui.IStateProvider){
				$urlRouterProvider.otherwise('/');

				$stateProvider
					.state('home',{
						url:'/',
						template: '<seb-main></seb-main>'
					})
					.state('questions',{
						url:'/questions',
						template: '<seb-main></seb-main>'
					})
					.state('ask',{
						url:'/ask',
						template: "<seb-ask>faild load ask</seb-ask>"
						// templateUrl: "components/ask/ask.ng.html",
					}).state('problems',{
						url:'/problems',
						templateUrl:"client/components/problems/problems.ng.html"
					}).state('testQ',{
						url:'/questions/1?gotoSolve=true',
						// url:'/questions/1?test',
						params:{qId:1, gotoSolve:"true"},
						template: '<seb-question></seb-question>'
					})
					.state('question',{
						// url:'/questions/:qId?gotoSolve',
						url:'/questions/{qId}?gotoSolve',
						template: '<seb-question></seb-question>'
					});

			}]);

}