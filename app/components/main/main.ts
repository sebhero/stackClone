/**
 * Created by sebadmin on 2015-07-29.
 */
///<reference path='../../../typingsCustom/myInterfaces.d.ts' />



namespace stackClone{
	/**
	 * Main
	 */
// class Main extends TestTimer{
	class Main{

		componentName:string;

		static $inject = ['$log','QuestionService','SharedService'];


		constructor(private $log:ng.ILogService, private questionService:stackClone.QuestionService,private shared:stackClone.SharedService) {

			this.componentName = 'Questions as';
			$log.info("Main LOADED");
			
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

	angular.module('stackClone')
		.directive('sebMain', sebMain);
}