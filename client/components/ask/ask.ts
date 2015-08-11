///<reference path='../../../typingsCustom/myInterfaces.d.ts' />

namespace stackClone{

interface IaskStateParams extends ng.ui.IStateParamsService{
	qId:string;
}

/**
 * Handles asking new questions
 */
class Ask {
	componentName:string;
	
	tags:any;
	newQ:IQuestion;
	
	static $inject = ['$log','QuestionService','$state'];

	constructor(private $log:ng.ILogService, 
		private questionService:stackClone.QuestionService
		,private $state:angular.ui.IStateService
		) {
			
		this.componentName = 'sebAsk';
		$log.info("ASk loaded");
		
		
		//TODO fix the tags so it works with meteor and tsd. is missing libary in both
	}
	
	addQuestion(newQ:IQuestion)
	{
		// this.questionService.checkQ(newQ);
		this.questionService.add(newQ);
		this.$state.go('questions');
	}
	
	/**
	 * Resets the ask form
	 */
	reset(){
		this.$log.info("reset");		
		this.newQ=<IQuestion>{};
	}
	
	testTags(){
		this.$log.info("test tag");
		this.$log.info("tags "+JSON.stringify(this.newQ.tags));
	}
}

function sebAsk() {
	return {
	templateUrl: 'client/components/ask/ask.ng.html',
	controllerAs: 'ask',
	controller: Ask
	};
}

angular.module('stackClone')
	.directive('sebAsk', sebAsk);

}