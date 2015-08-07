///<reference path='../typingsCustom/myInterfaces.d.ts' />


namespace stackClone{
	
	declare var Answers:Mongo.Collection<IAnswer>;

	Answers = new Mongo.Collection<IAnswer>('answeres');
	
	Answers.allow({
		insert: function (userId, answer:IAnswer) {
			return userId && answer.author === userId;
		},
		update: function (userId, answer:IAnswer, fields, modifier) {
			if (userId !== answer.author)
				return false;
	
			return true;
		},
		remove: function (userId, answer:IAnswer) {
			if (userId !== answer.author)
				return false;
	
			return true;
		}
	});

}