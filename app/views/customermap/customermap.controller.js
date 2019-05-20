(function(){
    'use strict';

    angular
        .module('shineEbsApp')
        .controller('customermapController', ['$rootScope','$scope', '$http', 'restApiFactory','$parse','$location',
        function customermapController($rootScope,$scope, $http, restApiFactory,$parse,$location){
            $scope.designations={};
           var contactsFull=[];
           $scope.allJson=[];
            var uid=0;
            var contactslocal={};
//             var contactsFinal = {
//                 id:0,
//                 'contacts':[],
//                 'cifno1': '',
// 'designationsId': '',
// 'joiningDate': ''
//                 };
                var CUSTOMER_NM='';
                var Type='';
                var contactsFull1 = [];
                $scope.contacts=[];
                $scope.cifs1=[];
                $scope.cifs2=[];
                // this.list=function(){
                //     return contacts;
                // }

               // $scope.contacts=this.list();

                //designation
               restApiFactory("GET", "http://localhost:8989/A_ezi/customermapping/designation.php", {}
                ).post(function (responseData) {
                    if (responseData.status == "200") {

                        $scope.designations = responseData.designations;
                        console.log($scope.designations);
                    }
                }, function (responseData) {
                    console.log("Error :", responseData);
                });

                $scope.GetSelecteddesignations = function () {
                    console.log("$scope.designationsId : ", $scope.contacts.designationsId);
                }

                //cif no 1
                $scope.submitCIFForm = function () {
                    restApiFactory("POST", "http://localhost:8989/A_ezi/customermapping/fetchWithCif.php",
                    JSON.stringify({CIF_NO:$scope.contacts.cifno1})).post(function(responseData){
                       if(responseData.status == "200"){
                         //  $scope.gp.gpId = "339";
   
                           $scope.cifs1 = angular.copy(responseData.cifinfo);
                           console.log($scope.contacts);
                       }
                       }, function (responseData){
                       console.log("Error :" , responseData);
                       });
                }
                 //cif no 2
                $scope.submitCIFForm1 = function () {
                    restApiFactory("POST", "http://localhost:8989/A_ezi/customermapping/fetchWithCif.php",
                    JSON.stringify({CIF_NO:$scope.contacts.cifno2})).post(function(responseData){
                       if(responseData.status == "200"){
                         //  $scope.gp.gpId = "339";
   
                           $scope.cifs2 = angular.copy(responseData.cifinfo);
                           console.log($scope.contacts);
                       }
                       }, function (responseData){
                       console.log("Error :" , responseData);
                       });
                }
                //add another
                $scope.saveContact = function(){
                   
                    

                   if(isEmpty($scope.cifs1)) {
                    angular.forEach($scope.cifs2, function(value1, key1){
                        angular.forEach($scope.designations, function(value2, key2){
                            if(value2.ID === $scope.contacts.designationsId){
                            
                             var cif={
                              'Type' : value1.Type,
                              'CUSTOMER_NM': value1.CUSTOMER_NM,
                              'KYC_ID': value1.KYC_ID,
                              'designationsId':$scope.contacts.designationsId,
                              'joiningDate':$scope.contacts.joiningDate,
                              'cifno':$scope.contacts.cifno2,
                              'designation' : value2.DESC
                         };
                         $scope.contacts.push(cif);
                             
                              }
                          
                           });
                     });
                    }else{
                        angular.forEach($scope.cifs1, function(value1, key1){
                            angular.forEach($scope.designations, function(value2, key2){
                                if(value2.ID === $scope.contacts.designationsId){
                                
                                 var cif={
                                  'Type' : value1.Type,
                                  'CUSTOMER_NM': value1.CUSTOMER_NM,
                                  'KYC_ID': value1.KYC_ID,
                                  'designationsId':$scope.contacts.designationsId,
                                  'joiningDate':$scope.contacts.joiningDate,
                                  'cifno':$scope.contacts.cifno1,
                                  'designation' : value2.DESC
                             };
                             $scope.contacts.push(cif);
                                  }
                              
                               });
                            
                         });
                         for(var i=0; i<$scope.contacts.lenght; i++){
                                contacts[i]=$scope.contacts;
                            }
                        // $scope. contactsFinal = angular.copy($scope.contacts);

                     }
                  
                     console.log("final contact :" , $scope.contacts);
                   //  console.log("final contactsFinal :" , $scope.contactsFinal);
                    
                    function isEmpty(obj) {
                        for(var key in obj) {
                            if(obj.hasOwnProperty(key))
                                return false;
                        }
                        return true;
                    }
                   
                }
               
                $scope.getAllContact = function(){
                    console.log("this.list() :" , JSON.stringify({cifinfo: $scope.contacts,
                        PUBLIC_KEY:$rootScope.globals.currentUser.authdata.authToken,
                         UserId:$rootScope.globals.currentUser.authdata.username}));
                         
                         restApiFactory("POST", 
                         "http://localhost:8989/A_ezi/customermapping/insertmapping.php", 
                         JSON.stringify({cifinfo: $scope.contacts,
                            PUBLIC_KEY:$rootScope.globals.currentUser.authdata.authToken,
                             UserId:$rootScope.globals.currentUser.authdata.username})).post(function(responseData){
                                console.log("success :" , responseData);
                            //  if(responseData.status == "200"){
                            //      alert('User Created, click to Home page');
                            //      $location.path("/");
                            //  }

                            angular.forEach(responseData, function(value, key){
                                if(value.status === '200'){
                                    alert('Mapping Done, click to Home page');
                                  $location.path("/");
                                }
                            });
                             }, function (responseData){
                             console.log("Error :" , responseData);
                             });

                }
        
        }])

  

}());