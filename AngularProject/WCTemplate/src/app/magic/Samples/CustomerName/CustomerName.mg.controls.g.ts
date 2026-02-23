import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CustomerName = "CustomerName",
        vName = "vName",
        ParentName = "ParentName",
        bSelectParent = "bSelectParent",
        bSave = "bSave",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vName(): FormControl {
        return this.fg.controls[MgControlName.vName] as FormControl;
    }

    get ParentName(): FormControl {
        return this.fg.controls[MgControlName.ParentName] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}