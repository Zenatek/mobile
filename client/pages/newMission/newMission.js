Template.slideMeteo.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allMissions')
    });
});

Template.slideVento.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allMissions')
    });
});

Template.newMission.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allPilots');
        this.subscribe('allMissions')
    });
});

Template.dirVento.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allMissions')
    });
});

Template.pilotsLIST.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allMissions')
    });
});


Template.dirVento.helpers({
    missions : function(){
        missionId = Session.get('missionId')
        return Missions.findOne({_id : missionId})
    },
    editSession : function(){
        return  Session.get('editSession')

    }
});

Template.slideMeteo.helpers({
    missions : function(){
        missionId = Session.get('missionId')
        return Missions.findOne({_id : missionId})
    },
    editSession : function(){
        return  Session.get('editSession')

    }
});

Template.slideVento.helpers({
    missions : function(){
        missionId = Session.get('missionId')
        return Missions.findOne({_id : missionId})
    },
    editSession : function(){
        return  Session.get('editSession')

    }
});

Template.newMission.helpers({
    missions : function(){
        missionId = Session.get('missionId')
        return Missions.findOne({_id : missionId})
    },
    editSession : function(){
        return  Session.get('editSession')

    },
    editPilots : function(){
        return  Session.get('editPilots')

    },
    timerUsed : function(){
        return Session.get("timerUsed");
    },
    timerStar : function(){
        return Session.get("timerStart");
    },
    timerEnd : function(){
        return Session.get("timerEnd");
    }
});

var pilotsList = [];

Template.pilotsLIST.helpers({
    update : function(){
        var z = Session.get("updatePilots");
        Session.set("updatePilots", false);
        return z;
    },
    pilotsList : function(){
            return pilotsList;
    },
    missions : function(){
        missionId = Session.get('missionId')
        return Missions.findOne({_id : missionId})
    },
    editSession : function(){
        return  Session.get('updatePilots', true);

    }
});

Template.slideMeteo.events({
    'ionChange' : function(event,template,value){
        value = template.find('#rangeMeteo').value;
        if(value == 0){return template.find('#weather').innerHTML = "Sereno" }
        if(value == 1){return template.find('#weather').innerHTML = "Poco nuvoloso" }
        if(value == 2){return template.find('#weather').innerHTML = "Nuvoloso" }
        if(value == 3){return template.find('#weather').innerHTML = "Pioggia debole" }
        if(value == 4){return template.find('#weather').innerHTML = "Pioggia" }
        if(value == 5){return template.find('#weather').innerHTML = "Temporale" }
    }
});



Template.slideVento.events({
    'ionChange' : function(event,template,value){
        value = template.find('#rangeVento').value;
        if(value == 0){return template.find('#wind').innerHTML = "Calmo [1 km/h]" }
        if(value == 1){return template.find('#wind').innerHTML = "Bava di vento [5 km/h]" }
        if(value == 2){return template.find('#wind').innerHTML = "Brezza leggera [11 km/h]" }
        if(value == 3){return template.find('#wind').innerHTML = "Brezza [19 km/h]" }
        if(value == 4){return template.find('#wind').innerHTML = "Brezza vivace [28 km/h]" }
        if(value == 5){return template.find('#wind').innerHTML = "Brezza tesa [39 km/h]" }
        if(value == 6){return template.find('#wind').innerHTML = "Vento fresco [49 km/h]" }
        if(value == 7){return template.find('#wind').innerHTML = "Vento forte [61 km/h]" }
    }
});


Template.pilotsLIST.events({
    'click .delete' : function(e,t){
        e.preventDefault();
        console.log(this.profile.lastname)
        console.log(pilotsList)
        pilotsList.splice(pilotsList.indexOf(this),1);
        console.log(pilotsList)
        Session.set("updatePilots", true);


    }
});

