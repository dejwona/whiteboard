import {Random} from 'meteor/random';
import Whiteboards from '../lib/whiteboards';

Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading'
});


Router.route('/', function () {
  this.render('list', {});
});

Router.route('/whiteboard/:id', function () {
    Session.set('sessionId', this.params.id);
    this.render('whiteboard', {});
});
Router.route('/whiteboard/', function () {
    const sessionId = Random.id();
    Whiteboards.insert({_id: sessionId});
    this.redirect('/whiteboard/' + sessionId);
});