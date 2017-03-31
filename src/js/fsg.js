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

    return FSG;
  }

  // instanciate
  if (typeof (FSG) === 'undefined') {
    window.FSG = defineFSG();
  }
}(window));