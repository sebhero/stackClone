///<reference path='../../../typingsCustom/myInterfaces.d.ts' />
angular.module('stackClone')
	.directive('sebToolbar', sebToolbar);

class Toolbar {
	componentName:String;

	static $inject = ['$log','SharedService'];

	constructor(private $log:ng.ILogService,private shared:stackClone.SharedService) {
		this.componentName = 'toolbar';
		
	}
}

function sebToolbar() {
	return {
	templateUrl: 'client/components/toolbar/toolbar.ng.html',
	controllerAs: 'toolbar',
	controller: Toolbar
	};
}