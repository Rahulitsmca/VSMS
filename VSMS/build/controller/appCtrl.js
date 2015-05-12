/// <reference path="../types.ts" />
var app;
(function (app) {
    var appCtrl = (function () {
        function appCtrl($scope, $location) {
            this.$scope = $scope;
            $scope.requestList = new Array();
            ;
            $scope.AddRequest = function () {
                if ($scope.requestList == null)
                    $scope.requestList = new Array();
                $scope.requestList.push(new app.Request(this.firstname, this.lastname, this.tel, this.vno, this.address, this.pickdate, this.returndate));
                $location.url('home');
            };
            $scope.AddNewRequest = function () {
                $location.url('add');
            };
            $scope.DeleteRequest = function (index) {
                if ($scope.requestList != null) {
                    $scope.requestList.splice(index, 1);
                }
            };
            $scope.BackToHome = function () {
                $location.url('home');
            };
            $scope.ViewDetails = function (index) {
                $location.url('view/' + index.toString());
            };
        }
        appCtrl.$inject = [
            '$scope', '$location'
        ];
        return appCtrl;
    })();
    app.appCtrl = appCtrl;
})(app || (app = {}));
angular.module("myApp").controller('appCtrl', app.appCtrl);
//# sourceMappingURL=appCtrl.js.map