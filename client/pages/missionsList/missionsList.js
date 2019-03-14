Template.missionsList.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allMissions');
    });
});

Template.missionsList.helpers({
    mission : function(){
        return Missions.find();
    }
});

Template.missionsList.events({
    'click .newMission': function(event, template){
            event.preventDefault();
            FlowRouter.go('/operator/newMission');
    },
    'click .qtbButton': function() {
        Session.set('missionId', this._id);
        FlowRouter.go('/newMission/qtbLogbook');
    },
    'click .editButton': function() {
        Session.set('missionId', this._id);
        Session.set('editSession', true); 
        Session.set('editPilots',false)
        FlowRouter.go('/operator/newMission');
    },
    'click .deleteButton': function() {
        Session.set('missionId', this._id);
        missionId = Session.get('missionId')
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this mission!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false,
            html: false
          },function(isConfirm){
                if (isConfirm) {
                    Missions.remove({ _id: missionId });
                    swal("Deleted!",
                        "Your mission has been deleted.",
                        "success");
          }
          else{return;}
        });
        delete Session.keys['missionId']
    }
});