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
            title: "Sei sicuro?",
            text: "Se elimini questa missioni cancellerai anche il qtb e il logbook associat",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Si, cancella!",
            closeOnConfirm: false,
            html: false
          },function(isConfirm){
                if (isConfirm) {
                    Missions.remove({ _id: missionId });
                    swal("Cancellata!",
                        "La tua missione è stata eliminata",
                        "success");
          }
          else{return;}
        });
        delete Session.keys['missionId']
    }
});