///<reference path='../typingsCustom/myInterfaces.d.ts' />
var stackClone;
(function (stackClone) {
    Answers = new Mongo.Collection('answeres');
    Answers.allow({
        insert: function (userId, answer) {
            return userId && answer.author === userId;
        },
        update: function (userId, answer, fields, modifier) {
            if (userId !== answer.author)
                return false;
            return true;
        },
        remove: function (userId, answer) {
            if (userId !== answer.author)
                return false;
            return true;
        }
    });
})(stackClone || (stackClone = {}));
//# sourceMappingURL=answer.js.map