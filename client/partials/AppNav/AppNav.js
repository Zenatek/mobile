Template.AppNav.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allMissions');
    });
});

Template.AppNav.helpers({
    missionsCount : function () {
        return Missions.find({completed : false}).count();
    }
});

Template.AppNav.events({
    'click .profile': () => {
        Session.set('pilotId', Meteor.userId());
        FlowRouter.go('/profile');
    },
    'click .pilots' : () => {
        FlowRouter.go("/operator/pilots");
    },
    'click .missions' : () => {
        FlowRouter.go('/operator/missionsList');
    },
    'click .dashboard' : () => {
        FlowRouter.go("/dashboard");
    },
    'click .drones' : () => {
        delete Session.keys['droneId']
        FlowRouter.go('/operator/dronesList');
    }
});



