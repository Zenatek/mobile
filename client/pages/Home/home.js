Template.Home.helpers({
    redirectDashboard : function () {
        FlowRouter.go("/dashboard")
    },
    changeBackground : function () {
            $('body').css('background-image','url(/login.jpg)');
        }
});