(function(){
    'use strict';

    angular
        .module('shineEbsApp')
        .controller('branchController',['$scope', '$http', 'restApiFactory','$parse','$location',
        function branchController($scope, $http, restApiFactory,$parse,$location){
            $scope.organization = {};
            $scope.form = {};
            $scope.districts = {};
            $scope.gp = {};

            restApiFactory("GET", "http://localhost:8989/A_ezi/organization/organizationType.php", {}).post(function(responseData){
                if(responseData.status == "200"){
                     $scope.organization.orgList = responseData.org_type;
                     console.log($scope.organization.orgList);
                }
                }, function (responseData){
                console.log("Error :" , responseData);
                });
                restApiFactory("GET", "http://localhost:8989/A_ezi/organization/district.php", {}
                ).post(function(responseData){
                    if(responseData.status == "200"){
                       // $scope.districts.districtId = "327";

                        $scope.districts.districtlist = responseData.districts;
                        console.log($scope.districts.districtlist);
                    }
                    }, function (responseData){
                    console.log("Error :" , responseData);
                    });

                $scope.GetSelectedDistrict = function(){
                    console.log("$scope.states.districtId :", $scope.districts.districtId);

                    if( $scope.districts.districtId){
                        restApiFactory("POST", "http://localhost:8989/A_ezi/organization/gpblock.php", JSON.stringify({SubDist_ID:$scope.districts.districtId})).post(function(responseData){
                            if(responseData.status == "200"){
                              //  $scope.gp.gpId = "339";
    
                                $scope.gp.gplist = responseData.gp_list;
                                console.log($scope.gp.gplist);
                            }
                            }, function (responseData){
                            console.log("Error :" , responseData);
                            });
                    };
                }
                $scope.GetSelectedOrganization = function(){
                    console.log("$scope.organization.orgId : ", $scope.organization.orgId);
                }
                $scope.GetSelectedGP = function(){
                    console.log("$scope.gp.gpId :",$scope.gp.gpId);

                }
                //Insert data
                $scope.submitForm = function(){
              
                    if(!$scope.form.Br_Code && !$scope.form.Br_Name && !$scope.organization.orgId
                         &&!$scope.districts.districtId
                        && !$scope.gp.gpId && !$scope.form.Br_Address1 
                        && !$scope.form.Br_Address2 && !$scope.form.Br_Address3
                        && !$scope.form.Br_Pin_No && !$scope.form.Br_Phone_No
                        && !$scope.form.Br_Email_Id && !$scope.form.Br_Opening_Date
                        && !$scope.form.No_Of_Counter){
                       
                    }else{
                        console.log("has value :  : "+JSON.stringify(
                                {   Org_Id:$scope.organization.orgId,
                                    Br_Code:$scope.form.Br_Code,
                                    Br_Name:$scope.form.Br_Name,
                                    Br_Dist_Cd:$scope.districts.districtId,
                                    Br_Gp_Cd:$scope.gp.gpId,
                                    Br_Address1:$scope.form.Br_Address1,
                                    Br_Address2:$scope.form.Br_Address2,
                                    Br_Address3:$scope.form.Br_Address3,
                                    Br_Pin_No:$scope.form.Br_Pin_No,
                                    Br_Phone_No:$scope.form.Br_Phone_No,
                                    Br_Email_Id:$scope.form.Br_Email_Id,
                                    Br_Opening_Date:$scope.form.Br_Opening_Date,
                                    No_Of_Counter:$scope.form.No_Of_Counter
                                }));
                        restApiFactory("POST", "http://localhost:8989/A_ezi/organization/branchinsertT.php", 
                        JSON.stringify({ Org_Id:$scope.organization.orgId,
                            Br_Code:$scope.form.Br_Code,
                            Br_Name:$scope.form.Br_Name,
                            Br_Dist_Cd:$scope.districts.districtId,
                            Br_Gp_Cd:$scope.gp.gpId,
                            Br_Address1:$scope.form.Br_Address1,
                            Br_Address2:$scope.form.Br_Address2,
                            Br_Address3:$scope.form.Br_Address3,
                            Br_Pin_No:$scope.form.Br_Pin_No,
                            Br_Phone_No:$scope.form.Br_Phone_No,
                            Br_Email_Id:$scope.form.Br_Email_Id,
                            Br_Opening_Date:$scope.form.Br_Opening_Date,
                            No_Of_Counter:$scope.form.No_Of_Counter })).post(function(responseData){
                            if(responseData.status == "200"){
                                alert('Organization Branch created successfully, click to next page');
                                $location.path("/");
                            }
                            }, function (responseData){
                            console.log("Error :" , responseData);
                            });
                    }
                    
                }
        }])


}());