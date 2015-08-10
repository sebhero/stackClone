///<reference path='../typingsCustom/myInterfaces.d.ts' />
var stackClone;
(function (stackClone) {
    Questions = new Mongo.Collection('questions');
    Questions.allow({
        insert: function (userId, question) {
            return userId && question.authorId === userId;
        },
        update: function (userId, question, fields, modifier) {
            if (userId !== question.authorId)
                return false;
            return true;
        },
        remove: function (userId, question) {
            if (userId !== question.authorId)
                return false;
            return true;
        }
    });
})(stackClone || (stackClone = {}));
//# sourceMappingURL=question.js.map