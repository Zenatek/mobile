Template.missionsList.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allMissions');
    });
});

Template.missionsList.helpers({
    mission : function(){
        return Missions.find();
    }
});

Template.missionsList.events({
    'click .newMission': function(event, template){
            event.preventDefault();
            FlowRouter.go('/operator/newMission');
    },
    'click .qtbButton': function() {
        Session.set('missionId', this._id);
        FlowRouter.go('/newMission/qtbLogbook');
    },
    'click .editButton': function() {
        Session.set('missionId', this._id);
        Session.set('editSession', true); 
        Session.set('editPilots',false)
        FlowRouter.go('/operator/newMission');
    },
    'click .completed': function() {
        Missions.update({_id : this._id},
            {$set:
                {
                "completed" : true
                }
            }   
        );
        pilot =  Meteor.users.findOne({_id : Meteor.userId()})
        oldTime = moment.duration(pilot.profile.timeFly);
        newTime = moment.duration(this.timeMission)
        timeFly = oldTime.add(newTime)
        //UPDATE TEMPO DI VOLO TOTALE PILOTA
        Meteor.call("updateHoursFly", Meteor.userId(), timeFly);
        ///////////////////////////////////////////////////////////////////
        //UPDATE TEMPO DI VOLO TOTALE DRONE
        //Meteor.call("updateHoursFly", Meteor.userId(), hoursFly, minsFly);
        ///////////////////////////////////////////////////////////////////
    },
});