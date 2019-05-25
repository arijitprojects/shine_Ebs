(function(){
    'use strict';

    angular
        .module('shineEbsApp')
        .controller('shareaccountController', ['$scope', '$http', 'restApiFactory','$parse','$location',
        function shareaccountController($scope, $http, restApiFactory,$parse,$location){
        
            $scope.share = {};
         //Share Class
         restApiFactory("GET", "http://localhost:8989/A_ezi/share/shareClass.php", {}
         ).post(function (responseData) {
             if (responseData.status == "200") {

                 $scope.shareClasses = responseData.shareClass;
                 console.log($scope.shareClasses);
             }
         }, function (responseData) {
             console.log("Error :", responseData);
         });

         $scope.GetSelectedshare = function () {
             console.log("$scopeshare.shareClassIdId : ", $scope.share.shareClassIdId);
         }
         //Submit cif
         $scope.submitCIFForm = function () {
            restApiFactory("POST", "http://localhost:8989/A_ezi/customermapping/fetchWithCif.php",
                JSON.stringify({ CIF_NO: $scope.share.Membership_No_CIF_No})).post(function (responseData) {
                    if (responseData.status == "200") {
                        //  $scope.gp.gpId = "339";

                        $scope.share.cif_details = responseData.cifinfo;
                        console.log($scope.share.cif_details);
                    }
                }, function (responseData) {
                    console.log("Error :", responseData);
                });
        }

        
        }])

  

}());