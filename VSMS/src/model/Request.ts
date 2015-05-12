/// <reference path="../types.ts" />
module app {
   export class Request implements IRequest {
        firstname: string;
        lastname: string;
        mobilenumber: string;
        vehiclenumber: string;
        address: string;
        pickupdate: Date;
        returndate: Date;
        constructor(
            firstname: string,
            lastname: string,
            mobilenumber: string,
            vehiclenumber: string,
            address: string,
            pickupdate: Date,
            returndate: Date
            ) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.mobilenumber = mobilenumber;
            this.vehiclenumber = vehiclenumber;
            this.address = address;
            this.pickupdate = pickupdate;
            this.returndate = returndate;
        }
    }
}