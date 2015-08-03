///<reference path='../../../typingsCustom/myInterfaces.d.ts' />
var stackClone;
(function (stackClone) {
    var Question = (function () {
        function Question($log, $stateParams, $state, questionService, $location, $anchorScroll) {
            this.$log = $log;
            this.questionService = questionService;
            this.$location = $location;
            this.$anchorScroll = $anchorScroll;
            this.componentName = 'sebQuestion';
            $log.info("State params: " + $stateParams.qId);
            $log.info("goto params: " + $stateParams.gotoSolve);
            $log.info("params: " + JSON.stringify($state.params));
            if ($stateParams.qId != undefined) {
                //load question
                this.theQ = questionService.findByIndex($stateParams.qId);
                // this.listQ(this.theQ);
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
            this.$log.info("id: " + q.id);
            this.$log.info("author: " + q.author);
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
                this.theQ.solution = answere.id;
            }
            else {
                this.theQ.solution = undefined;
            }
            this.$log.info("idx: " + idx + " answere: " + answere.description + " idxans> " + this.theQ.answers[idx].description);
        };
        Question.prototype.addAnswer = function () {
            this.my_markdown;
            var answerId = this.theQ.answers.push({
                author: "seb",
                description: this.my_markdown,
                votes: 0
            });
            //TODO this should be auto gen. from DB
            this.theQ.answers[answerId].id = answerId;
        };
        Question.$inject = ['$log', '$stateParams', '$state',
            'QuestionService', '$location', '$anchorScroll'];
        return Question;
    })();
    function sebQuestion() {
        return {
            templateUrl: 'components/question/question.ng.html',
            controllerAs: 'question',
            controller: Question
        };
    }
    angular.module('stackClone')
        .directive('sebQuestion', sebQuestion);
})(stackClone || (stackClone = {}));
//# sourceMappingURL=question.js.map