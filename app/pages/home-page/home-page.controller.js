angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $scope) {
  const homePageVm = this;
  homePageVm.employees = [];
  activate();
  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }
  $scope.loadEmploys = function (page) {
    Employees.loadMoreEmployees(page + 1)
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  };
}
