import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    WarningMsg = "WarningMsg",
        pTitle = "pTitle",
        pMsg = "pMsg",
        pButtons = "pButtons",
        pOptionalReturn = "pOptionalReturn",
        bBtn1 = "bBtn1",
        bBtn2 = "bBtn2",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get pTitle(): FormControl {
        return this.fg.controls[MgControlName.pTitle] as FormControl;
    }

    get pMsg(): FormControl {
        return this.fg.controls[MgControlName.pMsg] as FormControl;
    }

    get pButtons(): FormControl {
        return this.fg.controls[MgControlName.pButtons] as FormControl;
    }

    get pOptionalReturn(): FormControl {
        return this.fg.controls[MgControlName.pOptionalReturn] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}