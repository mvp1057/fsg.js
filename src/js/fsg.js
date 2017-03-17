// Frontend Studygroup
// study on Javascript Libraries

(function(window) {
  'use strict';

  function defineFSG() {
    var FSG  = {};

    FSG.sayHello = function() {
      console.log('hello from Frontend Study Group!!!');
    }

    return FSG;
  }

  // instanciate
  if (typeof(FSG) === 'undefined') {
    window.FSG = defineFSG();
  }
}(window));
