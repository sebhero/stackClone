///<reference path='../../typingsCustom/myInterfaces.d.ts' />


namespace stackClone{

'use strict';

// Declare app level module which depends on views, and components
angular.module('stackClone', [
	'ui.router',
	'ngAnimate',
	'ui.bootstrap',
	'ngTagsInput',
	'ngSanitize',
	'hc.marked'
	//'hc.commonmark'
])
	.config(['markedProvider', function(markedProvider) {
		markedProvider.setOptions({
			gfm: true,
			sanitize: true
		});
	}]);

}