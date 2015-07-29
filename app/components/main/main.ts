/**
 * Created by sebadmin on 2015-07-29.
 */
///<reference path='../../../typings/tsd.d.ts' />


namespace stackClone{
	/**
	 * Main
	 */
// class Main extends TestTimer{
	class Main{

		componentName:string;
		static $inject = ['$log'];


		constructor(private $log:ng.ILogService) {

			this.componentName = 'main';

		}

	}

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
}