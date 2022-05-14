angular
  .module('appModule')
  .component('employeesList', {
    templateUrl: 'components/employees-list/employees-list.html',
    controller: EmployeesListComponent,
    controllerAs: 'EmployeesListComponentVm',
    bindings: {
      employeesList: '<',
      filter: '<',
    },
  });

function EmployeesListComponent($sce, $scope) {
  $scope.highlight = function (haystack, needle) {
    if (!needle) {
      return $sce.trustAsHtml(haystack.toString());
    }
    return $sce.trustAsHtml(haystack.toString().replace(new RegExp(needle, 'gi'), function (match) {
      return '<span class="highlightedText">' + match + '</span>';
    }));
  };
}
