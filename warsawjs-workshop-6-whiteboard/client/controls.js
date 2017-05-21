Template.controls.events({
    'change #drawingMode' : function(event) {
        console.log(event.target.checked);
        Session.set('drawingMode', event.target.checked);
    },
    'change #brushSize' : function(event) {
        Session.set('brushSize', event.target.value);
    },
    'change #brushColor' : function(event) {
        Session.set('brushColor', event.target.value);
    },
    'click #clearCanvas' : function(event) {
        Meteor.call('clearCanvas', 'test');
    }
});

Template.controls.helpers({
    brushSize: function () {
        return Session.get('brushSize');

    }
});
