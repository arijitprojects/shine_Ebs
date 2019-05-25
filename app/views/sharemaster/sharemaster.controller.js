(function(){
    'use strict';

    angular
        .module('shineEbsApp')
        .controller('sharemasterController', ['$rootScope','$scope', '$http', 'restApiFactory','$parse','$location',
        function sharemasterController($rootScope,$scope, $http, restApiFactory,$parse,$location){
        
            $scope.shareMaster = {};
           
            $scope.submitForm = function () {
            console.log("has value :  : "+JSON.stringify(
                { shareMaster:$scope.shareMaster,
                    PUBLIC_KEY:$rootScope.globals.currentUser.authdata.authToken }));

                    restApiFactory("POST", 
                    "http://localhost:8989/A_ezi/share/shareInsert.php", 
                    JSON.stringify(
                        { shareMaster:$scope.shareMaster,
                            PUBLIC_KEY:$rootScope.globals.currentUser.authdata.authToken })).post(function(responseData){
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