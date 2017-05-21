Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading'
});

Router.route('/whiteboard', function () {
    this.render('whiteboard', {});
});

Router.route('/', function () {
  this.render('list', {});
});