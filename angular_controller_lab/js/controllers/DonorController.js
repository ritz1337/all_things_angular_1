angular.module("MuseumApp")
    .controller("DonorController", DonorController)

function DonorController () {
  var vm = this;
  vm.test = "Donor World";
  vm.title = "Donor Information"
  vm.info =
    {
      email: "development@metmuseum.org",
      phone: "212-650-2425"
    }

  vm.amounts = ["$50", "$100", "$250", "$500", "$1000", "$5000"]

}
