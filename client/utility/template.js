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
      position: "bottom",
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
