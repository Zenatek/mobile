
Template.qtbLogbook.events({
    'click .back': function(event, template){
            event.preventDefault();
            FlowRouter.go('/operator/missionsList');
    }
});