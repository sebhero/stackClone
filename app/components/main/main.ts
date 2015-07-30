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
		static $inject = ['$log','QuestionService'];


		constructor(private $log:ng.ILogService, private questionService:stackClone.QuestionService) {

			this.componentName = 'Questions';
			$log.info("Main LOADED");
		
			this.questionService.testCreateList();
			for(var item of this.questionService.readAll()){
				$log.info("item is "+item.title);
			}
			this.questionService.testUpdateDeleteRead();
			for(var item of this.questionService.readAll()){
				$log.info("item is "+item.title);
			}			
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