angular.module("MuseumApp")
    .controller("ExhibitController", ExhibitController)

function ExhibitController () {
  var vm = this;

  vm.title = "Exhibit:";
  vm.img = "http://4.bp.blogspot.com/--e_BDE_jjKQ/VdtAbTHozTI/AAAAAAAAHsI/bGdPlHsDlZQ/s1600/Sargent_DIGITAL_Hero.jpg"
  vm.imgtitle = "Sargents Portrait of Artists and Friends"
  vm.imgauthor = "By John Sargent"
}
