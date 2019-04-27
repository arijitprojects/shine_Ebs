(function(){
    'use strict';

    angular
        .module('shineEbsApp')
        .controller('kycindividualController', ['$scope', '$http', 'restApiFactory','$parse','$location',
        function kycindividualController($scope, $http, restApiFactory,$parse,$location){
        $scope.kycindividualForm = {};
        $scope.salutations = {};
        $scope.relationships ={};
        $scope.relationships2 ={};
        $scope.genders ={};
        $scope.maritalStatus ={};
        $scope.religions ={};
        $scope.castes ={};
        $scope.bgroup ={};
        $scope.pidentity ={};
        $scope.addressType ={};
        $scope.addressDocument ={};
         $scope.addressType2 ={};
        $scope.addressDocument2 ={};
        $scope.qualification ={};
        $scope.occupation ={};
        $scope.district ={};
        $scope.block ={};
        $scope.gp ={};
        $scope.village ={};
        $scope.incometype ={};
        $scope.kycindividualForm = {};
        $scope.customerstatusid= {};

        //salutation
        restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/salutation.php", {}
        ).post(function(responseData){
            if(responseData.status == "200"){
               // $scope.districts.districtId = "327";

                $scope.salutations.salutationlist = responseData.salutations;
                console.log( $scope.salutations.salutationlist);
            }
            }, function (responseData){
            console.log("Error :" , responseData);
            });

        $scope.GetSelectedSalutation = function(){
            console.log("$scope.organization.orgId : ", $scope.salutations.salutationId);
        }
        //Relationship
        restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/relationship.php", {}
        ).post(function(responseData){
            if(responseData.status == "200"){
               // $scope.districts.districtId = "327";

                $scope.relationships.relationshiplist = responseData.relationships;
                console.log( $scope. relationships.relationshiplist);
            }
            }, function (responseData){
            console.log("Error :" , responseData);
            });

        $scope.GetSelectedRelationship = function(){
            console.log("$scope. relationships.relationshiplist.relationshipId : ", $scope.relationships.relationshipId);
        }
          //Relationship2
          restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/relationship.php", {}
          ).post(function(responseData){
              if(responseData.status == "200"){
                 // $scope.districts.districtId = "327";
  
                  $scope.relationships2.relationshiplist = responseData.relationships;
                  console.log( $scope. relationships2.relationshiplist);
              }
              }, function (responseData){
              console.log("Error :" , responseData);
              });
  
          $scope.GetSelectedRelationship2 = function(){
              console.log("$scope. relationships2.relationshipId : ", $scope.relationships2.relationshipId);
          }
         //Gender
         restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/gender.php", {}
         ).post(function(responseData){
             if(responseData.status == "200"){
                // $scope.districts.districtId = "327";
 
                 $scope.genders.genderlist = responseData.genders;
                 console.log( $scope.genders.genderlist);
             }
             }, function (responseData){
             console.log("Error :" , responseData);
             });
 
         $scope.GetSelectedGender = function(){
             console.log("$scope.genders.gendersId : ", $scope.genders.genderId);
         }
           //Marital Status
           restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/materialStatus.php", {}
           ).post(function(responseData){
               if(responseData.status == "200"){
                  // $scope.districts.districtId = "327";
   
                   $scope.maritalStatus.maritalStatuslist = responseData.maritalStatus;
                   console.log(  $scope.maritalStatus.maritalStatuslist);
               }
               }, function (responseData){
               console.log("Error :" , responseData);
               });
   
           $scope.GetSelectedmaritalStatus= function(){
               console.log("$scope.mstatuss.mstatusId : ", $scope.maritalStatus.mstatusId);
           }
           //Religion
           restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/religion.php", {}
           ).post(function(responseData){
               if(responseData.status == "200"){
                  // $scope.districts.districtId = "327";
   
                   $scope.religions.religionlist = responseData.religions;
                   console.log( $scope.religions.religionlist);
               }
               }, function (responseData){
               console.log("Error :" , responseData);
               });
   
           $scope.GetSelectedReligion = function(){
               console.log("$scope.religions.religionId : ", $scope.religions.religionId);
           }

  //Caste
  restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/caste.php", {}
  ).post(function(responseData){
      if(responseData.status == "200"){
         // $scope.districts.districtId = "327";

          $scope.castes.castelist = responseData.castes;
          console.log( $scope.castes.castelist );
      }
      }, function (responseData){
      console.log("Error :" , responseData);
      });

  $scope.GetSelectedCaste = function(){
      console.log("$scope.caste.casteId : ", $scope.caste.casteId);
  }