Template.dirVento.events({
    'ionChange' : function (event,template){
        if ($(event.target).prop("name") == "n"){
            var n = event.target.checked;
            Session.set("n", n);
            console.log(Session.get("n"));
        }
        if ($(event.target).prop("name") == "ne"){
            var ne = event.target.checked;
            Session.set("ne", ne);
            console.log(Session.get("ne"));
        }
        if ($(event.target).prop("name") == "e"){
            var e = event.target.checked;
            Session.set("e", e);
            console.log(Session.get("e"));
        }
        if ($(event.target).prop("name") == "se"){
            var se = event.target.checked;
            Session.set("se", se);
            console.log(Session.get("se"));
        }
        if ($(event.target).prop("name") == "s"){
            var s = event.target.checked;
            Session.set("s", s);
            console.log(Session.get("s"));
        }
        if ($(event.target).prop("name") == "sw"){
            var sw = event.target.checked;
            Session.set("sw", sw);
            console.log(Session.get("sw"));
        }
        if ($(event.target).prop("name") == "w"){
            var w = event.target.checked;
            Session.set("w", w);
            console.log(Session.get("w"));
        }
        if ($(event.target).prop("name") == "nw"){
            var nw = event.target.checked;
            Session.set("nw", nw);
            console.log(Session.get("nw"));
        }
    }
});

