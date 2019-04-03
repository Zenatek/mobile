Template.printQTB.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allDrones');
        this.subscribe('allMissions');
    });
});

var thisMission; 

Template.printQTB.helpers({
    mission : function(){
      missionId = Session.get('missionId')
      thisMission = Missions.findOne({_id : missionId})
      return Missions.findOne({_id : missionId})
    },
    drone : function(){
        return Drones.findOne({rpas : thisMission.rpas});
    },
    formatTakeOff : function(){
        return moment(thisMission.takeOffTime).format('hh:mm a');
    },
    formatLanding : function(){
        return moment(thisMission.landingTime).format('hh:mm a');
    }
});