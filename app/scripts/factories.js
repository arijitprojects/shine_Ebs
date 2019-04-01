(function(){
    'use strict';
    angular
        .module('shineEbsApp')
            .factory("restApiFactory",[
                "$http",
                function restApiFactory($http){
                    return function(method, url, inputObj){
                        console.log('url',url);
                        console.log('method',method);
                        if(method =="GET"){
                            return new restApiGET($http,method,url,inputObj);

                        }
                        if(method =="POST"){
                            return new restApiPOST($http,method,url,inputObj);

                        }
                    };
                }
            ]);
            function restApiGET($http,method,url,inputObj){
                console.log('url',url);
                this.post=function(successCallback, errorCallback){
                    $http({
                        method:method,
                        url:url,
                            data:inputObj
                    }).then(function successBlock(responseData){
                        successCallback(responseData.data);
                    }, function errorBlock(responseData){
                        if(responseData !== undefined){
                            if(responseData.status === 401){
                                console.log("unauthorised", responseData);
                                errorCallback(responseData.data);
                            } 
                            else if(responseData.status === 403){
                                errorCallback(responseData.data);
                            }
                            else{
                                console.log("unauthorised", responseData);
                                errorCallback(responseData.data);
                            }
                        }
                    });
                };
            }

            function restApiPOST($http,method,url,inputObj){
                console.log('url',url);
                this.post=function(successCallback, errorCallback){
                    $http({
                        method:method,
                        url:url,
                        headers:{'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'},
                       // headers:{'Content-Type' : 'application/json'},
                        data:inputObj
                    }).then(function successBlock(responseData){
                        successCallback(responseData.data);
                    }, function errorBlock(responseData){
                        if(responseData !== undefined){
                            if(responseData.status === 401){
                                console.log("unauthorised", responseData);
                                errorCallback(responseData.data);
                            } 
                            else if(responseData.status === 403){
                                errorCallback(responseData.data);
                            }
                            else{
                                console.log("unauthorised", responseData);
                                errorCallback(responseData.data);
                            }
                        }
                    });
                };
            }
}());