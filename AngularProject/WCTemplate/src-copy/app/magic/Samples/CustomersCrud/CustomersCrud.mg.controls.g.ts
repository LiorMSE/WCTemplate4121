import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CustomersCrud = "CustomersCrud",
        vName = "vName",
        vActive = "vActive",
        vEmail = "vEmail",
        bSave = "bSave",
        bCancel = "bCancel",
}
export enum MgCustomProperties {
    CustomersCrud_WindowTitle = 'CustomersCrud~WindowTitle',
}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vName(): FormControl {
        return this.fg.controls[MgControlName.vName] as FormControl;
    }

    get vActive(): FormControl {
        return this.fg.controls[MgControlName.vActive] as FormControl;
    }

    get vEmail(): FormControl {
        return this.fg.controls[MgControlName.vEmail] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}