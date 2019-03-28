(function(){
    'use strict';

    angular
        .module('shineEbsApp')
        .controller('organizationController', ['$scope', '$http', 'restApiFactory','$parse','$location',
        
        function organizationController($scope, $http, restApiFactory,$parse,$location){
           $scope.states = {};
           $scope.states.statesId = "19";
           $scope.districts = {};
           $scope.organization = {};
           $scope.form = {};
           restApiFactory("GET", "http://localhost:8989/A_ezi/organization/states.php", {}).post(function(responseData){
               if(responseData.status == "200"){
                    $scope.states.sattesList = responseData.states;
                    console.log($scope.states.sattesList);
               }
           }, function (responseData){
            console.log("Error :" , responseData);
           });

           restApiFactory("GET", "http://localhost:8989/A_ezi/organization/organizationType.php", {}).post(function(responseData){
            if(responseData.status == "200"){
                 $scope.organization.orgList = responseData.org_type;
                 console.log($scope.organization.orgList);
            }
            }, function (responseData){
            console.log("Error :" , responseData);
            });

            $scope.GetSelectedOrganization = function(){
                console.log("$scope.organization.orgId : ", $scope.organization.orgId);
            }

            $scope.GetSelectedState = function(){
                console.log("$scope.states.statesId : ", $scope.states.statesId);

                if($scope.states.statesId){
                    restApiFactory("POST", "http://localhost:8989/A_ezi/organization/districts.php", JSON.stringify({state_id:$scope.states.statesId})).post(function(responseData){
                        if(responseData.status == "200"){
                            $scope.districts.districtId = "327";

                            $scope.districts.districtlist = responseData.districts;
                            console.log($scope.districts.districtlist);
                        }
                        }, function (responseData){
                        console.log("Error :" , responseData);
                        });
                };
            }

            $scope.GetSelectedDistrict = function(){
                console.log("$scope.states.districtId :", $scope.districts.districtId);
            }
            $scope.submitForm = function(){
              
                if(!$scope.form.Org_Name && !$scope.form.Org_ShortCode && !$scope.form.Org_State_Cd
                    && !$scope.form.Org_District_Cd && !$scope.form.Org_Address1 
                    && !$scope.form.Org_Address2 && !$scope.form.Org_Address3
                    && !$scope.form.Org_Pin_No && !$scope.form.Org_Phone_No
                    && !$scope.form.Org_Email_Id && !$scope.form.Org_RegNo
                    && !$scope.form.Org_RegDate && !$scope.form.No_Of_Branch
                    && !$scope.form.OrgApplicationUrl){
                   
                }else{
                    console.log("has value :  : "+JSON.stringify({Org_Name:$scope.form.Org_Name,
                        Org_ShortCode:"HO",
                        Org_Type_Id:$scope.organization.orgId,
                        Org_State_Cd:$scope.states.statesId,
                        Org_District_Cd: $scope.districts.districtId,
                        Org_Address1:$scope.form.Org_Address1,
                        Org_Address2:$scope.form.Org_Address2,
                        Org_Address3:$scope.form.Org_Address3,
                        Org_Pin_No:$scope.form.Org_Pin_No,
                        Org_Phone_No:$scope.form.Org_Phone_No,
                        Org_Email_Id:$scope.form.Org_Email_Id,
                        Org_RegNo:$scope.form.Org_RegNo,
                        Org_RegDate:$scope.form.Org_RegDate,
                        No_Of_Branch:$scope.form.No_Of_Branch,
                        OrgApplicationUrl:$scope.form.OrgApplicationUrl }));
                    restApiFactory("POST", "http://localhost:8989/A_ezi/organization/organizationHO.php", 
                    JSON.stringify({Org_Name:$scope.form.Org_Name,
                        Org_ShortCode:"HO",
                        Org_Type_Id:$scope.organization.orgId,
                        Org_State_Cd:$scope.states.statesId,
                        Org_District_Cd: $scope.districts.districtId,
                        Org_Address1:$scope.form.Org_Address1,
                        Org_Address2:$scope.form.Org_Address2,
                        Org_Address3:$scope.form.Org_Address3,
                        Org_Pin_No:$scope.form.Org_Pin_No,
                        Org_Phone_No:$scope.form.Org_Phone_No,
                        Org_Email_Id:$scope.form.Org_Email_Id,
                        Org_RegNo:$scope.form.Org_RegNo,
                        Org_RegDate:$scope.form.Org_RegDate,
                        No_Of_Branch:$scope.form.No_Of_Branch,
                        OrgApplicationUrl:$scope.form.OrgApplicationUrl })).post(function(responseData){
                        if(responseData.status == "200"){
                            $location.path("/branch");
                        }
                        }, function (responseData){
                        console.log("Error :" , responseData);
                        });
                }
                
            }

        }])
}());