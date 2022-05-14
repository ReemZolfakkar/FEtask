angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $scope, $location) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.filter = '';
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
  $scope.myChange = function (val) {
    $location.url('?filter=' + val);
    homePageVm.filter = val;
  };
  $scope.Clear = function () {
    $scope.foo = '';
    homePageVm.filter = '';
    $location.url('');
  };
}
