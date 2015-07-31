///<reference path='../../../typingsCustom/myInterfaces.d.ts' />
angular.module('stackClone')
    .directive('sebToolbar', sebToolbar);
var Toolbar = (function () {
    function Toolbar($log, shared) {
        this.$log = $log;
        this.shared = shared;
        this.componentName = 'toolbar';
    }
    Toolbar.$inject = ['$log', 'SharedService'];
    return Toolbar;
})();
function sebToolbar() {
    return {
        templateUrl: 'components/toolbar/toolbar.ng.html',
        controllerAs: 'toolbar',
        controller: Toolbar
    };
}
//# sourceMappingURL=toolbar.ng.js.map