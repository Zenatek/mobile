Template.Dashboard.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allMissions');
    });
});

Template.Dashboard.helpers({
    mission : function(){
        return Missions.find();
    }
});


Template.Dashboard.events({
    'click .editButton': function() {
        Session.set('missionId', this._id);
        Session.set('editSession', true); 
        Session.set('editPilots',false)
        FlowRouter.go('/operator/newMission');
    },
    'click .qtbButton': function() {
        Session.set('missionId', this._id);
        FlowRouter.go('/newMission/qtbLogbook');
    }
});

