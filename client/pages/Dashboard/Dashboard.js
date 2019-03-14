Template.Dashboard.events({
    'click .dronesList': ()=> {
        event.preventDefault();
        delete Session.keys['droneId']
        FlowRouter.go('/operator/dronesList');
    },
    'click .newMission': ()=> {
        event.preventDefault();
        FlowRouter.go('/operator/newMission');
    },
    'click .missionsList': ()=> {
        event.preventDefault();
        FlowRouter.go('/operator/missionsList');
    }
});
