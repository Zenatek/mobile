Template.Home.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allOperator');
    });
});

Template.selectDrone.onCreated(function () {
  this.autorun(()=> {
      this.subscribe('allDrones');
      this.subscribe('allMissions');
  });
});

Template.selectDrone.helpers({
  drone : function(){
      return Drones.find();
  },
  missions : function(){
    missionId = Session.get('missionId')
    return Missions.findOne({_id : missionId})
  },
  editSession : function(){
      return  Session.get('updatePilots', true);

  }
});

Template.autoCompleteOperators.helpers({
  settings: function() {
    return {
      position: "top",
      limit: 20,
      rules: [
        {
          // token: '',
          collection: Meteor.users,
          field: 'profile.lastname',
          matchAll: true,
          template: Template.selectOperator
        }
      ]
    };
  },
  operator: function() {
    return Meteor.users.find();
  }
});

Template.selectOperator.helpers({
  operatorEmail : function(){
      return this.emails[0].address;
  }
});

Template.autoCompleteOperators.events({
    "autocompleteselect input": function(event, template, doc) {
        Meteor.call('addOperator', doc);
}
});


Template.atSelectInput.events({
    "change select": function(event, template) {
      var Value =this.getValue(template);
        console.log(Value);
        if(Value == "operator"){
            Session.set('CampoVisibile', false)
            console.log("remove")
        }else{
          Session.set('CampoVisibile', true)
        }
      }
});

var timestamp = new Date(0);
var interval = 1;
var timerID; 

Template.timer.helpers({
  reset : function(){
    if(Session.get("resetTimer")){
      timestamp = new Date(0);
    }
    return
  }
});

Template.timer.events({
  'click .start': function(event, template){
    interval = 1;
    timerID = setInterval(function() {
      timestamp = new Date(timestamp.getTime() + interval*1000);
      $('.countdown').text(timestamp.getHours()-1+'h:'+timestamp.getMinutes()+'m:'+timestamp.getSeconds()+'s');
    }, 1000);
  },
  'click .stop': function(event, template){
    clearInterval(timerID);
    Session.set("timer",timestamp);
    var endTimer = new Date();
    var startTimer = new Date(endTimer.getTime()-timestamp.getTime());
    Session.set("timerEnd", endTimer);
    Session.set("timerStart", startTimer);
    Session.set("timerUsed",true);
    //SESSIONI PER CALCOLO ORE TOTALI PILOTA
    Session.set("hoursFly",timestamp.getHours()-1);
    Session.set("minsFly", timestamp.getMinutes());
  },
  'click .reset': function(event, template){
    timestamp = new Date(0);
    Session.set("timerUsed",false);
    $('.countdown').text(timestamp.getHours()-1+'h:'+timestamp.getMinutes()+'m:'+timestamp.getSeconds()+'s');
  }
})

Template.autoCompleteOperators.helpers({
  CampoVisibile(){
      return Session.get('CampoVisibile')
  }
});

function deleteSessions(){
  delete Session.keys['editSession']
  delete Session.keys['editPilots']
  delete Session.keys['droneId']
  delete Session.keys['missionId']
  delete Session.keys['timer']
  delete Session.keys['timerEnd']
  delete Session.keys['timerStart']
  delete Session.keys['timerUsed']
  delete Session.keys['hoursFly']
  delete Session.keys['minsFly']
  delete Session.keys['resetTimer']
  delete Session.keys['updatePilots']
  delete Session.keys['updatePilots']
  delete Session.keys['pilotId']
  delete Session.keys['operator_id']
  delete Session.keys['nav-toggle']
  delete Session.keys['n']
  delete Session.keys['ne']
  delete Session.keys['e']
  delete Session.keys['se']
  delete Session.keys['s']
  delete Session.keys['sw']
  delete Session.keys['w']
  delete Session.keys['nw']
  delete Session.keys['istr']
  delete Session.keys['exam']
  delete Session.keys['insurance']
  delete Session.keys['certB']
  delete Session.keys['certH']
  delete Session.keys['certL']
  delete Session.keys['certVL']
  delete Session.keys['certC']
  delete Session.keys['catMC']
  delete Session.keys['catAP']
  delete Session.keys['catH']
  delete Session.keys['catAS']
  delete Session.keys['s1']
  delete Session.keys['s2']
  delete Session.keys['s3']
  delete Session.keys['s4']
  delete Session.keys['s5']
  delete Session.keys['s6']
  delete Session.keys['s7']
  delete Session.keys['evlos']
  delete Session.keys['vlos']
  delete Session.keys['blos']
  delete Session.keys['v70']
  delete Session.keys['v150']
  delete Session.keys['simulation']
}