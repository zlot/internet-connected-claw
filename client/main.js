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

Template.body.events({
  'click #js-button1'(e, instance) {
    moveClaw('s6StepLeft');
  },
  'click #js-button2'(e, instance) {
    moveClaw('s6StepRight');
  },
  'click #js-button3'(e, instance) {
    moveClaw('s9StepLeft');
  },
  'click #js-button4'(e, instance) {
    moveClaw('s9StepRight');
  },
  'click #js-button5'(e, instance) {
    moveClaw('s10StepLeft');
  },
  'click #js-button6'(e, instance) {
    moveClaw('s10StepRight');
  },
  'click #js-button7'(e, instance) {
    moveClaw('s11StepRight');
  },
  'click #js-button8'(e, instance) {
    moveClaw('s11StepLeft');
  },
});

function moveClaw(funcName) {
  Meteor.call(funcName, function (err, result) {
    if(err) {
      console.error(err);
    }
  });
}