//Blood group
restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/bloodgroup.php", {}
).post(function(responseData){
    if(responseData.status == "200"){
       // $scope.districts.districtId = "327";

        $scope.bgroup.bgrouplist = responseData.bloodgroups;
        console.log( $scope.bgroup.bgrouplist );
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedbgroup = function(){
    console.log(" $scope.bgroup.bgroupId : ", $scope.bgroup.bgroupId);
}
//Proof of Identity
restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/identityproof.php", {}
).post(function(responseData){
    if(responseData.status == "200"){
       // $scope.districts.districtId = "327";

        $scope.pidentity.pidentitylist = responseData.identitys;
        console.log( $scope.pidentity.pidentitylist );
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedIdentity = function(){
    console.log(" $scope.pidentity.pidentityId : ", $scope.pidentity.pidentityId);
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


//Address Type2
restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/addresstype.php", {}
).post(function(responseData){
    if(responseData.status == "200"){
       // $scope.districts.districtId = "327";

        $scope.addressType2.addressTypelist = responseData.addresstypes;
        console.log( $scope.addressType2.addressTypelist );
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedaddressType2 = function(){
    console.log(" $scope.addressType2.addressTypeId : ",$scope.addressType2.addressTypeId );
}
//Address Documents2
restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/addressDocuments.php", {}
).post(function(responseData){
    if(responseData.status == "200"){
       // $scope.districts.districtId = "327";

        $scope.addressDocument2.addressDocumentlist = responseData.addressdocuments;
        console.log($scope.addressDocument2.addressDocumentlist );
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedaddressDocument2 = function(){
    console.log(" $scope.addressDocument2.addressDocumentId : ",$scope.addressDocument2.addressDocumentId );
}





//Qualification
restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/qualification.php", {}
).post(function(responseData){
    if(responseData.status == "200"){
       // $scope.districts.districtId = "327";

        $scope.qualification.qualificationtlist = responseData.qualifications;
        console.log($scope.qualification.qualificationtlist );
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedQualification= function(){
    console.log(" $scope.qualification.qualificationId  : ", $scope.qualification.qualificationId );
}

//occupation
restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/occupation.php", {}
).post(function(responseData){
    if(responseData.status == "200"){
       // $scope.districts.districtId = "327";

        $scope.occupation.occupationlist = responseData.occupations;
        console.log($scope.occupation.occupationlist );
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedOccupation= function(){
    console.log(" $scope.occupation.occupationId  : ", $scope.occupation.occupationId );
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

 //Income type
 restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/incomeType.php", {}
 ).post(function(responseData){
     if(responseData.status == "200"){
         $scope.incometype.incometypelist = responseData.incomeTypes;
         console.log($scope.incometype.incometypelist);
     }
     }, function (responseData){
     console.log("Error :" , responseData);
     });

 $scope.GetSelectedIncometype = function(){
     console.log("$scope.incometype.incometypeId : ", $scope.incometype.incometypeId);
 }

//Customer Status Id
restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/customerstatusid.php", {}
).post(function(responseData){
    if(responseData.status == "200"){
        $scope.customerstatusid.customerstatusidlist = responseData.customerstatusids;
        console.log($scope.customerstatusid.customerstatusidlist);
    }
    }, function (responseData){
    console.log("Error :" , responseData);
    });

$scope.GetSelectedCustomerstatusid = function(){
    console.log("$scope.customerstatusid.customerstatusidId : ", $scope.customerstatusid.customerstatusidId);
}





        
        
        }])

  

}());