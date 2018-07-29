import { Injectable } from '@angular/core';
declare var apigClientFactory: any;

@Injectable()
export class ApiGatewayService {
    
    constructor() {
    }

    apiGateWayMethod(){
        var apigClient = apigClientFactory.newClient();

        var params = {
            //This is where path request params go. 
            //userId: '1234',
        };
        var body = {
            // This is where you define the body of the request,
        };
          
        var additionalParams = {
            queryParams: {
                make: 'Acura',
                year: '2000'
            }
        };
        apigClient.modelGet(params, body, additionalParams)
            .then(function(result){
                console.log("Get Request Successful!", result.data);
                return result;
            // Add success callback code here.
            }).catch( function(result){
                console.log("There was an error with the request!", result);
                return result;
            // Add error callback code here.
        });
        return false;
    }
}