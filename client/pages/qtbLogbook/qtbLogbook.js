Template.qtbLogbook.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allDrones');
        this.subscribe('allMissions');
    });
});

Template.printLOG.onCreated(function () {
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
    },
    flightHours : function (){
        drone = Drones.findOne({rpas : thisMission.rpas})
        timeFly = moment.duration(drone.flightHours, "minutes").humanize()
        return timeFly;
    }
});

Template.printLOG.helpers({
    user : function (){
        thisUser = Meteor.users.findOne({_id : Meteor.userId()})
        return thisUser;
    },
    timeFly : function (){
        thisUser = Meteor.users.findOne({_id : Meteor.userId()})
        timeFly = moment.duration(thisUser.profile.timeFly, "minutes").humanize()
        return timeFly;
    },
    mission : function(){
        missionId = Session.get('missionId')
        thisMission = Missions.findOne({_id : missionId})
        return Missions.findOne({_id : missionId})
    },
    timeMission : function(){
        missionId = Session.get('missionId')
        thisMission = Missions.findOne({_id : missionId})
        return moment.duration(thisMission.timeMission, "minutes").humanize()
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
        FlowRouter.go('/dashboard');
    },
    'click .printQtb' : function(){
        FlowRouter.go('/newMission/qtbLogbook/printQTB');
        if (Meteor.isCordova){
            alert("Mi dispiace, puoi stampare solo da computer")
            /* cordova.InAppBrowser.open('/newMission/qtbLogbook/printQTB', '_system', 'location=yes'); */
        }else{
            window.print()
        }
        FlowRouter.go('/newMission/qtbLogbook/');
    },
    'click .printLog' : function(){
        FlowRouter.go('/newMission/qtbLogbook/printLOG');
        if (Meteor.isCordova){
            alert("Mi dispiace, puoi stampare solo da computer")
            /* cordova.InAppBrowser.open('/newMission/qtbLogbook/printLOG', '_system', 'location=yes'); */
        }else{
            window.print()
        }
        FlowRouter.go('/newMission/qtbLogbook/');
    }
});