///<reference path='../../../typingsCustom/myInterfaces.d.ts' />

namespace stackClone{

interface IaskStateParams extends ng.ui.IStateParamsService{
	qId:number;
	gotoSolve:boolean;
}

	class Question {
		componentName:string;
		theQ:IQuestion;

		my_markdown:string;
		
		static $inject = ['$log','$stateParams','$state'
			,'QuestionService','$location', '$anchorScroll'];
		
			constructor(private $log:ng.ILogService, 		
						$stateParams:IaskStateParams,
						$state:ng.ui.IState,
						private questionService:stackClone.QuestionService,
						private $location, private $anchorScroll
						) {
			this.componentName = 'sebQuestion';
			$log.info("State params: "+$stateParams.qId);
			$log.info("goto params: "+$stateParams.gotoSolve);
			$log.info("params: "+JSON.stringify($state.params));
			
			
			if($stateParams.qId != undefined){
				//load question
				this.theQ= questionService.findByIndex($stateParams.qId);
				// this.listQ(this.theQ);
				
				if($stateParams.gotoSolve){
					this.$log.info($stateParams.gotoSolve+ " its GOTO");
					var newHash = 'answer_' + this.theQ.solution;
				 if ($location.hash() !== newHash) {
			        // set the $location.hash to `newHash` and
			        // $anchorScroll will automatically scroll to it
			        $location.hash('answer_' + this.theQ.solution);
			      } else {
			        // call $anchorScroll() explicitly,
			        // since $location.hash hasn't changed
			        $anchorScroll();
			      }
			  }
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
				this.theQ.solution =answere.id;
			}
			else
			{
				this.theQ.solution =undefined;
			}
			this.$log.info("idx: "+idx+" answere: "+answere.description+" idxans> "+this.theQ.answers[idx].description);  
		}

		addAnswer(){
			this.my_markdown;
			this.$log.info("adding a answer");
			if(this.theQ.answers == undefined)
			{
				this.theQ.answers = [];
			}
			this.theQ.answers.push(<IAnswer>{
				author:"seb",
				description:this.my_markdown,
				votes: 0,
				id: (this.theQ.answers.length+1)
			});
			//TODO this should be auto gen. from DB


		}
		
		
	}
	
	function sebQuestion() {
		return {
		templateUrl: 'client/components/question/question.ng.html',
		controllerAs: 'question',
		controller: Question
		};
	}
	
	angular.module('stackClone')
		.directive('sebQuestion', sebQuestion);
	
	
}
