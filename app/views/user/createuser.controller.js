(function(){
    'use strict';

    angular
        .module('shineEbsApp')
        .controller('userCreateController',  ['$scope', '$http', 'restApiFactory','$parse','$location',
        function userCreateController($scope, $http, restApiFactory,$parse,$location){
            $scope.roles = {};
            $scope.organization ={};
            $scope.branch ={};
            $scope.userForm={};
            restApiFactory("GET", "http://localhost:8989/A_ezi/organization/fetchuserRoles.php", {}).post(function(responseData){
                if(responseData.status == "200"){
                     $scope.roles.roleList = responseData.roleList;
                     console.log( $scope.roles.roleList);
                }
            }, function (responseData){
             console.log("Error :" , responseData);
            });



            restApiFactory("GET", "http://localhost:8989/A_ezi/organization/fetchOrganizationCode.php", {}).post(function(responseData){
                if(responseData.status == "200"){
                     $scope.organization.orgcodesList = responseData.orgcodes;
                     console.log($scope.organization.orgcodesList);
                }
            }, function (responseData){
             console.log("Error :" , responseData);
            });



            $scope.GetSelectedrole = function(){
                console.log("$scope.organization.orgId : ", $scope.roles.roleId);

                //if($scope.roles.roleId){
                    // restApiFactory("POST", "http://localhost:8989/A_ezi/organization/districts.php", JSON.stringify({state_id:$scope.states.statesId})).post(function(responseData){
                    //     if(responseData.status == "200"){
                    //       //  $scope.districts.districtId = "";

                    //         $scope.districts.districtlist = responseData.districts;
                    //         console.log($scope.districts.districtlist);
                    //     }
                    //     }, function (responseData){
                    //     console.log("Error :" , responseData);
                    //     });
              //  };
            }

            $scope.GetSelectedOrganization = function(){
                console.log($scope.organization.orgId);
                restApiFactory("POST", "http://localhost:8989/A_ezi/organization/organizationBranch.php",
                 JSON.stringify({organization_Code:$scope.organization.orgId})).post(function(responseData){
                    if(responseData.status == "200"){
                      //  $scope.gp.gpId = "339";

                        $scope.branch.orgcodes = responseData.orgcodes;
                        console.log($scope.branch.orgcodes);
                    }
                    }, function (responseData){
                    console.log("Error :" , responseData);
                    });
            }
            $scope.GetSelectedBranch = function(){
                console.log($scope.branch.branchId);
 
            }
            $scope.submitForm = function(){
                if(!$scope.userForm.Emp_cd && !$scope.userForm.Fst_Name 
                    && !$scope.userForm.Usr_Email
                   && !$scope.userForm.Contact_No && !$scope.userForm.User_Nm
                   && !$scope.userForm.User_Pwd && !$scope.roles.roleId
                  && !$scope.branch.branchId){
                  
               }else{
                if($scope.userForm.Lst_Name == null || $scope.userForm.Lst_Name === "" 
                || $scope.userForm.Lst_Name === undefined){
                    $scope.userForm.Lst_Name ="";
                   }
                   if($scope.userForm.Mdl_Name == null || $scope.userForm.Mdl_Name === "" 
                   || $scope.userForm.Mdl_Name === undefined){
                       $scope.userForm.Mdl_Name ="";
                      }
                   console.log("has value :  : "+JSON.stringify(
                           {Emp_cd :$scope.userForm.Emp_cd,
                            Fst_Name:$scope.userForm.Fst_Name,
                            Mdl_Name:$scope.userForm.Mdl_Name,
                            Lst_Name:$scope.userForm.Lst_Name,
                            Usr_Email:$scope.userForm.Usr_Email,
                            Contact_No:$scope.userForm.Contact_No,
                            User_Nm:$scope.userForm.User_Nm,
                            User_Pwd:$scope.userForm.User_Pwd ,
                            Role_Id:$scope.roles.roleId,
                            Br_Id:$scope.branch.branchId
                           }));
                           restApiFactory("POST", 
                           "http://localhost:8989/A_ezi/organization/createUser.php", 
                           JSON.stringify(
                            {Emp_cd :$scope.userForm.Emp_cd,
                             Fst_Name:$scope.userForm.Fst_Name,
                             Mdl_Name:$scope.userForm.Mdl_Name,
                             Lst_Name:$scope.userForm.Lst_Name,
                             Usr_Email:$scope.userForm.Usr_Email,
                             Contact_No:$scope.userForm.Contact_No,
                             User_Nm:$scope.userForm.User_Nm,
                             User_Pwd:$scope.userForm.User_Pwd ,
                             Role_Id:$scope.roles.roleId,
                             Br_Id:$scope.branch.branchId
                            })).post(function(responseData){
                               if(responseData.status == "200"){
                                   alert('User Created, click to Home page');
                                   $location.path("/");
                               }
                               }, function (responseData){
                               console.log("Error :" , responseData);
                               });



                        } 
            }

    }])
}());