// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});

// Dashboard
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render("AppLayout", {main: "Dashboard"});
    }
});

var adminRoutes = FlowRouter.group({
    prefix: '/operator',
    name: 'operator'
});

adminRoutes.route('/pilots', {
    name: 'pilots',
    action() {
        BlazeLayout.render("AppLayout", {main: "Pilots"});
    }
})

adminRoutes.route('/newDrone', {
    name: 'newDrone',
    action() {
        BlazeLayout.render("AppLayout", {main: "newDrone"});
    }
})

adminRoutes.route('/dronesList', {
    name: 'dronesList',
    action() {
        BlazeLayout.render("AppLayout", {main: "dronesList"});
    }
})

adminRoutes.route('/newMission', {
    name: 'newMission',
    action() {
        BlazeLayout.render("AppLayout", {main: "newMission"});
    }
})

adminRoutes.route('/missionsList', {
    name: 'missionsList',
    action() {
        BlazeLayout.render("AppLayout", {main: "missionsList"});
    }
})

FlowRouter.route('/newMission/qtbLogbook', {
    name: 'qtbLogbook',
    action() {
        BlazeLayout.render("AppLayout", {main: "qtbLogbook"});
    }
});

var pilotsRoutes = FlowRouter.group({
    prefix: '/operator/pilots',
    name: 'operator/pilots'
});

pilotsRoutes.route('/infoPilot', {
    name: 'infoPilot',
    action() {
        BlazeLayout.render("AppLayout", {main: "infoPilot"});
    }
})



