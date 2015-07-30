/**
 * Created by seb on 2015-07-27.
 */
/// <reference path="../../typingsCustom/myInterfaces.d.ts" />
var stackClone;
(function (stackClone) {
    // declare var Todos: Mongo.Collection<ITodo>;
    var QuestionService = (function () {
        // constructor(public $log:ng.ILogService, private $meteor:angular.meteor.IMeteorService){
        function QuestionService($log) {
            this.$log = $log;
            $log.info("QuestionService LOADED");
            // this.todos = $meteor.collection(Todos).subscribe('todos');
            this.questions = new Array();
        }
        /**
         * add a question to the list of questions
         */
        QuestionService.prototype.add = function (newQuestion) {
            // newQuestion =this.checkQ(newQuestion);
            this.questions.push(newQuestion);
        };
        /**
         * Remove the question
         * @parm theq is the question
         */
        QuestionService.prototype.remove = function (theQ) {
            this.questions.splice(this.questions.indexOf(theQ), 1);
        };
        /**
         * Update the question
         */
        QuestionService.prototype.update = function (theQ) {
            // this.questions.indexOf
            var indx = this.questions.indexOf(theQ, 0);
            return this.questions[indx] = theQ;
        };
        /**
         * return the item in the list
         */
        QuestionService.prototype.read = function (theQ) {
            var indx = this.questions.indexOf(theQ, 0);
            this.questions[indx] = theQ;
        };
        QuestionService.prototype.findByIndex = function (indx) {
            return this.questions[indx];
        };
        QuestionService.prototype.readAll = function () {
            return this.questions;
        };
        /**
         * Check if there is missing values of the JSON that need to be set
         */
        QuestionService.prototype.checkQ = function (item) {
            if (item.answears === undefined)
                this.$log.info("Not defined Answere");
            if (item.author === undefined)
                this.$log.info("Not defined Author");
            ;
            if (item.description === undefined)
                this.$log.info("Not defined description");
            if (item.id === undefined)
                this.$log.info("Not defined id");
            if (item.solution === undefined)
                this.$log.info("Not defined solution");
            if (item.solved === undefined)
                this.$log.info("Not defined solved");
            item.solved = false;
            if (item.tags === undefined)
                this.$log.info("Not defined tags");
            if (item.title === undefined)
                this.$log.info("Not defined title");
            if (item.votes === undefined)
                this.$log.info("Not defined votes");
            item.votes = 0;
            return item;
        };
        QuestionService.prototype.testCreateList = function () {
            // <IQuestion>{}
            this.add({
                title: "Problems with printer",
                description: "cant start printer",
                author: "seb"
            });
            this.add({
                title: "Problems with printer 2",
                description: "cant start printer",
                author: "seb"
            });
            this.add({
                title: "Problems with printer 3",
                description: "cant start printer",
                author: "seb"
            });
        };
        QuestionService.prototype.testUpdateDeleteRead = function () {
            var num2 = this.findByIndex(2);
            this.$log.info("num2 is " + num2.title);
            num2.title = "new title";
            var temp2 = this.update(num2);
            this.$log.info("return of update: " + temp2.title);
            this.remove(num2);
            this.$log.info("removed num2");
        };
        // static $inject = ['$log','$meteor','$mdSidenav'];
        QuestionService.$inject = ['$log'];
        return QuestionService;
    })();
    stackClone.QuestionService = QuestionService;
    angular.module('stackClone')
        .service('QuestionService', QuestionService);
})(stackClone || (stackClone = {}));
//# sourceMappingURL=questionService.js.map