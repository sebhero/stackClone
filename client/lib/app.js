/**
 * Created by sebadmin on 2015-08-06.
 */
///<reference path='../../typingsCustom/myInterfaces.d.ts' />
var stackClone;
(function (stackClone) {
    'use strict';
    // Declare app level module which depends on views, and components
    angular.module('stackClone', [
        'angular-meteor',
        'ui.router',
        'ngAnimate',
        'ui.bootstrap',
        'ngTagsInput',
        'hc.marked'
    ])
        .config(['markedProvider', function (markedProvider) {
            markedProvider.setOptions({
                gfm: true,
                sanitize: true
            });
        }]);
    function onReady() {
        angular.bootstrap(document, ['stackClone']);
    }
})(stackClone || (stackClone = {}));
//# sourceMappingURL=app.js.map