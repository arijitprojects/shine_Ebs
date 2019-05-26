(function(){
    'use strict';

    angular
        .module('shineEbsApp')
        .controller('shareaccountController', ['$scope', '$http', 'restApiFactory','$parse','$location',
        function shareaccountController($scope, $http, restApiFactory,$parse,$location){
        
            $scope.share = {};
            $scope.share.has_cif_details={};
            $scope.has_cif_values = [];
            $scope.share.has_no_cif_details={};
            $scope.has_no_cif_values = [];
            $scope.finalvalue = [];
            $scope.finalvalue11 = [];
            $scope.myData=[{"project": "wewe2012"}];
            $scope.has_cif_addmore={};
            $scope.share.has_cif_addmore=[];
            $scope.share.nomineeValues = [{
                value: 'yes',
                checked: true,
                name: "Yes (If Nominee Have CIF)"
            }, {
                value: 'no',
                checked: false,
                name: "No (If Nominee does not Have CIF)"
            }];
            //on change radio button yes or no
            $scope.selectYesOrNo = function(value) {
                console.log(value);
                if(value =='yes'){
                   
                    $scope.has_no_cif_values=[];
                    $scope.finalvalue11 = [];
                }
                 if(value =='no'){
                    $scope.has_cif_values=[];
                    $scope.finalvalue = [];
                }
           }

         //Share Class
         restApiFactory("GET", "http://localhost:8989/A_ezi/share/shareClass.php", {}
         ).post(function (responseData) {
             if (responseData.status == "200") {

                 $scope.shareClasses = responseData.shareClass;
                 console.log($scope.shareClasses);
             }
         }, function (responseData) {
             console.log("Error :", responseData);
         });

         $scope.GetSelectedshare = function () {
             console.log("$scopeshare.shareClassIdId : ", $scope.share.shareClassIdId);
         }
         //Submit cif
         $scope.submitCIFForm = function () {
            restApiFactory("POST", "http://localhost:8989/A_ezi/customermapping/fetchWithCif.php",
                JSON.stringify({ CIF_NO: $scope.share.Membership_No_CIF_No})).post(function (responseData) {
                    if (responseData.status == "200") {
                        //  $scope.gp.gpId = "339";

                        $scope.share.cif_details = responseData.cifinfo;
                        console.log($scope.share.cif_details);
                    }
                }, function (responseData) {
                    console.log("Error :", responseData);
                });
        }
//has cif relationship

restApiFactory("GET", "http://localhost:8989/A_ezi/share/relationship.php", {}
).post(function (responseData) {
    if (responseData.status == "200") {

        $scope.relationshipTypes_hasCIF = responseData.relationships;
        console.log($scope.relationshipTypes_hasCIF);
    }
}, function (responseData) {
    console.log("Error :", responseData);
});

$scope.GetSelectedrelationship_hasCIF = function () {
    console.log("$scope.share.has_cif_addmore.cif_present_relationshipId : ", 
    $scope.has_cif_addmore.cif_present_relationshipId);
}
//No cif relationship

restApiFactory("GET", "http://localhost:8989/A_ezi/share/relationship.php", {}
).post(function (responseData) {
    if (responseData.status == "200") {

        $scope.relationshipTypes_noCIF = responseData.relationships;
        console.log($scope.relationshipTypes_noCIF);
    }
}, function (responseData) {
    console.log("Error :", responseData);
});

$scope.GetSelectedrelationship_noCIF = function () {
    console.log("$scope.share.no_cif_addmore.cif_not_present_relationshipId : ", $scope.share.no_cif_addmore.cif_not_present_relationshipId);
}
//Age checking

$scope.myAgeCheckingFunc = function() {
    $scope.share.no_cif_addmore.isMinor=false;
    if($scope.share.no_cif_addmore.no_cif_Nominee_Age.length == 0 ||
         $scope.share.no_cif_addmore.no_cif_Nominee_Age == 'null'
    || $scope.share.no_cif_addmore.no_cif_Nominee_Age == null){
        $scope.share.isMinor=false;
    }
    if ( !isNaN($scope.share.no_cif_addmore.no_cif_Nominee_Age)
     && angular.isNumber(+$scope.share.no_cif_addmore.no_cif_Nominee_Age)) {

        if($scope.share.no_cif_addmore.no_cif_Nominee_Age< 18){
            $scope.share.no_cif_addmore.isMinor=true;
        }
    }else{
        alert('age should be number');
    }
};


 //Add more has cif
 $scope.AddMoreHasCif = function () {
             for (var i = 0; i < ( $scope.myData.length); i++) { 
             $scope.myObject={};
             angular.forEach($scope.has_cif_addmore, function(value, key) {
                //console.log(key + ': ' + value);
                if(key =='has_cif_Nominee_CIF_No'){
                    $scope.myObject.has_cif_Nominee_CIF_No=value;
                }
                if(key =='has_cif_Percent_of_Share'){
                    $scope.myObject.has_cif_Percent_of_Share=value;
                }
                if(key =='cif_present_relationshipId'){
                    $scope.myObject.cif_present_relationshipId=value;
                }
              
              });
              $scope.myObject.HasCIF= $scope.share.HasCIF;
               $scope.myObject.HasNominee= $scope.share.HasNominee;

$scope.finalvalue.push($scope.myObject);
  
            }
$scope.has_cif_addmore={};
console.log("data after:",  $scope.finalvalue);
}
//Add more no cif
$scope.AddMoreDoesNotHaveCif = function () {
    // $scope.share.has_no_cif_details={};
    // $scope.has_no_cif_values = [];

    // $scope.has_no_cif_details= $scope.share.no_cif_addmore;
    // $scope.has_no_cif_details.HasCIF= $scope.share.HasCIF;
    // $scope.has_no_cif_details.HasNominee= $scope.share.HasNominee;
    // // $scope.share.has_cif_details={ HasCIF: "test",};
    // $scope.has_no_cif_values.push($scope.has_no_cif_details);
    // console.log("data :",  $scope.has_no_cif_values);


    for (var i = 0; i < ( $scope.myData.length); i++) { 
        $scope.myObject={};
        angular.forEach($scope.share.no_cif_addmore, function(value, key) {
           console.log(key + ': ' + value);
           if(key =='no_cif_Nominee_Name'){
               $scope.myObject.no_cif_Nominee_Name=value;
           }
           if(key =='no_cif_Nominee_Address'){
               $scope.myObject.no_cif_Nominee_Address=value;
           }
           if(key =='no_cif_Nominee_Age'){
               $scope.myObject.no_cif_Nominee_Age=value;
           }
           if(key =='isMinor'){
            $scope.myObject.isMinor=value;
        }
        if(key =='no_cif_Phone_no'){
            $scope.myObject.no_cif_Phone_no=value;
        }
        if(key =='cif_not_present_relationshipId'){
            $scope.myObject.cif_not_present_relationshipId=value;
        }
        if(key =='no_cif_Persentage_Of_Share'){
            $scope.myObject.no_cif_Persentage_Of_Share=value;
        }
         });
         $scope.myObject.HasCIF= $scope.share.HasCIF;
          $scope.myObject.HasNominee= $scope.share.HasNominee;

        $scope.finalvalue11.push($scope.myObject);

       }
       $scope.share.no_cif_addmore={};
      console.log("data after:",  $scope.finalvalue11);

    }
    
   
      //submit form
        $scope.submitForm = function () {
            $scope.myData.shareClassIdId =$scope.share.shareClassIdId;
            $scope.myData.Membership_No_CIF_No =$scope.share.Membership_No_CIF_No;
            $scope.myData.cif_details=$scope.share.cif_details;
            $scope.myData.Ac_Opening_Date=$scope.share.Ac_Opening_Date;
            $scope.myData.Ledger_No=$scope.share.Ledger_No;
            $scope.myData.Folio_No=$scope.share.Folio_No;
            $scope.myData.Reference_Ac_No=$scope.share.Reference_Ac_No;
           
            $scope.myData.has_no_cif_values= $scope.finalvalue11;
           
            $scope.myData.has_cif_values=$scope.finalvalue;
            console.log("before submit data :",   $scope.myData);


            if (isEmpty($scope.myData.has_no_cif_values)) {   
                //  empty $scope.myData.has_no_cif_values
                console.log("has_no_cif_values empty");

                console.log("final submit data :" , JSON.stringify(
                    {
                        shareClassIdId:  $scope.myData.shareClassIdIds,
                        Membership_No_CIF_No:  $scope.myData.Membership_No_CIF_No,
                        cif_details:  $scope.myData.cif_details,
                        Ac_Opening_Date:  $scope.myData.Ac_Opening_Date,
                        Ledger_No:  $scope.myData.Ledger_No,
                        Folio_No:  $scope.myData.Folio_No,
                        Reference_Ac_No:  $scope.myData.Reference_Ac_No,
                        has_cif_values:  $scope.myData.has_cif_values,
                        whichData:'hasCif'
                                         
                    }
                     
                     ));


             }
             if (isEmpty($scope.myData.has_cif_values)) {   
                //  empty $scope.myData.has_no_cif_values
                console.log("has_cif_values empty");

                console.log("final submit data :" , JSON.stringify(
                    {
                        shareClassIdId:  $scope.myData.shareClassIdIds,
                        Membership_No_CIF_No:  $scope.myData.Membership_No_CIF_No,
                        cif_details:  $scope.myData.cif_details,
                        Ac_Opening_Date:  $scope.myData.Ac_Opening_Date,
                        Ledger_No:  $scope.myData.Ledger_No,
                        Folio_No:  $scope.myData.Folio_No,
                        Reference_Ac_No:  $scope.myData.Reference_Ac_No,
                        has_no_cif_values:  $scope.myData.has_no_cif_values,
                        whichData:'noCif'
                                         
                    }
                     
                     ));
             }


        }
        function isEmpty(obj) {
            for(var key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
        
        }])

  

}());