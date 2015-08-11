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
		
		// static $inject = ['$log','QuestionService','$state'];
		
		static $inject = ['$log','$stateParams','$state'
			,'$location', '$anchorScroll','QuestionService'];
		// $state:ng.ui.IState,
		
			constructor(private $log:ng.ILogService, 		
						$stateParams:IaskStateParams,
						private $state:angular.ui.IStateService,						
						private $location, private $anchorScroll,						
						private questionService:stackClone.QuestionService
						) {

			this.componentName = 'sebQuestion';
			$log.info("State params: "+$stateParams.qId);
			$log.info("goto params: "+$stateParams.gotoSolve);
			$log.info("params: "+JSON.stringify($state.params));
			
			
			if($stateParams.qId != undefined){
				//load question
				this.theQ= this.questionService.findByIndex($stateParams.qId);

				if(this.theQ != null)
				{
					this.listQ(this.theQ);
				}

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
			this.$log.info("id: "+q._id);
			this.$log.info("author: "+q.author);
			this.$log.info("authorId: "+q.authorId);
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
				this.theQ.solution =answere._id;
			}
			else
			{
				this.theQ.solution =undefined;
			}
			this.$log.info("idx: "+idx+" answere: "+answere.description+" idxans> "+this.theQ.answers[idx].description);  
		}


		//TODO is not working is not saved to db
		addAnswer(){
			this.my_markdown;
			this.$log.info("adding a answer");
			if(this.theQ.answers == undefined)
			{
				this.theQ.answers = [];
			}


			this.theQ.answers.push(<IAnswer>{
				authorId: Meteor.userId(),
				author: Meteor.user().emails[0].address,
				description:this.my_markdown,
				votes: 0,
				id: (this.theQ.answers.length+1)
			});
			this.questionService.update(this.theQ);
			//TODO this should be auto gen. from DB
		}
		
		delete()
		{
			this.questionService.remove(this.theQ);
			this.$state.go('questions');
		}
		
		deleteAnswere(answere:IAnswer){
			this.$log.info("delete answere> "+answere.description);
			this.theQ.answers.splice(this.theQ.answers.indexOf(answere),1);
			this.questionService.update(this.theQ);
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
