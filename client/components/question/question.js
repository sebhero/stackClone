///<reference path='../../../typingsCustom/myInterfaces.d.ts' />
var stackClone;
(function (stackClone) {
    var Question = (function () {
        // $state:ng.ui.IState,
        function Question($log, $stateParams, $state, $location, $anchorScroll, questionService) {
            this.$log = $log;
            this.$state = $state;
            this.$location = $location;
            this.$anchorScroll = $anchorScroll;
            this.questionService = questionService;
            this.componentName = 'sebQuestion';
            $log.info("State params: " + $stateParams.qId);
            $log.info("goto params: " + $stateParams.gotoSolve);
            $log.info("params: " + JSON.stringify($state.params));
            if ($stateParams.qId != undefined) {
                //load question
                this.theQ = this.questionService.findByIndex($stateParams.qId);
                if (this.theQ != null) {
                    this.listQ(this.theQ);
                }
                if ($stateParams.gotoSolve) {
                    this.$log.info($stateParams.gotoSolve + " its GOTO");
                    var newHash = 'answer_' + this.theQ.solution;
                    if ($location.hash() !== newHash) {
                        // set the $location.hash to `newHash` and
                        // $anchorScroll will automatically scroll to it
                        $location.hash('answer_' + this.theQ.solution);
                    }
                    else {
                        // call $anchorScroll() explicitly,
                        // since $location.hash hasn't changed
                        $anchorScroll();
                    }
                }
            }
        }
        Question.prototype.listQ = function (q) {
            this.$log.info("id: " + q._id);
            this.$log.info("author: " + q.author);
            this.$log.info("authorId: " + q.authorId);
            this.$log.info("title: " + q.title);
            this.$log.info("description: " + q.description);
            this.$log.info("tags: " + JSON.stringify(q.tags));
            this.$log.info("votes: " + q.votes);
            this.$log.info("solved: " + q.solved);
            this.$log.info("solution: " + q.solution);
            this.$log.info("answers: " + JSON.stringify(q.answers));
        };
        Question.prototype.voteUp = function () {
            this.theQ.votes++;
        };
        Question.prototype.voteDown = function () {
            // if(this.theQ.votes >0){
            this.theQ.votes--;
            // }
        };
        Question.prototype.voteAnswereUp = function (answere) {
            answere.votes++;
            // this.theQ.answers[1].votes++;
        };
        Question.prototype.voteAnswereDown = function (answere) {
            answere.votes--;
            // if(this.theQ.votes >0){
            // this.theQ.answers[1].votes--;
            // }
        };
        Question.prototype.solveToggle = function (answere, idx) {
            this.theQ.solved = !this.theQ.solved;
            answere.solution = !answere.solution;
            if (this.theQ.solved) {
                this.theQ.solution = answere._id;
            }
            else {
                this.theQ.solution = undefined;
            }
            this.$log.info("idx: " + idx + " answere: " + answere.description + " idxans> " + this.theQ.answers[idx].description);
        };
        //TODO is not working is not saved to db
        Question.prototype.addAnswer = function () {
            this.my_markdown;
            this.$log.info("adding a answer");
            if (this.theQ.answers == undefined) {
                this.theQ.answers = [];
            }
            this.theQ.answers.push({
                authorId: Meteor.userId(),
                author: Meteor.user().emails[0].address,
                description: this.my_markdown,
                votes: 0,
                id: (this.theQ.answers.length + 1)
            });
            this.questionService.update(this.theQ);
            //TODO this should be auto gen. from DB
        };
        Question.prototype.delete = function () {
            this.questionService.remove(this.theQ);
            this.$state.go('questions');
        };
        Question.prototype.deleteAnswere = function (answere) {
            this.$log.info("delete answere> " + answere.description);
            this.theQ.answers.splice(this.theQ.answers.indexOf(answere), 1);
            this.questionService.update(this.theQ);
        };
        // static $inject = ['$log','QuestionService','$state'];
        Question.$inject = ['$log', '$stateParams', '$state',
            '$location', '$anchorScroll', 'QuestionService'];
        return Question;
    })();
    function sebQuestion() {
        return {
            templateUrl: 'client/components/question/question.ng.html',
            controllerAs: 'question',
            controller: Question
        };
    }
    angular.module('stackClone')
        .directive('sebQuestion', sebQuestion);
})(stackClone || (stackClone = {}));
//# sourceMappingURL=question.js.map