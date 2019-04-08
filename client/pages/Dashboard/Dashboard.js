Template.Dashboard.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allMissions');
    });
});

Template.Dashboard.helpers({
    mission : function(){
        return Missions.find();
    }
});


Template.Dashboard.events({
    'click .qtbButton': function() {
        Session.set('missionId', this._id);
        FlowRouter.go('/newMission/qtbLogbook');
    },
    'click .deleteButton': function() {
        Session.set('missionId', this._id);
        missionId = Session.get('missionId')
        swal({
            title: "Sei sicuro?",
            text: "Se elimini questa missione cancellerai anche il qtb e il logbook associato",
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

