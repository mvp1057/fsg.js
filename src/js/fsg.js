// Frontend Studygroup
// study on Javascript Libraries

(function (window) {
  'use strict';

  function defineFSG() {
    var FSG = {};

    FSG.sayHello = function () {
      console.log('hello from Frontend Study Group!!!');
    };

    FSG.console = function (msg) {
      console.log(msg);
    }

    FSG.sayBye = function () {
      console.log('bye bye!');
    }

    FSG.sum = function (a, b) {
      return a + b;
    }

    FSG.subtract = function(a, b) {
      return a - b;
    }
		FSG.psgTest = function() {
      console.log('psgTest');
    }

    console.log('test msg');
    console.log('abc');
    return FSG;
  }

  // instanciate
  if (typeof (FSG) === 'undefined') {
    window.FSG = defineFSG();
  }
}(window));