Template.newMission.events({
    'click .back': function(event, template){
        Session.set('editSession',false)
        event.preventDefault();
        Session.set("simulation", false);
        Session.set("certB", false);
        Session.set("certC", false);
        Session.set("v70", false);
        Session.set("v150", false);
        Session.set("vlos", false);
        Session.set("blos", false);
        Session.set("evlos", false);
        pilotsList = []

        //RESET TIMER AFTER BACKBUTTON
        Session.set("resetTimer", true);

        delete Session.keys['editSession']
        delete Session.keys['editPilots']
        delete Session.keys['missionId']
        delete Session.keys['timerUsed']
        delete Session.keys['timerStart']
        delete Session.keys['timerEnd']
        FlowRouter.go('/operator/missionsList');
    },
    'click .insert': function(event, template){
        event.preventDefault();
        Session.set('editSession',false)
        var flightNumberVar = template.find('#flight_number').value;
        var placeVar = template.find('#place').value;
        var flightDateVar = template.find('#flight_date').value;
        var windVar = template.find('#wind').innerHTML;
        var weatherVar = template.find('#weather').innerHTML;
        var takeOffTimeVar = template.find('#take_off_time').value;
        var landingTimeVar = template.find('#landing_time').value;
        //CALCOLO DURATA MISSIONE
        end = moment(landingTimeVar)
        start = moment(takeOffTimeVar)
        timeMission = moment.duration(end.diff(start))
        timeMission= moment.duration(timeMission, "minutes").humanize()
        ///
        var rpasVar = template.find('#rpas').value;
        var battery1Var = template.find('#battery1').value;
        var simulation = Session.get("simulation");
        var v70 = Session.get("v70");
        var v150 = Session.get("v150");
        var vlos = Session.get("vlos");
        var blos = Session.get("blos");
        var evlos = Session.get("evlos");
        var certB = Session.get("certB");
        var certC = Session.get("certC");
        var userID = Meteor.userId();
        var missionId = Session.get('missionId');
        var n = Session.get("n");
        var ne = Session.get("ne");
        var e = Session.get("e");
        var se = Session.get("se");
        var s = Session.get("s");
        var sw = Session.get("sw");
        var w = Session.get("w");
        var nw = Session.get("nw");
                

        var pilotsID = [];
        var pilotsFName = [];
        var pilotsLName = [];
        pilotsList.forEach(element => {
            pilotsID.push(element._id);
            pilotsFName.push(element.profile.firstname);
            pilotsLName.push(element.profile.lastname);
        });
        if(!missionId){
            Missions.insert({createdAt : new Date(),
                owner : userID,
                flightNumber : flightNumberVar,
                place : placeVar,
                flightDate : flightDateVar,
                wind : windVar,
                weather : weatherVar,
                takeOffTime : takeOffTimeVar,
                landingTime : landingTimeVar,
                rpas : rpasVar,
                battery1 : battery1Var,
                pilotsID : pilotsID,
                pilotsFName : pilotsFName,
                pilotsLName : pilotsLName,
                simulation : simulation,
                v70 : v70,
                v150 : v150,
                vlos : vlos,
                blos : blos,
                evlos : evlos,
                certB : certB,
                certC : certC,
                n : n,
                ne : ne,
                e : e,
                se : se,
                s : s,
                sw : sw,
                w : w,
                nw : nw,
                completed : false
            });
        }else {
            Missions.update({_id : missionId},
                {$set:
                    {
                    "flightNumber" : flightNumberVar,
                    "place" : placeVar,
                    "flightDate" : flightDateVar,
                    "wind" : windVar,
                    "n" : n,
                    "ne" : ne,
                    "e" : e,
                    "se" : se,
                    "s" : s,
                    "sw" : sw,
                    "w" : w,
                    "nw" : nw,
                    "weather" : weatherVar,
                    "takeOffTime" : takeOffTimeVar,
                    "landingTime" : landingTimeVar,
                    "timeMission" : timeMission,
                    "rpas" : rpasVar,
                    "battery1" : battery1Var,
                    "pilotsID" : pilotsID,
                    "pilotsFName" : pilotsFName,
                    "pilotsLName" : pilotsLName,
                    "simulation" : simulation,
                    "v70" : v70,
                    "v150" : v150,
                    "vlos" : vlos,
                    "blos" : blos,
                    "evlos" : evlos,
                    "certB" : certB,
                    "certC" : certC,
                    }
                }
                    
            ); 
        }
        pilotsList = []
        delete Session.keys['editSession']
        delete Session.keys['editPilots']
        delete Session.keys['missionId']
        delete Session.keys['certB']
        delete Session.keys['certC']
        delete Session.keys['v70']
        delete Session.keys['v150']
        delete Session.keys['vlos']
        delete Session.keys['blos']
        delete Session.keys['evlos']
        FlowRouter.go('/operator/missionsList');
    },
    'click .update': function(event, template){
        event.preventDefault();
        Session.set('editSession',false)
        var windVar = template.find('#wind').innerHTML;
        var weatherVar = template.find('#weather').innerHTML;
        var takeOffTimeVar = template.find('#take_off_time').value;
        var landingTimeVar = template.find('#landing_time').value;
        //CALCOLO DURATA MISSIONE
        end = moment(landingTimeVar)
        start = moment(takeOffTimeVar)
        timeMission = moment.duration(end.diff(start))
        timeMission= moment.duration(timeMission, "minutes").humanize()
        /* var timeMission = template.find(".countdown").innerHTML */
        var battery1Var = template.find('#battery1').value;
        var simulation = Session.get("simulation");
        var v70 = Session.get("v70");
        var v150 = Session.get("v150");
        var vlos = Session.get("vlos");
        var blos = Session.get("blos");
        var evlos = Session.get("evlos");
        var certB = Session.get("certB");
        var certC = Session.get("certC");
        var missionId = Session.get('missionId');
        var n = Session.get("n");
        var ne = Session.get("ne");
        var e = Session.get("e");
        var se = Session.get("se");
        var s = Session.get("s");
        var sw = Session.get("sw");
        var w = Session.get("w");
        var nw = Session.get("nw");
        var hoursFly = Session.get("hoursFly");
        var minsFly = Session.get("minsFly");
                

        var pilotsID = [];
        var pilotsFName = [];
        var pilotsLName = [];
        pilotsList.forEach(element => {
            pilotsID.push(element._id);
            pilotsFName.push(element.profile.firstname);
            pilotsLName.push(element.profile.lastname);
            console.log(pilotsFName);
        });
        //UPDATE TEMPO DI VOLO TOTALE PILOTA
        Meteor.call("updateHoursFly", Meteor.userId(), hoursFly, minsFly);
        ///////////////////////////////////////////////////////////////////
        Missions.update({_id : missionId},
            {$set:
                {
                "wind" : windVar,
                "n" : n,
                "ne" : ne,
                "e" : e,
                "se" : se,
                "s" : s,
                "sw" : sw,
                "w" : w,
                "nw" : nw,
                "weather" : weatherVar,
                "takeOffTime" : takeOffTimeVar,
                "landingTime" : landingTimeVar,
                "timeMission" : timeMission,
                "battery1" : battery1Var,
                "simulation" : simulation,
                "v70" : v70,
                "v150" : v150,
                "vlos" : vlos,
                "blos" : blos,
                "evlos" : evlos,
                "certB" : certB,
                "certC" : certC,
                }
            }
                
        );
        
        //RESET TIMER AFTER UPDATE
        Session.set("resetTimer", true);

        pilotsList = []
        delete Session.keys['editSession']
        delete Session.keys['editPilots']
        delete Session.keys['missionId']
        delete Session.keys['certB']
        delete Session.keys['certC']
        delete Session.keys['v70']
        delete Session.keys['v150']
        delete Session.keys['vlos']
        delete Session.keys['blos']
        delete Session.keys['evlos']
        delete Session.keys['timerUsed']
        FlowRouter.go('/operator/missionsList');
    },
    'ionChange': function(event, template) {
        if ($(event.target).prop("name") == "simulation"){
            var simulation = event.target.checked;
            Session.set("simulation", simulation);
            console.log(Session.get("simulation"));
        }
        if ($(event.target).prop("name") == "v70"){
            var v70 = event.target.checked;
            Session.set("v70", v70);
            console.log(Session.get("v70"));
        }
        if ($(event.target).prop("name") == "v150"){
            var v150 = event.target.checked;
            Session.set("v150", v150);
            console.log(Session.get("v150"));
        }
        if ($(event.target).prop("name") == "vlos"){
            var vlos = event.target.checked;
            Session.set("vlos", vlos);
            console.log(Session.get("vlos"));
        }
        if ($(event.target).prop("name") == "blos"){
            var blos = event.target.checked;
            Session.set("blos", blos);
            console.log(Session.get("blos"));
        }
        if ($(event.target).prop("name") == "evlos"){
            var evlos = event.target.checked;
            Session.set("evlos", evlos);
            console.log(Session.get("evlos"));
        }
        if ($(event.target).prop("name") == "certB"){
            var certB = event.target.checked;
            Session.set("certB", certB);
            console.log(Session.get("certB"));
        }
        if ($(event.target).prop("name") == "certC"){
            var certC = event.target.checked;
            Session.set("certC", certC);
            console.log(Session.get("certC"));
        }
    }
});

Template.autoCompletePilots.helpers({
  settings: function() {
    return {
      position: "bottom",
      limit: 20,
      rules: [
        {
          //token: ' ',
          collection: Meteor.users,
          field: 'profile.lastname',
          matchAll: true,
          template: Template.selectPilot
        }
      ]
    };
  },
  pilot: function() {
    return Meteor.users.find();
  }
});

Template.selectPilot.helpers({
  pilotEmail : function(){
      return this.emails[0].address;
  }
});

Template.autoCompletePilots.events({
    "autocompleteselect input": function(event, template, doc) {
        //Meteor.call('addOperator', doc);
        console.log(doc._id);
        var a = -1 ;
        pilotsList.forEach(element => {
            if(element._id==doc._id)
                a=1;
        });        
        if(a == -1){
            pilotsList.push(doc);
        };
        console.log(a)
        console.log(pilotsList);
        Session.set("updatePilots", true);
        Session.set('editPilots',true)
}
});

