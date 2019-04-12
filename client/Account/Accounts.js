var logoutFunc = function () {
    Session.set('nav-toggle', '');
    FlowRouter.go('/');
}

AccountsTemplates.configure({
    onLogoutHook: logoutFunc,
    homeRoutePath: '/dashboard'
});

AccountsTemplates.addField(
    {
        _id: 'firstname',
        type: 'text',
        displayName: "Name",
        required: true,
        re: /(?=.*[a-z])(?=.*[A-Z])/,
        errStr: '1 lowercase and 1 uppercase letter required',
    }
);

AccountsTemplates.addField(
    {
        _id: 'lastname',
        type: 'text',
        displayName: "Cognome",
        required: true,
        re: /(?=.*[a-z])(?=.*[A-Z])/,
        errStr: '1 lowercase and 1 uppercase letter required',
    }
);

AccountsTemplates.addField(
    {
        _id: "profession",
        type: "select",
        displayName: "Account type",
        select: [
            {
                text: "Operatore",
                value: "operator"
            },
            {
                text: "Pilota",
                value: "pilot"
            }
        ]
    }
);

AccountsTemplates.addField(
    {
        _id: 'selectOperator',
        type: 'radio',
        displayName: " "
    }
);