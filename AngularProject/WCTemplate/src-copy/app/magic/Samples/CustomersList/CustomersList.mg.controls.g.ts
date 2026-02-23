import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CustomersList = "CustomersList",
        vSearch = "vSearch",
        vActiveFilter = "vActiveFilter",
        vMultiSelectCombo = "vMultiSelectCombo",
        bAdd = "bAdd",
        sTable = "sTable",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vSearch(): FormControl {
        return this.fg.controls[MgControlName.vSearch] as FormControl;
    }

    get vActiveFilter(): FormControl {
        return this.fg.controls[MgControlName.vActiveFilter] as FormControl;
    }

    get vMultiSelectCombo(): FormControl {
        return this.fg.controls[MgControlName.vMultiSelectCombo] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}