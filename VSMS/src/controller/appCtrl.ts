/// <reference path="../types.ts" />
module app {
    export class appCtrl {
        public static $inject = [
            '$scope', '$location'
        ];
        constructor(
            private $scope: IAppScope,
            $location: ng.ILocationService
            ) {
            $scope.requestList = new Array<Request>();;

            $scope.AddRequest = function () {
                if ($scope.requestList == null)
                    $scope.requestList = new Array<Request>();
                $scope.requestList.push(new Request(this.firstname, this.lastname, this.tel, this.vno, this.address, this.pickdate, this.returndate));
                $location.url('home');
            }

            $scope.AddNewRequest = function () {
                $location.url('add');
            }

            $scope.DeleteRequest = function (index) {
                if ($scope.requestList != null) {
                    $scope.requestList.splice(index, 1);
                }
            }

            $scope.BackToHome = function () {
                $location.url('home');
            }

            $scope.ViewDetails = function (index) {
                $location.url('view/' + index.toString());
            }
        }
    }
}

angular.module("myApp").controller('appCtrl', app.appCtrl);
