///<reference path='../typingsCustom/myInterfaces.d.ts' />


namespace stackClone{
	
	declare var Questions:Mongo.Collection<IQuestion>;

	Questions = new Mongo.Collection<IQuestion>('questions');
	
	Questions.allow({
		insert: function (userId, question:IQuestion) {
			return userId && question.author === userId;
		},
		update: function (userId, question:IQuestion, fields, modifier) {
			if (userId !== question.author)
				return false;
	
			return true;
		},
		remove: function (userId, question:IQuestion) {
			if (userId !== question.author)
				return false;
	
			return true;
		}
	});

}