/**
 * Created by sebadmin on 2015-08-06.
 */
///<reference path='../typingsCustom/myInterfaces.d.ts' />
Meteor.methods({
    /**
    Check if user is a admin on server
    */
    checkUserAdminAccess: function () {
        //get current user which is logged in from server
        var curr = Meteor.user();
        //is user logged in
        if (curr) {
            //Check if has admin role
            if (Roles.userIsInRole(curr, 'admin')) {
                //User Is Admin return true
                console.log("user is admin");
                return Roles.userIsInRole(curr, 'admin');
            }
            else {
                //NOt admin
                console.log("user is NOT admin " + curr.emails[0].address);
                // throw FORBIDDEN to client
                throw new Meteor.Error("FORBIDDEN", "The user must be admin to access page");
            }
        }
        else {
            //if its null no user logged in
            console.log("user is NOT logged in!");
            //Throw AUTH_REQUIRED to client that user is not logged in
            throw new Meteor.Error("AUTH_REQUIRED", "The user must be logged in to access page");
        }
    }
});
//# sourceMappingURL=serverRoles.js.map