Template.Home.helpers({
    redirectMissions : function () {
        FlowRouter.go("/missionsList")
    },
    changeBackground : function () {
            $('body').css('background-image','url(/login.jpg)');
        }
});