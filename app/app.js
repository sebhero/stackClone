///<reference path="../typings/tsd.d.ts"/>
var stackClone;
(function (stackClone) {
    'use strict';
    // Declare app level module which depends on views, and components
    angular.module('app', [
        'ui.router',
        'ngAnimate',
        'ui.bootstrap'
    ]).config(['$urlRouterProvider', '$stateProvider',
        function ($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('questions', {
                url: '/',
                template: '<seb-main></seb-main>'
            }).state('ask', {
                url: '/ask',
                templateUrl: "components/ask/ask.ng.html"
            }).state('problems', {
                url: '/problems',
                templateUrl: "components/problems/problems.ng.html"
            }).state('question', {
                url: '/question',
                templateUrl: "components/question/question.ng.html"
            });
        }]);
})(stackClone || (stackClone = {}));
//# sourceMappingURL=app.js.map