(function () {
    'use strict';

    angular
        .module('shineEbsApp')
        .controller('membershipController', ['$rootScope','$scope', '$http', 'restApiFactory', '$parse', '$location',
            function membershipController($rootScope,$scope, $http, restApiFactory, $parse, $location) {
                $scope.membership = {};
                $scope.cifs = {};
                //membership type
                restApiFactory("GET", "http://localhost:8989/A_ezi/membership/membershiptype.php", {}
                ).post(function (responseData) {
                    if (responseData.status == "200") {

                        $scope.membershiptypes = responseData.membershiptype;
                        console.log($scope.membershiptypes);
                    }
                }, function (responseData) {
                    console.log("Error :", responseData);
                });

                $scope.GetSelectedmemberships = function () {
                    console.log("$scope.membership.membershipId : ", $scope.membership.membershipId);
                }

                //cif no 1
                $scope.submitCIFForm = function () {
                    restApiFactory("POST", "http://localhost:8989/A_ezi/customermapping/fetchWithCif.php",
                        JSON.stringify({ CIF_NO: $scope.membership.cifno })).post(function (responseData) {
                            if (responseData.status == "200") {
                                //  $scope.gp.gpId = "339";

                                $scope.membership.cif_details = responseData.cifinfo;
                                console.log($scope.cifs);
                            }
                        }, function (responseData) {
                            console.log("Error :", responseData);
                        });
                }
                //old_membership_no
                //Ledger_no
                //membership_date
                //addmission_fees
                //
                //
                $scope.submitForm = function () {

                    console.log("logged data :" , JSON.stringify({membership:$scope.membership,
                        PUBLIC_KEY:$rootScope.globals.currentUser.authdata.authToken}));

                        restApiFactory("POST", 
                        "http://localhost:8989/A_ezi/membership/membershipInsert.php", 
                        JSON.stringify({membership:$scope.membership,
                            PUBLIC_KEY:$rootScope.globals.currentUser.authdata.authToken})).post(function(responseData){
                               console.log("success :" , responseData);
                            if(responseData.status == "200"){
                                alert('Membership Created, click to Home page');
                                $location.path("/");
                            }

                          
                            }, function (responseData){
                            console.log("Error :" , responseData);
                            });
                }

            }])



}());