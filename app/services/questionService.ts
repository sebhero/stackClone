/**
 * Created by seb on 2015-07-27.
 */
/// <reference path="../../typingsCustom/myInterfaces.d.ts" />

namespace stackClone{
	// declare var Todos: Mongo.Collection<ITodo>;

	export class QuestionService{

		private questions:Array<IQuestion>;

		// static $inject = ['$log','$meteor','$mdSidenav'];
		static $inject = ['$log'];
		public searchFilter:string;

		// constructor(public $log:ng.ILogService, private $meteor:angular.meteor.IMeteorService){
		constructor(public $log:ng.ILogService){

			$log.info("QuestionService LOADED");
			// this.todos = $meteor.collection(Todos).subscribe('todos');
			this.questions = new Array<IQuestion>();
			this.testCreateList();
		}
		
		/**
		 * add a question to the list of questions
		 */
		add(newQuestion:IQuestion){
			newQuestion =this.checkQ(newQuestion);
			newQuestion.id =this.questions.push(newQuestion);
			// newQuestion.id = this.questions.length;			
		}
		
		/**
		 * Remove the question
		 * @parm theq is the question 
		 */
		remove(theQ:IQuestion){
			
			this.questions.splice(this.questions.indexOf(theQ),1);
		}
		
		/**
		 * Update the question
		 */
		update(theQ:IQuestion){
			// this.questions.indexOf
			var indx = this.questions.indexOf(theQ,0);
			return this.questions[indx] = theQ;
			
		}
		
		/**
		 * return the item in the list
		 */
		read(theQ:IQuestion){
			var indx = this.questions.indexOf(theQ,0);
			this.questions[indx] = theQ;
		}
		
		/**
		 * Find the question by Id
		 */
		findByIndex(indx:number):IQuestion
		{
			return this.questions[indx-1];
		}
		
		readAll():Array<IQuestion>{
			return this.questions;
		}
		
		/**
		 * Check if there is missing values of the JSON that need to be set
		 */
		checkQ(item:IQuestion)
		{
			if(item === undefined)
			{
				this.$log.info("Not defined Question");
			}
			else{
				if(item.answers === undefined)		this.$log.info("Not defined Answere");
				if(item.author === undefined)		this.$log.info("Not defined Author");;
				if(item.description === undefined)	this.$log.info("Not defined description");
				if(item.id === undefined)			this.$log.info("Not defined id");
				if(item.solution === undefined)		this.$log.info("Not defined solution");
				if(item.solved === undefined)		{this.$log.info("Not defined solved");item.solved=false;}
				if(item.tags === undefined)			this.$log.info("Not defined tags");
				if(item.title === undefined)		this.$log.info("Not defined title");
				if(item.votes === undefined)		
				{
					this.$log.info("Not defined votes");
					item.votes =0;
				}
			}
			return item;
		}
		
		testCreateList(){
			// <IQuestion>{}
			this.add(
				<IQuestion>{
					author:"seb",
					title:"Problems with windows",
					description:"## test\n\ncant start windows",
					tags:[
						{text:"windows"},
						{text:"pc"}
						],
					votes:2,
					solved:true,
					solution:2,
					answers:[
						{
							description:"restart pc",
							author:"seb",
							votes:0,
							id:1
							},
							
						{
							description:"reinstall pc",
							author:"seb",
							votes:0,
							id:2,
							solution:true
						},
						{
							description:"restart pc",
							author:"seb",
							votes:0,
							id:3
						}
						]

					}
				);
			this.add(
				<IQuestion>{
					author:"seb",
					title:"Problems with vpn",
					description:"cant start vpn service",
					tags:[
						{text:"vpn"},
						{text:"internet"},
						{text:"pc"}
						],
					votes:2,
					solved:false,
					solution:2,
					answers:[
						{
							id:1,
							description:"restart internet",author:"seb",votes:0},
						]

					}
				);
			this.add(
				<IQuestion>{
					author:"seb",
					title:"Problems with printer",
					description:"cant start printer",
					tags:[
						{text:"printer"},
						{text:"xerox"}
						],
					votes:2,
					solved:true,
					solution:2,
					answers:[
						{
							id:1,
							description:"restart printer",author:"seb",votes:0,
							
						},
						{
							id:2,
							description:"restart printer",author:"seb",votes:0,
							solution:true	
						},
						{
							id:3,
							description:"restart printer",author:"seb",votes:0}
						]

					}
				);
			this.add(
				<IQuestion>{
					author:"seb",
					title:"Problems with printer",
					description:"cant start printer",
					tags:[
						{text:"printer"},
						{text:"xerox"}
						],
					votes:2,
					solved:false,
					solution:2,
					answers:[
						{
							id:1,
							description:"restart printer",author:"seb",votes:0},
						]

					}
				);

		}
		
		testUpdateDeleteRead(){
			var num2 = this.findByIndex(2);
			this.$log.info("num2 is "+num2.title);
			num2.title = "new title";
			var temp2 = this.update(num2);
			this.$log.info("return of update: "+temp2.title);
			this.remove(num2);
			this.$log.info("removed num2");
			
		}
		
	}

	angular.module('stackClone')
		.service('QuestionService', QuestionService);
}