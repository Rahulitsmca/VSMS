/// <reference path="iappscope.ts" />
module app {
   export interface IRequest {
        firstname: string;
        lastname: string;
        mobilenumber: string;
        vehiclenumber: string;
        address: string;
        pickupdate: Date;
        returndate: Date;
    }
}