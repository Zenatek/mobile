Template.Home.helpers({
    redirectMissions : function () {
        FlowRouter.go("/operator/missionsList")
    },
    changeBackground : function () {
            $('body').css('background-image','url(/login.jpg)');
        }
});