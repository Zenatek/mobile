Meteor.publish('allPilots', function(){
    if(Roles.userIsInRole(this.userId, 'operator-user')){
        //return Meteor.users.find({});
        return Meteor.users.find({ "profile.operator_id" : this.userId});
    }
});

Meteor.publish('allOperator', function(){
        return Meteor.users.find({ "roles" : "operator-user"});

});

Meteor.publish('allDrones', function(){
    if(Roles.userIsInRole(this.userId, 'operator-user')){
        return Drones.find({ "owner" : this.userId});
    }
    if(Roles.userIsInRole(this.userId, 'pilot-user')){
        return Drones.find({ "pilotsID" : this.userId});
    }
});

Meteor.publish('allMissions', function(){
    if(Roles.userIsInRole(this.userId, 'operator-user')){
        return Missions.find({ "owner" : this.userId});
    }
    if(Roles.userIsInRole(this.userId, 'pilot-user')){
        return Missions.find({ "pilotsID" : this.userId});
    }
});
