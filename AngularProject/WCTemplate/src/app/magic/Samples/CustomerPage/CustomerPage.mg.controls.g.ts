import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CustomerPage = "CustomerPage",
        ErrorMessage = "ErrorMessage",
        CustomerName = "CustomerName",
        IsActive = "IsActive",
        CustomerEmail = "CustomerEmail",
        CustomerCreateDate = "CustomerCreateDate",
        CustomerCreateTime = "CustomerCreateTime",
        CustomerRemarks = "CustomerRemarks",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get ErrorMessage(): FormControl {
        return this.fg.controls[MgControlName.ErrorMessage] as FormControl;
    }

    get CustomerName(): FormControl {
        return this.fg.controls[MgControlName.CustomerName] as FormControl;
    }

    get IsActive(): FormControl {
        return this.fg.controls[MgControlName.IsActive] as FormControl;
    }

    get CustomerEmail(): FormControl {
        return this.fg.controls[MgControlName.CustomerEmail] as FormControl;
    }

    get CustomerCreateDate(): FormControl {
        return this.fg.controls[MgControlName.CustomerCreateDate] as FormControl;
    }

    get CustomerCreateTime(): FormControl {
        return this.fg.controls[MgControlName.CustomerCreateTime] as FormControl;
    }

    get CustomerRemarks(): FormControl {
        return this.fg.controls[MgControlName.CustomerRemarks] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}