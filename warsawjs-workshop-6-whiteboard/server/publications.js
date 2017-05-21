import { Mongo } from 'meteor/mongo';
import Objects from '../lib/objects';
import Whiteboards from '../lib/whiteboards';

Meteor.publish('Objects', function () {
    return Objects.find();
});

Meteor.publish('Whiteboards', function () {
    return Whiteboards.find();
})