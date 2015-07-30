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
        function Main($log, questionService) {
            this.$log = $log;
            this.questionService = questionService;
            this.componentName = 'Questions';
            $log.info("Main LOADED");
            this.questionService.testCreateList();
            for (var _i = 0, _a = this.questionService.readAll(); _i < _a.length; _i++) {
                var item = _a[_i];
                $log.info("item is " + item.title);
            }
            this.questionService.testUpdateDeleteRead();
            for (var _b = 0, _c = this.questionService.readAll(); _b < _c.length; _b++) {
                var item = _c[_b];
                $log.info("item is " + item.title);
            }
        }
        Main.$inject = ['$log', 'QuestionService'];
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