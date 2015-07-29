/**
 * Created by sebadmin on 2015-07-29.
 */
///<reference path='../../../typings/tsd.d.ts' />
var stackClone;
(function (stackClone) {
    /**
     * Main
     */
    // class Main extends TestTimer{
    var Main = (function () {
        function Main($log) {
            this.$log = $log;
            this.componentName = 'main';
        }
        Main.$inject = ['$log'];
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
    angular.module('app')
        .directive('sebMain', sebMain);
})(stackClone || (stackClone = {}));
//# sourceMappingURL=main.js.map