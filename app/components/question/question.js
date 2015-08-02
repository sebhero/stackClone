///<reference path='../../../typingsCustom/myInterfaces.d.ts' />
var stackClone;
(function (stackClone) {
    var Question = (function () {
        function Question($log, $stateParams, questionService) {
            this.$log = $log;
            this.questionService = questionService;
            this.componentName = 'sebQuestion';
            $log.info("State params: " + $stateParams.qId);
            if ($stateParams.qId != undefined) {
                //load question
                this.theQ = questionService.findByIndex($stateParams.qId);
                this.listQ(this.theQ);
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
                this.theQ.solution = idx;
            }
            else {
                this.theQ.solution = undefined;
            }
            this.$log.info("idx: " + idx + " answere: " + answere.description + " idxans> " + this.theQ.answers[idx].description);
        };
        Question.prototype.addAnswer = function () {
            this.my_markdown;
            this.theQ.answers.push({
                author: "seb",
                description: this.my_markdown,
                votes: 0
            });
        };
        Question.$inject = ['$log', '$stateParams', 'QuestionService'];
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