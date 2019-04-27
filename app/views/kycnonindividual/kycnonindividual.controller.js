(function(){
    'use strict';

    angular
        .module('shineEbsApp')
        .controller('kycnonindividualController', ['$scope', '$http', 'restApiFactory','$parse','$location',
        function kycnonindividualController($scope, $http, restApiFactory,$parse,$location){
           
            $scope.kycnonindividualForm = {};
            $scope.applicantType= {};
            $scope.organizationStatus ={};
            $scope.cifdesignation1={};
            $scope.cifdesignation2={};
            $scope.cifdesignation3={};
            $scope.addressType ={};
            $scope.addressDocument ={};
            $scope.district ={};
            $scope.block ={};
            $scope.gp ={};
            $scope.village ={};



//Application Type
restApiFactory("GET", "http://localhost:8989/A_ezi/nonindividual/applicationtype.php", {}
).post(function(responseData){
    if(responseData.status == "200"){
        $scope.applicantType.applicantTypelist = responseData.applicationtypes;
        console.log($scope.applicantType.applicantTypelist);
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedApplicantType = function(){
    console.log("$scope.applicantType.applicantTypeId : ", $scope.applicantType.applicantTypeId);
}


//Organization Status
restApiFactory("GET", "http://localhost:8989/A_ezi/nonindividual/organizationstatus.php", {}
).post(function(responseData){
    if(responseData.status == "200"){
        $scope.organizationStatus.organizationStatuslist = responseData.organizationstatus;
        console.log($scope.organizationStatus.organizationStatuslist);
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedOrganizationStatus = function(){
    console.log("$scope.organizationStatus.organizationStatusId : ", $scope.organizationStatus.organizationStatusId);
}

//Designation1
restApiFactory("GET", "http://localhost:8989/A_ezi/nonindividual/cifdesignation.php", {}
).post(function(responseData){
    if(responseData.status == "200"){
        $scope.cifdesignation1.cifdesignationlist = responseData.designations;
        console.log($scope.cifdesignation1.cifdesignationlist);
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedDesignation1 = function(){
    console.log("$scope.cifdesignation1.cifdesignationId : ", $scope.cifdesignation1.cifdesignationId);
}


//Designation2
restApiFactory("GET", "http://localhost:8989/A_ezi/nonindividual/cifdesignation.php", {}
).post(function(responseData){
    if(responseData.status == "200"){
        $scope.cifdesignation2.cifdesignationlist = responseData.designations;
        console.log($scope.cifdesignation2.cifdesignationlist);
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedDesignation2 = function(){
    console.log("$scope.cifdesignation2.cifdesignationId : ", $scope.cifdesignation2.cifdesignationId);
}


//Designation3
restApiFactory("GET", "http://localhost:8989/A_ezi/nonindividual/cifdesignation.php", {}
).post(function(responseData){
    if(responseData.status == "200"){
        $scope.cifdesignation3.cifdesignationlist = responseData.designations;
        console.log($scope.cifdesignation3.cifdesignationlist);
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedDesignation3 = function(){
    console.log("$scope.cifdesignation3.cifdesignationId : ", $scope.cifdesignation3.cifdesignationId);
}
//Address Type
restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/addresstype.php", {}
).post(function(responseData){
    if(responseData.status == "200"){
       // $scope.districts.districtId = "327";

        $scope.addressType.addressTypelist = responseData.addresstypes;
        console.log( $scope.addressType.addressTypelist );
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedaddressType = function(){
    console.log(" $scope.addressType.addressTypeId : ",$scope.addressType.addressTypeId );
}
//Address Documents
restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/addressDocuments.php", {}
).post(function(responseData){
    if(responseData.status == "200"){
       // $scope.districts.districtId = "327";

        $scope.addressDocument.addressDocumentlist = responseData.addressdocuments;
        console.log($scope.addressDocument.addressDocumentlist );
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedaddressDocument = function(){
    console.log(" $scope.addressDocument.addressDocumentId : ",$scope.addressDocument.addressDocumentId );
}
        //district
restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/district.php", {}
).post(function(responseData){
    if(responseData.status == "200"){
       // $scope.districts.districtId = "327";

        $scope.district.districtlist = responseData.districts;
        console.log(  $scope.district.districtlist);
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedDistrict= function(){
    console.log(" $scope.district.districtId  : ", $scope.district.districtId );


    
//Block
restApiFactory("POST", "http://localhost:8989/A_ezi/kyc/block.php", 
 JSON.stringify({block_id:$scope.district.districtId})
).post(function(responseData){
    if(responseData.status == "200"){
       // $scope.districts.districtId = "327";

        $scope.block.blocklist = responseData.blocks;
        console.log(  $scope.block.blocklist);
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedBlock= function(){
    console.log(" $scope.block.blockId  : ", $scope.block.blockId );
//GP
restApiFactory("POST", "http://localhost:8989/A_ezi/kyc/gp.php", 
 JSON.stringify({gp_id:$scope.block.blockId})
).post(function(responseData){
    if(responseData.status == "200"){

        
        console.log( " $scope.gp.gplist", $scope.gp.gplist);

        if( responseData.gps.isEmpty()) {
            // Object is empty
            var myObj = {
                ID: 101,
                DESC :"GPTest"
            };
            $scope.gp.gplist =myObj;

        } else {
            // Object is NOT empty (would return false in this example)
            $scope.gp.gplist = responseData.gps;
        }


    }else {
        if(responseData.status == "400"){
            var myObj = [{
                ID: 101,
                DESC :"GPTest"
            }];

            $scope.gp.gplist =myObj;
            console.log( " $scope.gp.gplist", $scope.gp.gplist);

        }
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedGP= function(){
    console.log(" $scope.gp.gpId  : ", $scope.gp.gpId );

//Village
restApiFactory("POST", "http://localhost:8989/A_ezi/kyc/village.php", 
JSON.stringify({village_id:  $scope.block.blockId  })
).post(function(responseData){
    if(responseData.status == "200"){
        $scope.village.villagelist = responseData.villages;
        console.log(    $scope.village.villagelist);
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedVillage= function(){
    console.log(" $scope.village.villageId  : ", $scope.village.villageId );
}
}
}
}






        
        }])

  

}());