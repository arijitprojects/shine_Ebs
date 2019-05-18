(function () {
    'use strict';

    angular
        .module('shineEbsApp')
        .controller('kycnonindividualController',  ['$rootScope', '$scope', '$http', 'restApiFactory', '$parse', '$location',
            function kycnonindividualController($rootScope, $scope, $http, restApiFactory, $parse, $location) {
                var loggedInCheck = JSON.stringify($rootScope.globals.currentUser);
                console.log("loggedInCheck : " + loggedInCheck);
                if (loggedInCheck === undefined || loggedInCheck === null || loggedInCheck === 'undefined'
                    || loggedInCheck === 'null') {
                    $location.path("/login");
                } else {
                $scope.kycnonindividualForm = {};
                $scope.applicantType = {};
                $scope.organizationStatus = {};
                $scope.cifdesignation1 = {};
                $scope.cifdesignation2 = {};
                $scope.cifdesignation3 = {};
                $scope.addressType = {};
                $scope.addressDocument = {};
                $scope.district = {};
                $scope.block = {};
                $scope.gp = {};
                $scope.village = {};
                $scope.applicationDefaultType = {};
                $scope.customerstatusid = {};
                $scope.incometype = {};


                //Application Type
                restApiFactory("GET", "http://localhost:8989/A_ezi/nonindividual/applicationtype.php", {}
                ).post(function (responseData) {
                    if (responseData.status == "200") {
                        $scope.applicantType.applicantTypelist = responseData.applicationtypes;
                        console.log($scope.applicantType.applicantTypelist);
                    }
                }, function (responseData) {
                    console.log("Error :", responseData);
                });

                $scope.GetSelectedApplicantType = function () {
                    console.log("$scope.applicantType.applicantTypeId : ", $scope.applicantType.applicantTypeId);
                    if ($scope.applicantType.applicantTypeId == 38) {
                        $scope.applicationDefaultType.applicationTypeId = 19;
                    }
                    if ($scope.applicantType.applicantTypeId == 39) {
                        $scope.applicationDefaultType.applicationTypeId = 11;
                    }
                    //Organization Status
                    restApiFactory("POST",
                        "http://localhost:8989/A_ezi/nonindividual/organizationstatus.php",
                        JSON.stringify({ applicantTypeId: $scope.applicationDefaultType.applicationTypeId })).post(function (responseData) {
                            if (responseData.status == "200") {
                                $scope.organizationStatus.organizationStatuslist = responseData.organizationstatus;
                                console.log($scope.organizationStatus.organizationStatuslist);
                            }
                        }, function (responseData) {
                            console.log("Error :", responseData);
                        });

                    $scope.GetSelectedOrganizationStatus = function () {
                        console.log("$scope.organizationStatus.organizationStatusId : ", $scope.organizationStatus.organizationStatusId);
                    }


                }




                //Designation1
                restApiFactory("GET", "http://localhost:8989/A_ezi/nonindividual/cifdesignation.php", {}
                ).post(function (responseData) {
                    if (responseData.status == "200") {
                        $scope.cifdesignation1.cifdesignationlist = responseData.designations;
                        console.log($scope.cifdesignation1.cifdesignationlist);
                    }
                }, function (responseData) {
                    console.log("Error :", responseData);
                });

                $scope.GetSelectedDesignation1 = function () {
                    console.log("$scope.cifdesignation1.cifdesignationId : ", $scope.cifdesignation1.cifdesignationId);
                }


                //Designation2
                restApiFactory("GET", "http://localhost:8989/A_ezi/nonindividual/cifdesignation.php", {}
                ).post(function (responseData) {
                    if (responseData.status == "200") {
                        $scope.cifdesignation2.cifdesignationlist = responseData.designations;
                        console.log($scope.cifdesignation2.cifdesignationlist);
                    }
                }, function (responseData) {
                    console.log("Error :", responseData);
                });

                $scope.GetSelectedDesignation2 = function () {
                    console.log("$scope.cifdesignation2.cifdesignationId : ", $scope.cifdesignation2.cifdesignationId);
                }

                //Designation3
                restApiFactory("GET", "http://localhost:8989/A_ezi/nonindividual/cifdesignation.php", {}
                ).post(function (responseData) {
                    if (responseData.status == "200") {
                        $scope.cifdesignation3.cifdesignationlist = responseData.designations;
                        console.log($scope.cifdesignation3.cifdesignationlist);
                    }
                }, function (responseData) {
                    console.log("Error :", responseData);
                });

                $scope.GetSelectedDesignation3 = function () {
                    console.log("$scope.cifdesignation3.cifdesignationId : ", $scope.cifdesignation3.cifdesignationId);
                }
                //Address Type
                restApiFactory("GET", "http://localhost:8989/A_ezi/kyc/addresstype.php", {}
                ).post(function (responseData) {
                    if (responseData.status == "200") {
                        // $scope.districts.districtId = "327";

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
                        // $scope.districts.districtId = "327";

                        $scope.addressDocument.addressDocumentlist = responseData.addressdocuments;
                        console.log($scope.addressDocument.addressDocumentlist);
                    }
                }, function (responseData) {
                    console.log("Error :", responseData);
                });

                $scope.GetSelectedaddressDocument = function () {
                    console.log(" $scope.addressDocument.addressDocumentId : ", $scope.addressDocument.addressDocumentId);
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


                    // if ($scope.applicantType.applicantTypeId && $scope.organizationStatus.organizationStatusId &&
                    //     $scope.cifdesignation1.cifdesignationId && $scope.cifdesignation2.cifdesignationId &&
                    //     $scope.cifdesignation3.cifdesignationId && $scope.addressType.addressTypeId &&
                    //     $scope.addressDocument.addressDocumentId && $scope.district.districtId
                    //      && $scope.block.blockId && $scope.gp.gpId
                    //     && $scope.village.villageId && $scope.kycnonindividualForm.FormNo && 
                    //     $scope.kycnonindividualForm.Name_of_Applicant &&
                    //     $scope.kycnonindividualForm.Place_of_Incorporation &&
                    //      $scope.kycnonindividualForm.Registration_Number && $scope.kycnonindividualForm.PAN_NO &&
                    //     $scope.kycnonindividualForm.CIF_For_Authorized_Person1 
                    //     && $scope.kycnonindividualForm.CIF_For_Authorized_Person2 
                    //     && $scope.kycnonindividualForm.CIF_For_Authorized_Person3 &&
                    //     $scope.kycnonindividualForm.Address_for_Correspondence1 
                    //     && $scope.kycnonindividualForm.Address_for_Correspondence2 
                    //     && $scope.kycnonindividualForm.Address_for_Correspondence3
                    //     && $scope.kycnonindividualForm.pin && $scope.kycnonindividualForm.landmark
                    //      && $scope.kycnonindividualForm.Landline_Number &&
                    //     $scope.kycnonindividualForm.Mobile_Number && $scope.kycnonindividualForm.Email
                    //      && $scope.kycnonindividualForm.Gross_Annual_Income &&
                    //     $scope.kycnonindividualForm.Net_Worth && $scope.kycnonindividualForm.Any_Other_Information) {

                    // } else {
                        console.log("has value :  : " + JSON.stringify(
                            {
                                FORM_NO:$scope.kycnonindividualForm.FormNo,                    
                                CUST_TYP_CD:1, 
                                OLD_CUST_NO:$scope.customerstatusid.customerstatusidId,  
                                FULL_NAME:$scope.kycnonindividualForm.Name_of_Applicant , 
                                HAVE_PAN:$scope.kycnonindividualForm.HavePan, 
                                PAN_NO:$scope.kycnonindividualForm.PanNo, 
                                DOB:$scope.kycnonindividualForm.incorporation_date, 
                                GOVT_SCHEME_NM:null, 
                                PARTNER_NO:1, 
                                INCOME:$scope.kycnonindividualForm.Gross_Annual_Income, 
                                INCOME_TYPE_ID:$scope.incometype.incometypeId, 
                                TDS_STATUS_ID:0 ,
                                ENABLE_WEBBANKING:0 ,
                                ENABLE_MOBILEBANKING:0 ,
                                ENABLE_SMSBANKING:0 ,
                                ENABLE_PHONEBANKING:0 ,
                                PRIMARY_RM_STAFF_ID:0 ,
                                CURRENCY_ID:0 ,
                                CUST_SHORT_NAME:null ,
                                CUST_PREFFERED_NAME:null ,
                                CUST_STATUS_ID :1 , 
                                REMARKS:$scope.kycnonindividualForm.Any_Other_Information, 
                                APPROVAL_STATUS_ID:0, 
                                REASON_IF_REJECTED:0, 
                                PUBLIC_KEY:$rootScope.globals.currentUser.authdata.authToken, 
                               
                                ContactNumber:$scope.kycnonindividualForm.Mobile_Number,
                                ContactEmail:$scope.kycnonindividualForm.Email,
                                address1:$scope.kycnonindividualForm.Address_for_Correspondence1,
                                address2:$scope.kycnonindividualForm.Address_for_Correspondence2,
                                address3:$scope.kycnonindividualForm.Address_for_Correspondence3,
                                districtId:$scope.district.districtId,
                                blockId:$scope.block.blockId,
                                gpId:$scope.gp.gpId,
                                villageId:$scope.village.villageId,
                                pin:$scope.kycnonindividualForm.pin,
                                landmark:$scope.kycnonindividualForm.landmark,
                                addressTypeId:$scope.addressType.addressTypeId,
                                addressDocumentId:$scope.addressDocument.addressDocumentId
                            }
                        ));

                        restApiFactory("POST", "http://localhost:8989/A_ezi/nonindividual/nonindividualInsert.php",
                        JSON.stringify({
                            FORM_NO:$scope.kycnonindividualForm.FormNo,                    
                            CUST_TYP_CD:1, 
                            OLD_CUST_NO:$scope.customerstatusid.customerstatusidId,  
                            FULL_NAME:$scope.kycnonindividualForm.Name_of_Applicant , 
                            HAVE_PAN:$scope.kycnonindividualForm.HavePan, 
                            PAN_NO:$scope.kycnonindividualForm.PanNo, 
                            DOB:$scope.kycnonindividualForm.incorporation_date, 
                            GOVT_SCHEME_NM:null, 
                            PARTNER_NO:1, 
                            INCOME:$scope.kycnonindividualForm.Gross_Annual_Income, 
                            INCOME_TYPE_ID:$scope.incometype.incometypeId, 
                            TDS_STATUS_ID:0 ,
                            ENABLE_WEBBANKING:0 ,
                            ENABLE_MOBILEBANKING:0 ,
                            ENABLE_SMSBANKING:0 ,
                            ENABLE_PHONEBANKING:0 ,
                            PRIMARY_RM_STAFF_ID:0 ,
                            CURRENCY_ID:0 ,
                            CUST_SHORT_NAME:null ,
                            CUST_PREFFERED_NAME:null ,
                            CUST_STATUS_ID :1 , 
                            REMARKS:$scope.kycnonindividualForm.Any_Other_Information, 
                            APPROVAL_STATUS_ID:0, 
                            REASON_IF_REJECTED:0, 
                            PUBLIC_KEY:$rootScope.globals.currentUser.authdata.authToken, 
                           
                            ContactNumber:$scope.kycnonindividualForm.Mobile_Number,
                            ContactEmail:$scope.kycnonindividualForm.Email,
                            address1:$scope.kycnonindividualForm.Address_for_Correspondence1,
                            address2:$scope.kycnonindividualForm.Address_for_Correspondence2,
                            address3:$scope.kycnonindividualForm.Address_for_Correspondence3,
                            districtId:$scope.district.districtId,
                            blockId:$scope.block.blockId,
                            gpId:$scope.gp.gpId,
                            villageId:$scope.village.villageId,
                            pin:$scope.kycnonindividualForm.pin,
                            landmark:$scope.kycnonindividualForm.landmark,
                            addressTypeId:$scope.addressType.addressTypeId,
                            addressDocumentId:$scope.addressDocument.addressDocumentId
                        })
                    ).post(function (responseData) {
                        if (responseData.status == "200") {
                            alert('Non Individual Created, click to Home page');
                             $location.path("/");
                        }
                    }, function (responseData) {
                        console.log("Error :", responseData);
                    });


                   // }

                }


            }//else section close


            }])



}());