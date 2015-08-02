///<reference path='../../../typingsCustom/myInterfaces.d.ts' />

namespace stackClone{

interface IaskStateParams extends ng.ui.IStateParamsService{
	qId:number;
}

	class Question {
		componentName:string;
		theQ:IQuestion;

		my_markdown:string;
		
		static $inject = ['$log','$stateParams','QuestionService'];
		
			constructor(private $log:ng.ILogService, 		
						$stateParams:IaskStateParams,
						private questionService:stackClone.QuestionService
						) {
			this.componentName = 'sebQuestion';
			$log.info("State params: "+$stateParams.qId);
			if($stateParams.qId != undefined){
				//load question
				this.theQ= questionService.findByIndex($stateParams.qId);
				this.listQ(this.theQ);
			}
		}
		
		listQ(q:IQuestion){
			this.$log.info("id: "+q.id);
			this.$log.info("author: "+q.author);
			this.$log.info("title: "+q.title);
			this.$log.info("description: "+q.description);
			this.$log.info("tags: "+JSON.stringify(q.tags));
			this.$log.info("votes: "+q.votes);
			this.$log.info("solved: "+q.solved);
			this.$log.info("solution: "+q.solution);
			this.$log.info("answers: "+JSON.stringify(q.answers));
		}
		
		voteUp(){
			this.theQ.votes++;
		}
		
		voteDown(){
			// if(this.theQ.votes >0){
				this.theQ.votes--;
			// }
		}
		voteAnswereUp(answere:IAnswer){
			answere.votes++;
			// this.theQ.answers[1].votes++;
		}
		
		voteAnswereDown(answere:IAnswer){
			answere.votes--;
			// if(this.theQ.votes >0){
				// this.theQ.answers[1].votes--;
			// }
		}
		
		solveToggle(answere:IAnswer,idx){
			this.theQ.solved = !this.theQ.solved;
			answere.solution = !answere.solution;
			if(this.theQ.solved){
				this.theQ.solution =idx;
			}
			else
			{
				this.theQ.solution =undefined;
			}
			this.$log.info("idx: "+idx+" answere: "+answere.description+" idxans> "+this.theQ.answers[idx].description);  
		}

		addAnswer(){
			this.my_markdown;
			this.theQ.answers.push(<IAnswer>{
				author:"seb",
				description:this.my_markdown,
				votes: 0
			});

		}
		
		
	}
	
	function sebQuestion() {
		return {
		templateUrl: 'components/question/question.ng.html',
		controllerAs: 'question',
		controller: Question
		};
	}
	
	angular.module('stackClone')
		.directive('sebQuestion', sebQuestion);
	
	
}
