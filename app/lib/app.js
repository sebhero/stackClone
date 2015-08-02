///<reference path='../../typingsCustom/myInterfaces.d.ts' />
var stackClone;
(function (stackClone) {
    'use strict';
    // Declare app level module which depends on views, and components
    angular.module('stackClone', [
        'ui.router',
        'ngAnimate',
        'ui.bootstrap',
        'ngTagsInput',
        'ngSanitize',
        'hc.marked'
    ])
        .config(['markedProvider', function (markedProvider) {
            markedProvider.setOptions({
                gfm: true,
                sanitize: true
            });
        }]);
})(stackClone || (stackClone = {}));
//# sourceMappingURL=app.js.map