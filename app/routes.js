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
                template: "<seb-ask>faild load ask</seb-ask>"
            }).state('problems', {
                url: '/problems',
                templateUrl: "components/problems/problems.ng.html"
            }).state('testQ', {
                url: '/questions/1',
                params: { qId: 1 },
                template: '<seb-question></seb-question>'
            })
                .state('question', {
                url: '/questions/:qId',
                template: '<seb-question></seb-question>'
            });
        }]);
})(stackClone || (stackClone = {}));
////TODO add security
// .config(function ($urlRouterProvider:angular.ui.IUrlRouterProvider, $locationProvider:ng.ILocationProvider) {
//   $locationProvider.html5Mode(true);
//   $urlRouterProvider.otherwise('/');
// }).run(['$rootScope', '$state', function ($rootScope:ng.IRootScopeService, $state:angular.ui.IStateService) {
//   $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
//     if (error === 'AUTH_REQUIRED') {
//       $state.go('/');
//     }
//   });
// }]);
//# sourceMappingURL=routes.js.map