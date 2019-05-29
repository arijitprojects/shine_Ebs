(function(){
    'use strict';

    angular
        .module('shineEbsApp')
        .controller('shareissueController', ['$scope', '$http', 'restApiFactory','$parse','$location',
        function shareissueController($scope, $http, restApiFactory,$parse,$location){
        
            $scope.shareissueForm = {};
            $scope.cifs=[];
         //cif no 1
         $scope.submitCIFForm1 = function () {
            console.log("data :" , JSON.stringify({CIF_NO:$scope.shareissueForm.Membership_No_CIF_No}));
            restApiFactory("POST", "http://localhost:8989/A_ezi/customermapping/fetchWithCif.php",
            JSON.stringify({CIF_NO:$scope.shareissueForm.Membership_No_CIF_No})).post(function(responseData){
               if(responseData.status == "200"){
                 //  $scope.gp.gpId = "339";

                 //$scope.share.cifs = angular.copy(responseData.cifinfo);
                 $scope.shareissueForm.cifs = responseData.cifinfo;
                 console.log($scope.cifs);
               }
               }, function (responseData){
               console.log("Error :" , responseData);
               });
        }
       

        console.log("responseData"+JSON.stringify({SHAREtYPE:213}));
        restApiFactory("POST", "http://localhost:8989/A_ezi/share/shareIssueperShare.php",
        JSON.stringify({SHAREtYPE:213})).post(function(responseData){
           // console.log("responseData"+JSON.stringify({responseData}));
           if(responseData.status == "200"){
                $scope.shareissueForm.Price_Per_Share=responseData.priceperShare;
               
           }
           }, function (responseData){
           console.log("Error :" , responseData);
           });

           $scope.submitFormRest = function () {
            console.log("rest data :" ,  JSON.stringify({shareissue:$scope.shareissueForm}));
            restApiFactory("POST", "http://localhost:8989/A_ezi/share/shareIssueInsert.php",
            JSON.stringify({shareissue:$scope.shareissueForm})).post(function(responseData){
               // console.log("responseData"+JSON.stringify({responseData}));
               if(responseData.status == "200"){
                alert('share Master Created, click to Home page');
                $location.path("/");
                   
               }
               }, function (responseData){
               console.log("Error :" , responseData);
               });

        }

        }])

  

}());