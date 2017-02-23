angular.module("MuseumApp")
    .controller("ExhibitController", ExhibitController)

function ExhibitController () {
  var vm = this;

  vm.test = "Exhibit World";
}
