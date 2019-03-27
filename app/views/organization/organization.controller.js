(function(){
    'use strict';

    angular
        .module('shineEbsApp')
        .controller('organizationController', ['$scope','$http',function organizationController($scope,$http){
             //console.log("posting data...." +  JSON.stringify($scope.form) );
    
             var url = "http://localhost:8989/A_ezi/organization/states.php";
             $scope.states = {};
             $scope.states.statesId = "1";
             $scope.districts = {};
             $scope.districts.districtsId = "19";
             $http({
               method: 'GET',
               url: url
              // headers: {'Content-Type':'application/json'},
           
             }).then(function successCallback(responseData) {
               console.log("  : "+responseData);
               if(responseData.status == "200"){
                $scope.states.sattesList = responseData.data.states;

               }
           
             }, function errorCallback(responseData) {
               console.log("unauthorized :  : "+JSON.stringify(responseData));

               if(responseData.data.status  == 400){
               
                   var message =responseData.data.defaultMessage;
                   console.log("message :  : "+message);
                   var serverMessage = $parse('organizationForm.'+responseData.data.fieldName+'.$error.serverMessage');
                   console.log("serverMessage :  : "+serverMessage);

                   $scope.organizationForm.$setValidity(responseData.data.fieldName,false,$scope.organizationForm);
                   serverMessage.assign($scope,message);
                
               }
               else{
                   responseData.data.errors.forEach(function(error){
                       var message =error.defaultMessage;
                       var serverMessage = $parse('loginForm.'+error.field+'.$error.serverMessage');
                       $scope.organizationForm.$setValidity(error.field,false,$scope.organizationForm);
                       serverMessage.assign($scope,message);
                      });
               }
             });







             console.log("$scope.states.statesId :",JSON.stringify({state_id:$scope.districts.districtsId}));

             $http({
                method: 'POST',
                url: "http://localhost:8989/A_ezi/organization/districts.php",
                headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'},
               
               data: JSON.stringify({state_id:$scope.districts.districtsId})
              }).then(function successCallback(responseData) {
                console.log("  : "+responseData);
                if(responseData.status == "200"){
                 console.log("responseData.data.districts",JSON.stringify(responseData.data.districts));
                 $scope.districts.districtList = responseData.data.districts;
                 console.log(" $scope.districts.districtList ",JSON.stringify( $scope.districts.districtList ));
                }
            
              }, function errorCallback(responseData) {
                console.log("unauthorized :  : "+JSON.stringify(responseData));
 
                if(responseData.data.status  == 400){
                
                    var message =responseData.data.defaultMessage;
                    console.log("message :  : "+message);
                    var serverMessage = $parse('organizationForm.'+responseData.data.fieldName+'.$error.serverMessage');
                    console.log("serverMessage :  : "+serverMessage);
 
                    $scope.organizationForm.$setValidity(responseData.data.fieldName,false,$scope.organizationForm);
                    serverMessage.assign($scope,message);
                 
                }
                else{
                    responseData.data.errors.forEach(function(error){
                        var message =error.defaultMessage;
                        var serverMessage = $parse('loginForm.'+error.field+'.$error.serverMessage');
                        $scope.organizationForm.$setValidity(error.field,false,$scope.organizationForm);
                        serverMessage.assign($scope,message);
                       });
                }
              });

        }])


}());