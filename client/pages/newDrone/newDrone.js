var pilotsList = [];

Template.newDrone.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allDrones');
        this.subscribe('allPilots');
    });
});

Template.pilotsLIST.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allDrones')
    });
});

Template.pilotsLIST.helpers({
    update : function(){
        var z = Session.get("updatePilots");
        Session.set("updatePilots", false);
        return z;
    },
    pilotsList : function(){
            return pilotsList;
    },
    drones : function(){
        droneId = Session.get('droneId')
        return Drones.findOne({_id : droneId})
    },
    editSession : function(){
        return  Session.get('updatePilots', true);

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

Template.newDrone.helpers({
    drones : function(){
        droneId = Session.get('droneId')
        return Drones.findOne({_id : droneId})
    },
    editSession : function(){
        return  Session.get('editSession')

    },
    editPilots : function(){
        return  Session.get('editPilots')
    }
});

Template.newDrone.events({
    'click .insert': function(event, template){
            Session.set('editSession',false)
            event.preventDefault();
            var model = template.find('#model').value;
            var rpas = template.find('#rpas').value;
            var radiocommandVar = template.find('#radiocommand').value;
            var battery1 = template.find('#battery1').value;
            var weightVar = template.find('#weight').value;
            var flightHoursVar = template.find('#flight_hours').value;
            var deadlineInsuranceVar = template.find('#deadline_insurance').value;
            var insuranceVar = Session.get("insurance");
            var certB = Session.get("certB");
            var certC = Session.get("certC");
            var certH = Session.get("certH");
            var certL = Session.get("certL");
            var certVL = Session.get("certVL");
            var catMC = Session.get("catMC");
            var catAP = Session.get("catAP");
            var catH = Session.get("catH");
            var catAS = Session.get("catAS");
            var s1 = Session.get("s1");
            var s2 = Session.get("s2");
            var s3 = Session.get("s3");
            var s4 = Session.get("s4");
            var s5 = Session.get("s5");
            var s6 = Session.get("s6");
            var s7 = Session.get("s7");            
            var userID = Meteor.userId();
            var droneId = Session.get('droneId');

            var pilotsID = [];
            var pilotsFName = [];
            var pilotsLName = [];
            pilotsList.forEach(element => {
                pilotsID.push(element._id);
                pilotsFName.push(element.profile.firstname);
                pilotsLName.push(element.profile.lastname);
                console.log(pilotsFName);
            });
            if(!droneId){
                Drones.insert({createdAt : new Date(),
                    owner : userID,
                    model:  model,
                    rpas : rpas,
                    radiocommand : radiocommandVar,
                    idBattery1 : battery1,               
                    weight : weightVar,
                    flightHours : flightHoursVar,
                    insurance : insuranceVar,
                    deadlineInsurance : deadlineInsuranceVar,
                    certB : certB,
                    certC : certC,
                    certH : certH,
                    certL : certL,
                    certVL : certVL,
                    catMC : catMC,
                    catAP : catAP,
                    catH : catH,
                    catAS : catAS,
                    s1 : s1,
                    s2 : s2,
                    s3 : s3,
                    s4 : s4,
                    s5 : s5,
                    s6 : s6,
                    s7 : s7,
                    pilotsID : pilotsID,
                    pilotsFName : pilotsFName,
                    pilotsLName : pilotsLName
                });
            }else{
                Drones.update({_id:droneId},
                    {$set:
                        {"model":  model,
                        "rpas":  rpas,
                        "radiocommand":  radiocommandVar,
                        "idBattery1": battery1,
                        "weight": weightVar,
                        "flightHours" : flightHoursVar,
                        "insurance" : insuranceVar,
                        "deadlineInsurance" : deadlineInsuranceVar,
                        "s1":s1,
                        "s2":s2,
                        "s3":s3,
                        "s4":s4,
                        "s5":s5,
                        "s6":s6,
                        "s7":s7,
                        "certB": certB,
                        "certC": certC,
                        "certH": certH,
                        "certL": certL,
                        "certVL": certVL,
                        "catMC" : catMC,
                        "catAP" : catAP,
                        "catH" : catH,
                        "catAS" : catAS,
                        "pilotsID" : pilotsID,
                        "pilotsFName" : pilotsFName,
                        "pilotsLName" : pilotsLName
                    }}
                        
                );
            }
            delete Session.keys['editSession']
            delete Session.keys['editPilots']
            delete Session.keys['droneId']
            delete Session.keys['certB']
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
            pilotsList = []
            FlowRouter.go('/operator/dronesList');
            Session.set('showNewDrone', false);
    },
    'ionChange': function(event, template) {
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
        if ($(event.target).prop("name") == "certH"){
            var certH = event.target.checked;
            Session.set("certH", certH);
            console.log(Session.get("certH"));
        }
        if ($(event.target).prop("name") == "certL"){
            var certL = event.target.checked;
            Session.set("certL", certL);
            console.log(Session.get("certL"));
        }
        if ($(event.target).prop("name") == "certVL"){
            var certVL = event.target.checked;
            Session.set("certVL", certVL);
            console.log(Session.get("certVL"));
        }
        if ($(event.target).prop("name") == "catMC"){
            var catMC = event.target.checked;
            Session.set("catMC", catMC);
            console.log(Session.get("catMC"));
        }
        if ($(event.target).prop("name") == "catAP"){
            var catAP = event.target.checked;
            Session.set("catAP", catAP);
            console.log(Session.get("catAP"));
        }
        if ($(event.target).prop("name") == "catH"){
            var catH = event.target.checked;
            Session.set("catH", catH);
            console.log(Session.get("catH"));
        }
        if ($(event.target).prop("name") == "catAS"){
            var catAS = event.target.checked;
            Session.set("catAS", catAS);
            console.log(Session.get("catAS"));
        }
        if ($(event.target).prop("name") == "insurance"){
            var insurance = event.target.checked;
            Session.set("insurance", insurance);
            console.log(Session.get("insurance"));
        }
        if ($(event.target).prop("name") == "s1"){
            var s1 = event.target.checked;
            Session.set("s1", s1);
            console.log(Session.get("s1"));
        }
        if ($(event.target).prop("name") == "s2"){
            var s2 = event.target.checked;
            Session.set("s2", s2);
            console.log(Session.get("s2"));
        }            
        if ($(event.target).prop("name") == "s3"){
            var s3 = event.target.checked;
            Session.set("s3", s3);
            console.log(Session.get("s3"));
        }
        if ($(event.target).prop("name") == "s4"){
            var s4 = event.target.checked;
            Session.set("s4", s4);
            console.log(Session.get("s4"));
        }
        if ($(event.target).prop("name") == "s5"){
            var s5 = event.target.checked;
            Session.set("s5", s5);
            console.log(Session.get("s5"));
        }
        if ($(event.target).prop("name") == "s6"){
            var s6 = event.target.checked;
            Session.set("s6", s6);
            console.log(Session.get("s6"));
        }
        if ($(event.target).prop("name") == "s7"){
            var s7 = event.target.checked;
            Session.set("s7", s7);
            console.log(Session.get("s7"));
        }
    },
    'click .back': function(event, template){
        event.preventDefault();
        Session.set('editSession',false)
        Session.set('showNewDrone', false);
        Session.set("insurance", true);
        Session.set("certB", false);
        Session.set("certC", false);
        Session.set("certL", false);
        Session.set("certVL", false);
        Session.set("s1", false);
        Session.set("s2", false);
        Session.set("s3", false);
        Session.set("s4", false);
        Session.set("s5", false);
        Session.set("s6", false);
        Session.set("s7", false);
        delete Session.keys['certB']
        delete Session.keys['certL']
        delete Session.keys['certVL']
        delete Session.keys['certC']
        delete Session.keys['catMC']
        delete Session.keys['catAP']
        delete Session.keys['catH']
        delete Session.keys['catAS']
        pilotsList = []
        delete Session.keys['editSession']
        delete Session.keys['editPilots']
        delete Session.keys['droneId']
        delete Session.keys['s1']
        delete Session.keys['s2']
        delete Session.keys['s3']
        delete Session.keys['s4']
        delete Session.keys['s5']
        delete Session.keys['s6']
        delete Session.keys['s7']
        FlowRouter.go('/operator/dronesList');
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
  
  