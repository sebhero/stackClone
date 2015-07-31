/**
 * Created by seb on 2015-07-27.
 */
/// <reference path="../../typingsCustom/myInterfaces.d.ts" />
var stackClone;
(function (stackClone) {
    // declare var Todos: Mongo.Collection<ITodo>;
    var SharedService = (function () {
        function SharedService($log) {
            this.$log = $log;
            this.searchFilter = "";
            $log.info("SharedService LOADED");
        }
        SharedService.$inject = ['$log'];
        return SharedService;
    })();
    stackClone.SharedService = SharedService;
    angular.module('stackClone')
        .service('SharedService', SharedService);
})(stackClone || (stackClone = {}));
//# sourceMappingURL=sharedService.js.map