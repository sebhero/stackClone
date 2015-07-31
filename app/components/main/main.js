/**
 * Created by sebadmin on 2015-07-29.
 */
///<reference path='../../../typingsCustom/myInterfaces.d.ts' />
var stackClone;
(function (stackClone) {
    /**
     * Main
     */
    // class Main extends TestTimer{
    var Main = (function () {
        function Main($log, questionService, shared) {
            this.$log = $log;
            this.questionService = questionService;
            this.shared = shared;
            this.componentName = 'Questions as';
            $log.info("Main LOADED");
        }
        Main.$inject = ['$log', 'QuestionService', 'SharedService'];
        return Main;
    })();
    function sebMain() {
        return {
            //templateUrl: '/components/main/main.ng.html',
            templateUrl: 'components/main/main.ng.html',
            controllerAs: 'main',
            controller: Main
        };
    }
    angular.module('stackClone')
        .directive('sebMain', sebMain);
})(stackClone || (stackClone = {}));
//# sourceMappingURL=main.js.map