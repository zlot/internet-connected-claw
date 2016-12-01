import { Meteor } from 'meteor/meteor';
const five = require('johnny-five')

let s6, s9, s10, s11
const STEP = 10;

Meteor.startup(() => {
  let board = new five.Board({
    repl: false
  })

  board.on('ready', function() {
    s6 = new five.Servo({
      pin: 6,
      type: 'continuous'
    })
    s6.stepLeft = () => {
      s6.ccw()
      this.wait(40, () => {
        s6.stop()
      })
    }
    s6.stepRight = () => {
      s6.cw()
      this.wait(40, () => {
        s6.stop()
      })
    }

    s9 = new five.Servo({
      pin: 9,
      startAt: 90
    })
    s9.stepLeft = () => {
      s9.to(s9.value-STEP)
    }
    s9.stepRight = () => {
      s9.to(s9.value+STEP)
    }

    s10 = new five.Servo({
      pin: 10,
      startAt: 90
    })
    s10.stepLeft = function() {
      this.to(this.value-STEP)
    }
    s10.stepRight = function() {
      this.to(this.value+STEP)
    }

    s11 = new five.Servo({
      pin: 11,
      startAt: 90
    })
    s11.stepLeft = function() {
      this.to(this.value-STEP)
    }
    s11.stepRight = function() {
      this.to(this.value+STEP)
    }
  })
})

Meteor.methods({

  's11StepLeft'() {
    s11.stepLeft()
  },
  's11StepRight'() {
    s11.stepRight()
  }
})
