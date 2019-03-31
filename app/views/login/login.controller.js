(function(){
    'use strict';

    angular
        .module('shineEbsApp')
        .controller('loginController', ['$scope', '$http', 'restApiFactory','$parse','$location','AuthenticationService',
        function loginController($scope, $http, restApiFactory,$parse,$location,AuthenticationService){
            $scope.loginForm = {};
        
            $scope.submitForm = function(){
                if(!$scope.loginForm.username && !$scope.loginForm.password){

                }
                else{
                    restApiFactory("POST", "http://localhost:8989/A_ezi/organization/userLogin.php",
                     JSON.stringify({username:$scope.loginForm.username,
                    password:$scope.loginForm.password})).
                     post(function(responseData){
                            if(responseData.status == "200"){
                                if(responseData.result.error==false){
                                    AuthenticationService.SetCredentials(responseData); 
                                    $location.path("/");  
                                }
                               
                            }
                            }, function (responseData){
                            console.log("Error :" , responseData);
                            });

                }


            }
        
        }])

  

}());