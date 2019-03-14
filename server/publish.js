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
});

Meteor.publish('allMissions', function(){
    if(Roles.userIsInRole(this.userId, 'operator-user')){
        return Missions.find({ "owner" : this.userId});
    }
    if(Roles.userIsInRole(this.userId, 'pilot-user')){
        // da sostituire la query appena modifico il salvataggio della missione
        return Missions.find({ "owner" : this.userId});
    }
});
