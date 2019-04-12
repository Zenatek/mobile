var operatorID;
var postSignUp = function (userId, info) {
    console.log(userId);
    //Meteor.users.update({_id:userId},{$set:{roles:"pilot"}});
    console.log(info.profile.profession);
    if(info.profile.profession == "operator"){
        Roles.addUsersToRoles(userId, ['operator-user', info.profile.profession]);      
    }else{
        Roles.addUsersToRoles(userId, ['pilot-user', info.profile.profession]);
        Meteor.users.update({_id:userId},{$set:{"profile.operator_id":  operatorID, "profile.timeFly" : "PT0M" }});
    }  
}

AccountsTemplates.configure({
    postSignUpHook: postSignUp,
    homeRoutePath: '/operator/missionsList'
});

//ADD OPERATOR - METODO PER SALVARE ID OPERATORE DENTRO A PILOT -> QUANDO REGISTRO NUOVO PILOTA
Meteor.methods({
    addOperator: function(doc) {
        operatorID = doc._id;
    },
    deletePilot : function(pilotID){
        console.log(pilotID)
        Meteor.users.remove({ _id: pilotID });
    }
});

Meteor.methods({
    updateHoursFly : function(pilot_id, timeFly){
        Meteor.users.update({_id:pilot_id},
            {$set:
                {"profile.timeFly":  timeFly
            }}
                
        );
    }
});