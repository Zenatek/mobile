Template.missionsList.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allMissions');
        this.subscribe('allDrones');
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
        //UPDATE TEMPO DI VOLO TOTALE PILOTA
        pilot =  Meteor.users.findOne({_id : Meteor.userId()})
        oldTime = moment.duration(pilot.profile.timeFly);
        newTime = moment.duration(this.timeMission)
        timeFly = oldTime.add(newTime)
        
        Meteor.call("updateHoursFly", Meteor.userId(), timeFly);
        ///////////////////////////////////////////////////////////////////
        //UPDATE TEMPO DI VOLO TOTALE DRONE
        drone =  Drones.findOne({rpas : this.rpas})
        oldTime = moment.duration(drone.flightHours);
        timeFly = oldTime.add(newTime)
        Drones.update({_id : drone._id},
            {$set:
                {
                "flightHours" : timeFly
                }
            }   
        );
        ///////////////////////////////////////////////////////////////////
    },
});