Template.qtbLogbook.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allDrones');
        this.subscribe('allMissions');
    });
});

var apr; 

Template.qtbLogbook.helpers({
    mission : function(){
      missionId = Session.get('missionId')
      apr = Missions.findOne({_id : missionId})
      return Missions.findOne({_id : missionId})
    },
    drone : function(e,template){
        return Drones.findOne({rpas : apr.rpas});
    }
});

Template.qtbLogbook.events({
    'click .back': function(event, template){
            event.preventDefault();
            FlowRouter.go('/dashboard');
    }
});