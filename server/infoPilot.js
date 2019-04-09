Meteor.methods({
    updatePilot : function(pilotID, firstname, lastname, state, comune,
        reference, civNum, intNum, capNum, telephone, numBrev, luogoBrev, release_date, 
        exp_date, certB, certC, certL, certVL, istr, exam){
        Meteor.users.update({_id:pilotID},
            {$set:
                {"profile.firstname":  firstname,
                "profile.lastname":  lastname,
                "profile.state":  state,
                "profile.address.comune": comune,
                "profile.address.reference": reference,
                "profile.address.civNum": civNum,
                "profile.address.intNum": intNum,
                "profile.address.capNum": capNum,
                "profile.telephone": telephone,
                "profile.brevetto.numBrev": numBrev,
                "profile.brevetto.luogoBrev" : luogoBrev,
                "profile.brevetto.release_date": release_date,
                "profile.brevetto.expiration_date": exp_date,
                "profile.certification.certB": certB,
                "profile.certification.certC": certC,
                "profile.certification.certL": certL,
                "profile.certification.certVL": certVL,
                "profile.ability.istr": istr,
                "profile.ability.exam": exam
            }}
                
        );
    },
    updateOperator : function(pilotID, firstname, lastname, state, comune,
         reference, civNum, intNum, telephone, capNum, rifEnac, basi, p_iva){
        Meteor.users.update({_id:pilotID},
            {$set:
                {"profile.firstname":  firstname,
                "profile.lastname":  lastname,
                "profile.state":  state,
                "profile.address.comune": comune,
                "profile.address.reference": reference,
                "profile.address.civNum": civNum,
                "profile.address.intNum": intNum,
                "profile.address.capNum": capNum,
                "profile.telephone": telephone,
                "profile.rifEnac": rifEnac,
                "profile.basi": basi,
                "profile.p_iva": p_iva
            }}                
        );
    }
});