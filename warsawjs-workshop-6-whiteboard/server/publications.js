import { Mongo } from 'meteor/mongo';
import Objects from '../lib/objects';

Meteor.publish('Objects', function () {
    return Objects.find();
})