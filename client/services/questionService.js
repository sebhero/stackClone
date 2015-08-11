/**
 * Created by seb on 2015-07-27.
 */
/// <reference path="../../typingsCustom/myInterfaces.d.ts" />
var stackClone;
(function (stackClone) {
    var QuestionService = (function () {
        // constructor(public $log:ng.ILogService, private $meteor:angular.meteor.IMeteorService){
        // constructor(public $log:ng.ILogService, private $meteor:angular.meteor.IMeteorService
        // 	,private $state:angular.ui.IStateService){
        function QuestionService($log, $meteor) {
            this.$log = $log;
            this.$meteor = $meteor;
            $log.info("QuestionService LOADED");
            this.questions = $meteor.collection(Questions).subscribe('questions');
            //For testing
            // this.questions = new Array<IQuestion>();
            // this.testCreateList();
        }
        /**
         * add a question to the list of questions
         */
        QuestionService.prototype.add = function (newQuestion) {
            //maybe do this on server..
            newQuestion.authorId = Meteor.userId();
            newQuestion.author = Meteor.user().emails[0].address;
            newQuestion = this.checkQ(newQuestion);
            newQuestion.answers = new Array();
            this.questions.push(newQuestion);
        };
        /**
         * Remove the question
         * @parm theq is the question
         */
        QuestionService.prototype.remove = function (theQ) {
            this.questions.splice(this.questions.indexOf(theQ), 1);
            // this.questions.save();
        };
        /**
         * Update the question
         */
        QuestionService.prototype.update = function (theQ) {
            // this.questions.indexOf
            var indx = this.questions.indexOf(theQ, 0);
            this.questions[indx] = theQ;
            // this.$log.info("saved "+JSON.stringify(theQ));
            this.$log.info("saved " + JSON.stringify(this.questions[indx]));
            this.questions.save(theQ);
            return this.questions[indx];
        };
        /**
         * return the item in the list
         */
        QuestionService.prototype.read = function (theQ) {
            var indx = this.questions.indexOf(theQ, 0);
            this.questions[indx] = theQ;
        };
        /**
         * Find the question by Id
         */
        QuestionService.prototype.findByIndex = function (indx) {
            //return this.questions[indx-1];
            return Questions.find(indx).fetch()[0];
            // return null;
            // return this.$meteor.object(Questions,indx);
        };
        QuestionService.prototype.readAll = function () {
            return this.questions;
        };
        /**
         * Check if there is missing values of the JSON that need to be set
         */
        QuestionService.prototype.checkQ = function (item) {
            if (item === undefined) {
                this.$log.info("Not defined Question");
            }
            else {
                if (item.answers === undefined)
                    this.$log.info("Not defined Answere");
                if (item.author === undefined)
                    this.$log.info("Not defined Author");
                if (item.description === undefined)
                    this.$log.info("Not defined description");
                if (item._id === undefined)
                    this.$log.info("Not defined id");
                if (item.solution === undefined)
                    this.$log.info("Not defined solution");
                if (item.solved === undefined) {
                    this.$log.info("Not defined solved");
                    item.solved = false;
                }
                if (item.tags === undefined)
                    this.$log.info("Not defined tags");
                if (item.title === undefined)
                    this.$log.info("Not defined title");
                if (item.votes === undefined) {
                    this.$log.info("Not defined votes");
                    item.votes = 0;
                }
            }
            return item;
        };
        // private asdf:angular.meteor.AngularMeteorCollection<IQuestion>
        // AngularMeteorCollection2
        // static $inject = ['$log','$meteor','$state'];
        QuestionService.$inject = ['$log', '$meteor'];
        return QuestionService;
    })();
    stackClone.QuestionService = QuestionService;
    angular.module('stackClone')
        .service('QuestionService', QuestionService);
})(stackClone || (stackClone = {}));
//# sourceMappingURL=questionService.js.map