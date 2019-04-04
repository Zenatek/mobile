Template.qtbLogbook.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allDrones');
        this.subscribe('allMissions');
    });
});

var thisMission;

Template.qtbLogbook.helpers({
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

Template.qtbLogbook.events({
    'click .back': function(event, template){
            event.preventDefault();
            FlowRouter.go('/dashboard');
    },
    'click .print' : function(){
        FlowRouter.go('/newMission/qtbLogbook/printQTB');
        if (Meteor.isCordova){
            alert("Mi dispiace, puoi stampare solo da computer")
            /* cordova.InAppBrowser.open('/newMission/qtbLogbook/printQTB', '_system', 'location=yes'); */
        }else{
            window.print()
        }
        FlowRouter.go('/newMission/qtbLogbook/');
    }
});