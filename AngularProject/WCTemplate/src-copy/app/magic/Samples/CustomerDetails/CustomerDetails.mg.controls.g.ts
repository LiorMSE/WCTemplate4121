import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CustomerDetails = "CustomerDetails",
        vActive = "vActive",
        vCreateDate = "vCreateDate",
        vCreateTime = "vCreateTime",
        vEmail = "vEmail",
        vRemarks = "vRemarks",
        bSave = "bSave",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vActive(): FormControl {
        return this.fg.controls[MgControlName.vActive] as FormControl;
    }

    get vCreateDate(): FormControl {
        return this.fg.controls[MgControlName.vCreateDate] as FormControl;
    }

    get vCreateTime(): FormControl {
        return this.fg.controls[MgControlName.vCreateTime] as FormControl;
    }

    get vEmail(): FormControl {
        return this.fg.controls[MgControlName.vEmail] as FormControl;
    }

    get vRemarks(): FormControl {
        return this.fg.controls[MgControlName.vRemarks] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}