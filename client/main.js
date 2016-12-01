import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import _ from 'lodash';
import './main.html';

let callStep = function(funcName) {
  Meteor.call(funcName, function (err, result) {
    if(err) {
      console.error(err);
    }
  });
}

Meteor.startup(function() {
})


Template.body.events({
  'click #left'(e, instance) {
    Meteor.call('s11StepLeft', function (err, result) {
      if(err) {
        console.error(err);
      }
    });
  },
  'click #right'(e, instance) {
    Meteor.call('s11StepRight', function (err, result) {
      if(err) {
        console.error(err);
      }
    });
  },
});
