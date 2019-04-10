Template.profile.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allPilots');
    });
});

Template.profile.helpers({
    pilots : function(){
        pilotID = Session.get('pilotId')
        return Meteor.users.findOne({_id : pilotID})
        
    },
});

Template.profile.events({
    'click .logout': function() {
        FlowRouter.go('/operator/missionsList')
        Session.set('operator_id', '');
        AccountsTemplates.logout();
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
        if ($(event.target).prop("name") == "instructor"){
            var certL = event.target.checked;
            Session.set("istr", certL);
            console.log(Session.get("istr"));
        }
        if ($(event.target).prop("name") == "examiner"){
            var certVL = event.target.checked;
            Session.set("exam", certVL);
            console.log(Session.get("exam"));
        }
        
    },
    'click .submit': function(event, template){
        event.preventDefault();
        if ( Roles.userIsInRole( Meteor.userId(), 'operator-user')){
            var firstname = template.find('#firstname').value;
            var lastname = template.find('#lastname').value;
            var state = template.find('#state').value;
            var comune = template.find('#comune').value;
            var reference = template.find('#reference').value;
            var civNum = template.find('#civNum').value;
            var intNum = template.find('#intNum').value;
            var capNum = template.find('#capNum').value;
            var telephone = template.find('#telephone').value;
            var rifEnac = template.find('#rifEnac').value;
            var basi = template.find('#basi').value;
            var p_iva = template.find('#p_iva').value;

            pilotID = Session.get('pilotId')

            Meteor.call("updateOperator", pilotID, firstname, lastname, state, comune, reference, civNum, intNum, telephone, capNum, rifEnac, basi, p_iva);

        }else{
            var firstname = template.find('#firstname').value;
            var lastname = template.find('#lastname').value;
            var state = template.find('#state').value;
            var comune = template.find('#comune').value;
            var reference = template.find('#reference').value;
            var civNum = template.find('#civNum').value;
            var intNum = template.find('#intNum').value;
            var capNum = template.find('#capNum').value;
            var telephone = template.find('#telephone').value;
            var numBrev = template.find('#numBrev').value;
            var luogoBrev = template.find('#luogoBrev').value;
            var release_date = template.find('#release_date').value;
            var exp_date = template.find('#expiration_date').value;
            var certB = Session.get("certB");
            var certC = Session.get("certC");
            var certH = Session.get("certH");
            var certL = Session.get("certL");
            var certVL = Session.get("certVL");
            var istr = Session.get("istr");
            var exam = Session.get("exam");

            pilotID = Session.get('pilotId')

            Meteor.call("updatePilot", pilotID, firstname, lastname, state, comune, reference, civNum, intNum, capNum, telephone, numBrev, luogoBrev, release_date, exp_date, certB, certC, certH, certL, certVL, istr, exam);

        }
        
        FlowRouter.go('/operator/missionsList');
    },
});