Template.dronesList.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allDrones');
    });
});

Template.dronesList.helpers({
    drone : function(){
        delete Session.keys['droneId']
        return Drones.find();
    }
});

Template.dronesList.events({
    'click .back': function(event, template){
            event.preventDefault();
            delete Session.keys['droneId']
            FlowRouter.go('/dashboard');
    },
    'click .newDrone': ()=> {
        event.preventDefault();
        FlowRouter.go('/operator/newDrone');
    },
    'click .editButton': function() {
        Session.set('droneId', this._id);
        Session.set('editSession', true);
        FlowRouter.go('/operator/newDrone');
    },
    'click .deleteButton': function() {
        Session.set('droneId', this._id);
        droneId = Session.get('droneId')
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this drone!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false,
            html: false
          },function(isConfirm){
                if (isConfirm) {
                    Drones.remove({ _id: droneId });
                    swal("Deleted!",
                        "Your drone has been deleted.",
                        "success");
          }
          else{return;}
        });
        delete Session.keys['droneId']
    }
});