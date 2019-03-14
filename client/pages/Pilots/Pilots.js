Template.Pilots.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allPilots');
    });
});

Template.Pilots.helpers({
    pilots : function(){
        return Meteor.users.find();
    },
    pilotsEmail : function(){
        return this.emails[0].address;
    },
    isOperator: function(){
        return Roles.userIsInRole(this._id, 'operator-user') ? true : false;
    }
});

Template.Pilots.events({
    'click .editButton': function() {
        Session.set('pilotId', this._id);
        FlowRouter.go('/operator/pilots/infoPilot');
    },
    'click .deletePilot': function() {
        Session.set('pilotId', this._id);
        var pilotID = this._id;
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this pilot!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false,
            html: false
          },function(isConfirm){
                if (isConfirm) {
                    Meteor.call('deletePilot', pilotID);
                    swal("Deleted!",
                        "Your pilot has been deleted.",
                        "success");
          }
          else{return;}
        });
        
    }
});