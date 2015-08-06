/**
 * Created by sebadmin on 2015-08-06.
 */
///<reference path='../../typingsCustom/myInterfaces.d.ts' />

declare var Roles;



var id = Accounts.createUser({
	email: "seb@1.com",
	password: "test",
	profile: { name: 'seb' }
});

Roles.addUsersToRoles(id, 'admin');