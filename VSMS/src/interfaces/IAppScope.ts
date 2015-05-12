/// <reference path="../types.ts" />
module app {
    export interface IAppScope extends ng.IScope {
        requestList: Array<IRequest>;
        RequestDetail: IRequest;
        DeleteRequest(index: number): void;
        OnvalueChange(): void;
        AddRequest(): void;
        AddNewRequest(): void;
        BackToHome(): void;
        ViewDetails(index: number): void;
    }
}