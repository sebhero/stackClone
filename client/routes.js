/**
 * Created by sebadmin on 2015-08-06.
 */
///<reference path='../typingsCustom/myInterfaces.d.ts' />
var stackClone;
(function (stackClone) {
    'use strict';
    angular.module('stackClone')
        .config(['$urlRouterProvider', '$stateProvider',
        function ($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                url: '/',
                template: '<seb-main></seb-main>'
            })
                .state('questions', {
                url: '/questions',
                template: '<seb-main></seb-main>'
            })
                .state('ask', {
                url: '/ask',
                template: "<seb-ask>faild load ask</seb-ask>",
                resolve: {
                    "currentUser": ["$meteor", function ($meteor) {
                            return $meteor.requireUser();
                        }]
                }
            }).state('problems', {
                url: '/problems',
                templateUrl: "client/components/problems/problems.ng.html",
                resolve: {
                    "currentUser": ["$meteor", function ($meteor) {
                            $meteor.call('checkIfAdmin');
                            return true;
                            //return $meteor.requireUser();
                        }]
                }
            }).state('testQ', {
                url: '/questions/1?gotoSolve=true',
                // url:'/questions/1?test',
                params: { qId: 1, gotoSolve: "true" },
                template: '<seb-question></seb-question>'
            })
                .state('question', {
                // url:'/questions/:qId?gotoSolve',
                url: '/questions/{qId}?gotoSolve',
                template: '<seb-question></seb-question>'
            });
        }]);
})(stackClone || (stackClone = {}));
//# sourceMappingURL=routes.js.map