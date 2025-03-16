export interface ISnackBarManagerService{
    show(message: string, action?: string, duration?:number):void;
}