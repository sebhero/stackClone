/**
 * Created by sebadmin on 2015-08-06.
 */
///<reference path='../typingsCustom/myInterfaces.d.ts' />

declare var Roles;

Meteor.methods({
	checkIfAdmin: ()=>{

		var loggedInUser = Meteor.user();
		if(loggedInUser != null){
		if (Roles.userIsInRole(loggedInUser , 'admin')) {
			return true;

		} else {

			// user not authorized. do not publish secrets
			throw new Meteor.Error('403', "Not authorized to view");

		}
		}
		else{
			throw new Meteor.Error('401', 'User is not logged in');
		}
	}

});