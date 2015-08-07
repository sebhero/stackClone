/**
 * Created by sebadmin on 2015-08-06.
 */
///<reference path='../../typingsCustom/myInterfaces.d.ts' />

declare var Roles;



Meteor.startup(function () {


	//Check if admin user exists
	if(Meteor.users.findOne({"emails.address": "seb@1.com"})){

		//Save away user
		var user = Meteor.users.findOne({"emails.address": "seb@1.com"});
		//do nottin
		console.log("admin user exists "+ user.emails[0].address);

		//Check if user has admin role
		if(Roles.userIsInRole(user, 'admin') == false){
			console.log("adding role admin");
			Roles.addUsersToRoles(user, 'admin');
		}
		//printe roles
		console.log(Roles.getRolesForUser(user));

	}
	else{
		console.log("Create user");
		//Create User
		Accounts.createUser({
							username: 'seb',
							email: 'seb@1.com',
							password: 'test',
							profile: {}
					});
	}

	//show users
	Meteor.users.find().forEach(function(usr)
	{
		console.log(usr.emails);
	});

});