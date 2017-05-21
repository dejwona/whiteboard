Template.list.helpers({
   whiteboards: function() {
      return Whiteboards.find().fetch();
   }
});