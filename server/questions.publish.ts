///<reference path='../typingsCustom/myInterfaces.d.ts' />


'use strict';
declare var Questions:Mongo.Collection<IQuestion>;

Meteor.publish('questions', function(options) {
  return Questions.find();
  // return Questions.find({
  //  $or:[
  //     {$and:[
  //       {"public": true},
  //       {"public": {$exists: true}}
  //     ]},
  //     {$and:[
  //       <IQuestion>{author: this.userId},
  //       {author: {$exists: true}}
  //     ]}
  //   ]});
});