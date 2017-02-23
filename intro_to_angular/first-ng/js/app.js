
// IIFE to prevent messing with global variables
(function() {
'use strict';

angular.module('myApp', [])
  .controller('MainController', function() {
    var vm = this;

    vm.greeting = 'AngularJS, the Superheroic MVW Framework';

    // default crazyColor set to red, which is overwritten with change in input field, on each keypress
    vm.crazyColor = 'red';

    vm.names = ['Nicole', 'Layne', 'Winford', 'Mattie', 'Lawanda'];

    vm.extraNames = ['Diane', 'Santos', 'Liz', 'Gwyn'];

    vm.showNames = true; //toggle between true and false to show/hide names
    vm.addName = function() {
        if (vm.extraNames.length) vm.names.push(vm.extraNames.shift());
    };
    vm.removeName = function() {
        if (vm.names.length) vm.extraNames.unshift(vm.names.pop());
    };

    vm.gem = {
      name: "Diamond",
      price: 9001,
      desc: "14Carrots",
      canPurchase: false
    }

    function isGemPurchasable (gem) {
        return gem.canPurchase
    }
  })
})();
