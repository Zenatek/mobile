Template.AppNav.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allMissions');
    });
});

Template.AppNav.helpers({
    missionsCount : function () {
        return Missions.find().count();
    }
});

Template.AppNav.events({
    'click .logout': () => {
        Session.set('operator_id', '');
        AccountsTemplates.logout();
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



