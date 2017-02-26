angular.module("MuseumApp")
    .controller("OperationsController", OperationsController)

function OperationsController () {
  var vm = this;
  vm.title = "General Info:";

  vm.timings = [
    {
      day: "Friday",
      timings: "10:00 a.m. - 9:00 p.m."
    },
    {
      day: "Monday",
      timings: "10:00 a.m. - 5:30 p.m."
    },
    {
      day: "Saturday",
      timings: "10:00 a.m. - 9:00 p.m."
    },
    {
      day: "Sunday",
      timings: "10:00 a.m. - 5:30 p.m."
    },
    {
      day: "Thursday",
      timings: "10:00 a.m. - 5:30 p.m."
    },
    {
      day: "Tuesday",
      timings: "10:00 a.m. - 5:30 p.m."
    },
    {
      day: "Wednesday",
      timings: "10:00 a.m. - 5:30 p.m."
    },
  ]

  vm.admissions = [
    {
      category: "Adults",
      price: "$25"
    },
    {
      category: "Seniors",
      price: "$17"
    },
    {
      category: "Students",
      price: "$12"
    }
  ]
}
