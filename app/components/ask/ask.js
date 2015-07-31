///<reference path='../../../typingsCustom/myInterfaces.d.ts' />
var stackClone;
(function (stackClone) {
    /**
     * Handles asking new questions
     */
    var Ask = (function () {
        function Ask($log, questionService) {
            this.$log = $log;
            this.questionService = questionService;
            this.componentName = 'sebAsk';
            $log.info("ASk loaded");
            //TODO fix the tags so it works with meteor and tsd. is missing libary in both
        }
        Ask.prototype.addQuestion = function (newQ) {
            // this.questionService.checkQ(newQ);
            this.questionService.add(newQ);
        };
        /**
         * Resets the ask form
         */
        Ask.prototype.reset = function () {
            this.$log.info("reset");
            this.newQ = {};
        };
        Ask.prototype.testTags = function () {
            this.$log.info("test tag");
            this.$log.info("tags " + JSON.stringify(this.newQ.tags));
        };
        Ask.$inject = ['$log', 'QuestionService'];
        return Ask;
    })();
    function sebAsk() {
        return {
            templateUrl: 'components/ask/ask.ng.html',
            controllerAs: 'ask',
            controller: Ask
        };
    }
    angular.module('stackClone')
        .directive('sebAsk', sebAsk);
})(stackClone || (stackClone = {}));
//# sourceMappingURL=ask.js.map