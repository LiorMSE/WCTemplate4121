import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    Customer = "Customer",
        CustomerName = "CustomerName",
        bCustomerName = "bCustomerName",
        bCustomerDetails = "bCustomerDetails",
        sCustomerDetails = "sCustomerDetails",
        bCancel = "bCancel",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get CustomerName(): FormControl {
        return this.fg.controls[MgControlName.CustomerName] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}