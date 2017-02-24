(function() {
  "use strict";

  angular
    .module('ThePresidentsApp')
    .controller('PresidentsController', PresidentsController);

  PresidentsController.$inject = ['$http'];

  function PresidentsController($http){
    var vm = this;
    // vm.all = [
    //   {"name": "Blorp Florp McRichards", "start": 1789, "end": 1790 },
    //   {"name": "John MuscleBrain Adams", "start": 1790, "end": 1801 },
    //   {"name": "Blogpost Dorgabn", "start": 1801, "end": 1949 },
    //   {"name": "Mike", "start": 1949, "end": 1947 }
    // ]; //placeholder data replaced with line 20 (vm.all)
    vm.addPresident = addPresident;
    vm.newPresident = {};
    vm.all = []
    vm.deletePresident = deletePresident;
    vm.updatePresident = updatePresident;


    function getPresidents() {
      $http
        .get('/api/presidents')
        .then(function(response){
          vm.all = response.data.presidents;
      }, function(err) {
            console.log(err);
      });
    }

    getPresidents();


    function addPresident(){
      $http
        .post('/api/presidents', vm.newPresident)
        .then(function(res) {
          vm.all.push(res.data.president);
          vm.newPresident = {};
      }, function(err) {
          console.log(err);
      });
    }

    function deletePresident(president) {
     console.log(president) // targets the corresponding president object
     console.log(president._id)
     let id = president._id
     $http
      .delete(`/api/presidents/${president._id}`) //or id, instead of literal president._id, the same
      .then(function(res) {
        console.log(res)
        vm.all = vm.all.filter(function(pres) {
          return pres._id != id;
        });
      }, function(err) {
        console.log(err)
      });
    }

    function updatePresident(president) {
      console.log(president);
      console.log(president.uncovered)
      var id = president._id
      president.uncovered = !president.uncovered;
      console.log(president.uncovered)
      $http
        .put('/api/presidents/' + id, president)
        .then(function(res) {
          console.log(res)
        }, function(err) {
          console.log(err)
        })

    }
  }
})();
