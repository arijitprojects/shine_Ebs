(function () {
    'use strict';

    angular
        .module('shineEbsApp')
        .controller('kycindividualController', ['$rootScope', '$scope', '$http', 'restApiFactory', '$parse', '$location',
            function kycindividualController($rootScope, $scope, $http, restApiFactory, $parse, $location) {

                var loggedInCheck = JSON.stringify($rootScope.globals.currentUser);
                console.log("loggedInCheck : " + loggedInCheck);
                if (loggedInCheck === undefined || loggedInCheck === null || loggedInCheck === 'undefined'
                    || loggedInCheck === 'null') {
                    $location.path("/login");
                } else {


                    $scope.kycindividualForm = {};
                    $scope.salutations = {};
                    $scope.relationships = {};
                    $scope.relationships2 = {};
                    $scope.genders = {};
                    $scope.maritalStatus = {};
                    $scope.religions = {};
                    $scope.castes = {};
                    $scope.bgroup = {};
                    $scope.pidentity = {};
                    $scope.addressType = {};
                    $scope.addressDocument = {};
                    $scope.addressType2 = {};
                    $scope.addressDocument2 = {};
                    $scope.qualification = {};
                    $scope.occupation = {};
                    $scope.district = {};
                    $scope.block = {};
                    $scope.gp = {};
                    $scope.village = {};
                    $scope.incometype = {};
                    $scope.customerstatusid = {};
                   // $scope.kycindividualForm.PanNo ='';
                    //salutation
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/salutation.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {

                            $scope.salutations.salutationlist = responseData.salutations;
                            console.log($scope.salutations.salutationlist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedSalutation = function () {
                        console.log("$scope.organization.orgId : ", $scope.salutations.salutationId);
                    }
                    //Relationship
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/relationship.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {

                            $scope.relationships.relationshiplist = responseData.relationships;
                            console.log($scope.relationships.relationshiplist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedRelationship = function () {
                        console.log("$scope. relationships.relationshiplist.relationshipId : ", $scope.relationships.relationshipId);
                    }
                    //Relationship2
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/relationship.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {

                            $scope.relationships2.relationshiplist = responseData.relationships;
                            console.log($scope.relationships2.relationshiplist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedRelationship2 = function () {
                        console.log("$scope. relationships2.relationshipId : ", $scope.relationships2.relationshipId);
                    }
                    //Gender
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/gender.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {

                            $scope.genders.genderlist = responseData.genders;
                            console.log($scope.genders.genderlist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedGender = function () {
                        console.log("$scope.genders.gendersId : ", $scope.genders.genderId);
                    }
                    //Marital Status
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/materialStatus.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {

                            $scope.maritalStatus.maritalStatuslist = responseData.maritalStatus;
                            console.log($scope.maritalStatus.maritalStatuslist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedmaritalStatus = function () {
                        console.log("$scope.mstatuss.mstatusId : ", $scope.maritalStatus.mstatusId);
                    }
                    //Religion
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/religion.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {

                            $scope.religions.religionlist = responseData.religions;
                            console.log($scope.religions.religionlist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedReligion = function () {
                        console.log("$scope.religions.religionId : ", $scope.religions.religionId);
                    }

                    //Caste
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/caste.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {

                            $scope.castes.castelist = responseData.castes;
                            console.log($scope.castes.castelist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedCaste = function () {
                        console.log("$scope.caste.casteId : ", $scope.caste.casteId);
                    }
                    //Blood group
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/bloodgroup.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {

                            $scope.bgroup.bgrouplist = responseData.bloodgroups;
                            console.log($scope.bgroup.bgrouplist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedbgroup = function () {
                        console.log(" $scope.bgroup.bgroupId : ", $scope.bgroup.bgroupId);
                    }
                    //Proof of Identity
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/identityproof.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {

                            $scope.pidentity.pidentitylist = responseData.identitys;
                            console.log($scope.pidentity.pidentitylist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedIdentity = function () {
                        console.log(" $scope.pidentity.pidentityId : ", $scope.pidentity.pidentityId);
                    }
                    //Address Type
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/addresstype.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {

                            $scope.addressType.addressTypelist = responseData.addresstypes;
                            console.log($scope.addressType.addressTypelist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedaddressType = function () {
                        console.log(" $scope.addressType.addressTypeId : ", $scope.addressType.addressTypeId);
                    }
                    //Address Documents
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/addressDocuments.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {

                            $scope.addressDocument.addressDocumentlist = responseData.addressdocuments;
                            console.log($scope.addressDocument.addressDocumentlist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedaddressDocument = function () {
                        console.log(" $scope.addressDocument.addressDocumentId : ", $scope.addressDocument.addressDocumentId);
                    }


                    //Address Type2
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/addresstype.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {

                            $scope.addressType2.addressTypelist = responseData.addresstypes;
                            console.log($scope.addressType2.addressTypelist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedaddressType2 = function () {
                        console.log(" $scope.addressType2.addressTypeId : ", $scope.addressType2.addressTypeId);
                    }
                    //Address Documents2
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/addressDocuments.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {

                            $scope.addressDocument2.addressDocumentlist = responseData.addressdocuments;
                            console.log($scope.addressDocument2.addressDocumentlist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedaddressDocument2 = function () {
                        console.log(" $scope.addressDocument2.addressDocumentId : ", $scope.addressDocument2.addressDocumentId);
                    }





                    //Qualification
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/qualification.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {
                            // $scope.districts.districtId = "327";

                            $scope.qualification.qualificationtlist = responseData.qualifications;
                            console.log($scope.qualification.qualificationtlist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedQualification = function () {
                        console.log(" $scope.qualification.qualificationId  : ", $scope.qualification.qualificationId);
                    }

                    //occupation
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/occupation.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {
                            // $scope.districts.districtId = "327";

                            $scope.occupation.occupationlist = responseData.occupations;
                            console.log($scope.occupation.occupationlist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedOccupation = function () {
                        console.log(" $scope.occupation.occupationId  : ", $scope.occupation.occupationId);
                    }
                    //district
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/district.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {
                            // $scope.districts.districtId = "327";

                            $scope.district.districtlist = responseData.districts;
                            console.log($scope.district.districtlist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedDistrict = function () {
                        console.log(" $scope.district.districtId  : ", $scope.district.districtId);



                        //Block
                        restApiFactory("POST", "http://localhost:8989/A_ezi/kyc/block.php",
                            JSON.stringify({ block_id: $scope.district.districtId })
                        ).post(function (responseData) {
                            if (responseData.status == "200") {
                                // $scope.districts.districtId = "327";

                                $scope.block.blocklist = responseData.blocks;
                                console.log($scope.block.blocklist);
                            }
                        }, function (responseData) {
                            console.log("Error :", responseData);
                        });

                        $scope.GetSelectedBlock = function () {
                            console.log(" $scope.block.blockId  : ", $scope.block.blockId);
                            //GP
                            restApiFactory("POST", "http://localhost:8989/A_ezi/kyc/gp.php",
                                JSON.stringify({ gp_id: $scope.block.blockId })
                            ).post(function (responseData) {
                                if (responseData.status == "200") {


                                    console.log(" $scope.gp.gplist", $scope.gp.gplist);

                                    if (responseData.gps.isEmpty()) {
                                        // Object is empty
                                        var myObj = {
                                            ID: 101,
                                            DESC: "GPTest"
                                        };
                                        $scope.gp.gplist = myObj;

                                    } else {
                                        // Object is NOT empty (would return false in this example)
                                        $scope.gp.gplist = responseData.gps;
                                    }


                                } else {
                                    if (responseData.status == "400") {
                                        var myObj = [{
                                            ID: 101,
                                            DESC: "GPTest"
                                        }];

                                        $scope.gp.gplist = myObj;
                                        console.log(" $scope.gp.gplist", $scope.gp.gplist);

                                    }
                                }
                            }, function (responseData) {
                                console.log("Error :", responseData);
                            });

                            $scope.GetSelectedGP = function () {
                                console.log(" $scope.gp.gpId  : ", $scope.gp.gpId);

                                //Village
                                restApiFactory("POST", "http://localhost:8989/A_ezi/kyc/village.php",
                                    JSON.stringify({ village_id: $scope.block.blockId })
                                ).post(function (responseData) {
                                    if (responseData.status == "200") {
                                        $scope.village.villagelist = responseData.villages;
                                        console.log($scope.village.villagelist);
                                    }
                                }, function (responseData) {
                                    console.log("Error :", responseData);
                                });

                                $scope.GetSelectedVillage = function () {
                                    console.log(" $scope.village.villageId  : ", $scope.village.villageId);
                                }
                            }

                        }

                    }

                    //Income type
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/incomeType.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {
                            $scope.incometype.incometypelist = responseData.incomeTypes;
                            console.log($scope.incometype.incometypelist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedIncometype = function () {
                        console.log("$scope.incometype.incometypeId : ", $scope.incometype.incometypeId);
                    }

                    //Customer Status Id
                    restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/customerstatusid.php", {}
                    ).post(function (responseData) {
                        if (responseData.status == "200") {
                            $scope.customerstatusid.customerstatusidlist = responseData.customerstatusids;
                            console.log($scope.customerstatusid.customerstatusidlist);
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });

                    $scope.GetSelectedCustomerstatusid = function () {
                        console.log("$scope.customerstatusid.customerstatusidId : ", $scope.customerstatusid.customerstatusidId);
                    }

                    $scope.submitForm = function () {

                      /*   if ($scope.salutations.salutationId && $scope.relationships.relationshipId &&
                            $scope.relationships2.relationshipId && $scope.genders.genderId
                             && $scope.maritalStatus.mstatusId
                            && $scope.religions.religionId && $scope.caste.casteId && $scope.bgroup.bgroupId
                            && $scope.pidentity.pidentityId && $scope.addressType.addressTypeId
                            && $scope.addressDocument.addressDocumentId && $scope.addressType2.addressTypeId
                            && $scope.addressDocument2.addressDocumentId && $scope.qualification.qualificationId
                            && $scope.occupation.occupationId && $scope.district.districtId && $scope.block.blockId
                            && $scope.gp.gpId && $scope.village.villageId && $scope.incometype.incometypeId
                            && $scope.customerstatusid.customerstatusidId
                            && $scope.kycindividualForm.Br_dob_Date 
                            && $scope.kycindividualForm.FormNo && $scope.kycindividualForm.IndFName 
                            && $scope.kycindividualForm.IndMName
                            && $scope.kycindividualForm.IndLNamem && $scope.kycindividualForm.FthrName 
                            && $scope.kycindividualForm.MothrName
                            && $scope.kycindividualForm.HavePan && $scope.kycindividualForm.PanNo 
                            && $scope.kycindividualForm.Aadhaar
                            && $scope.kycindividualForm.isminor && $scope.kycindividualForm.gucifno 
                            && $scope.kycindividualForm.isLunatic
                            && $scope.kycindividualForm.idmark && $scope.kycindividualForm.address1 
                            && $scope.kycindividualForm.address2
                            && $scope.kycindividualForm.address3 && $scope.kycindividualForm.pin 
                            && $scope.kycindividualForm.landmark
                            && $scope.kycindividualForm.livingsince && $scope.kycindividualForm.ContactNumber
                            && $scope.kycindividualForm.ContactEmail && $scope.kycindividualForm.gannualinc
                            && $scope.kycindividualForm.networth && $scope.kycindividualForm.otherinfo) {

                        }else{ */
                            /* console.log("has value :  : "+JSON.stringify(
                                {
                                    HAVE_PAN:$scope.kycindividualForm.HavePan,
                                    IS_LUNATIC:$scope.kycindividualForm.isLunatic,
                                     IS_MINOR:$scope.kycindividualForm.isminor,
                                     HAVE_ADHAAR:$scope.kycindividualForm.adhar ,
                                     IS_NONRESIDENT:$scope.kycindividualForm.is_non_resident 

                                })); */

                            if($scope.kycindividualForm.PanNo === '' ||
                                 typeof $scope.kycindividualForm.PanNo === 'undefined'){
                                    $scope.kycindividualForm.PanNo =null;
                            }

                            if($scope.kycindividualForm.aadharNo === '' ||
                            typeof $scope.kycindividualForm.aadharNo === 'undefined'){
                               $scope.kycindividualForm.aadharNo =null;
                            }
                            if($scope.kycindividualForm.g_cif_No === '' ||
                            typeof $scope.kycindividualForm.g_cif_No === 'undefined'){
                               $scope.kycindividualForm.g_cif_No =null;
                            }
                            if($scope.relationships2.relationshipId === '' ||
                            typeof $scope.relationships2.relationshipId === 'undefined'){
                               $scope.relationships2.relationshipId =null;
                            }
                            if($scope.kycindividualForm.HavePan==false){
                                $scope.kycindividualForm.HavePan =0
                            }else{
                                $scope.kycindividualForm.HavePan=1
                            }
                            if($scope.kycindividualForm.adhar==false){
                                $scope.kycindividualForm.adhar=0;
                            }else{
                                $scope.kycindividualForm.adhar=1;
                            }
                            if($scope.kycindividualForm.isminor==false){
                                $scope.kycindividualForm.isminor=0;
                            }else{
                                $scope.kycindividualForm.isminor=1;
                            }
                           if($scope.kycindividualForm.isLunatic==false){
                            $scope.kycindividualForm.isLunatic=0;
                           }else{
                            $scope.kycindividualForm.isLunatic=1;
                           }
                           if($scope.kycindividualForm.is_non_resident ==false){
                            $scope.kycindividualForm.is_non_resident=0
                           }else{
                            $scope.kycindividualForm.is_non_resident=1;
                           }

                             console.log("has value :  : "+JSON.stringify(
                                {  
                                    FORM_NO:$scope.kycindividualForm.FormNo,
                                    OLD_CUST_NO:$scope.customerstatusid.customerstatusidId ,
                                    SALUTATION_ID:$scope.salutations.salutationId,
                                    FIRST_NAME:$scope.kycindividualForm.IndFName,
                                    MIDDLE_NAME:$scope.kycindividualForm.IndMName,
                                    LAST_NAME:$scope.kycindividualForm.IndLName,
                                    FULL_NAME:$scope.kycindividualForm.IndFName+" "+$scope.kycindividualForm.IndMName+" "+ $scope.kycindividualForm.IndLName,
                                    FATH_SPOU_NAME:$scope.kycindividualForm.FthrName,
                                    RELATION_TYPE_ID:$scope.relationships.relationshipId,
                                    MOTH_MAIDEN_NAME:$scope.kycindividualForm.MothrName,
                                    HAVE_PAN:$scope.kycindividualForm.HavePan,
                                    PAN_NO:$scope.kycindividualForm.PanNo,
                                    HAVE_ADHAAR:$scope.kycindividualForm.adhar ,
                                    ADHAAR_NO:$scope.kycindividualForm.aadharNo,
                                    DOB:$scope.kycindividualForm.Br_dob_Date ,
                                    MARITAL_STATUS_ID:$scope.maritalStatus.mstatusId,
                                    GENDER_ID:$scope.genders.genderId,
                                    RELIGION_ID:$scope.religions.religionId,
                                    CASTE_ID:$scope.caste.casteId,
                                    BLOOD_GRP_ID:$scope.bgroup.bgroupId,
                                    EDU_QLF_ID:$scope.qualification.qualificationId,
                                    OCCUPATION_ID:$scope.occupation.occupationId,
                                    IS_MINOR:$scope.kycindividualForm.isminor,
                                    IS_LUNATIC:$scope.kycindividualForm.isLunatic,
                                    GURDIAN_KYC_ID:$scope.kycindividualForm.g_cif_No ,
                                    GURDIAN_REL_ID:$scope.relationships2.relationshipId ,
                                    IS_NONRESIDENT:$scope.kycindividualForm.is_non_resident ,
                                    INCOME:$scope.kycindividualForm.gannualinc ,
                                    INCOME_TYPE_ID:$scope.incometype.incometypeId ,
                                    TDS_STATUS_ID:0 ,
                                    ENABLE_WEBBANKING:0 ,
                                    ENABLE_MOBILEBANKING:0 ,
                                    ENABLE_SMSBANKING:0 ,
                                    ENABLE_PHONEBANKING:0 ,
                                    PRIMARY_RM_STAFF_ID:0 ,
                                    CURRENCY_ID:0 ,
                                    CUST_SHORT_NAME:null ,
                                    CUST_PREFFERED_NAME:null ,
                                    CUST_STATUS_ID :0 ,
                                    IDENTIFICATION_MARKS:$scope.pidentity.pidentityId ,
                                    PUBLIC_KEY:$rootScope.globals.currentUser.authdata.authToken ,

                                    as_on_date:$scope.kycindividualForm.as_on_date,
                                    otherinfo:$scope.kycindividualForm.otherinfo,
                                    livingsince:$scope.kycindividualForm.livingsince,
                                    ContactNumber:$scope.kycindividualForm.ContactNumber,
                                    ContactEmail:$scope.kycindividualForm.ContactEmail,
                                    address1:$scope.kycindividualForm.address1,
                                    address2:$scope.kycindividualForm.address2,
                                    address3:$scope.kycindividualForm.address3,
                                    districtId:$scope.district.districtId,
                                    blockId:$scope.block.blockId,
                                    gpId:$scope.gp.gpId,
                                    villageId:$scope.village.villageId,
                                    pin:$scope.kycindividualForm.pin,
                                    landmark:$scope.kycindividualForm.landmark,
                                    pidentityId:$scope.pidentity.pidentityId,
                                    addressTypeId:$scope.addressType.addressTypeId,
                                    addressDocumentId:$scope.addressDocument.addressDocumentId,
                                    addressTypeId2:$scope.addressType2.addressTypeId,
                                    addressDocumentId2:$scope.addressDocument2.addressDocumentId



                                })); 
                        }

                    }
              //  } //else section close



            }])



}());