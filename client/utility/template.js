Template.Home.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('allOperator');
    });
});

Template.autoCompleteOperators.helpers({
  settings: function() {
    return {
      position: "bottom",
      limit: 20,
      rules: [
        {
          // token: '',
          collection: Meteor.users,
          field: 'profile.lastname',
          matchAll: true,
          template: Template.selectOperator
        }
      ]
    };
  },
  operator: function() {
    return Meteor.users.find();
  }
});

Template.selectOperator.helpers({
  operatorEmail : function(){
      return this.emails[0].address;
  }
});

Template.autoCompleteOperators.events({
    "autocompleteselect input": function(event, template, doc) {
        Meteor.call('addOperator', doc);
}
});


Template.atSelectInput.events({
    "change select": function(event, template) {
      var Value =this.getValue(template);
        console.log(Value);
        if(Value == "operator"){
            Session.set('CampoVisibile', false)
            console.log("remove")
        }else{
          Session.set('CampoVisibile', true)
        }
      }
});

Template.autoCompleteOperators.helpers({
  CampoVisibile(){
      return Session.get('CampoVisibile')
  }
});
