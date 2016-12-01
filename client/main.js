import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import nipplejs from 'nipplejs';
import _ from 'lodash';
import './main.html';

let callStep = function(funcName) {
  let moveData = arguments[4];
  let normalized = moveData.distance/50;
  let speed = normalized * 4;
  Meteor.call(funcName, speed, function (err, result) {
    if(err) {
      console.error(err);
    }
  });
}

Meteor.startup(function() {
  let nipple = nipplejs.create({
    zone: document.querySelector('#zone'),
    size: 200

  });

  nipple.on('dir:left', (e, data) => {
    // nipple.off('move');
    nipple.on('move', _.throttle(callStep.bind(this, 's11StepLeft', arguments[0], arguments[1]), 80));
  });

  nipple.on('dir:right', (e, data) => {
    // nipple.off('move');
    nipple.on('move', _.throttle(callStep.bind(this, 's11StepRight', arguments[0], arguments[1]), 80));
  });

  nipple.on('end', (e, data) => {
    nipple.off('move');

  });

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
