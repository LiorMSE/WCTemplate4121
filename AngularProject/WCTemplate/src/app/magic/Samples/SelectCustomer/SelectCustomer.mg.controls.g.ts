import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SelectCustomer = "SelectCustomer",
        vSearch = "vSearch",
        Table1 = "Table1",
        cName = "cName",
        CustomerName = "CustomerName",
        cActive = "cActive",
        Active = "Active",
        Column7 = "Column7",
        bSelect = "bSelect",
        bCancel = "bCancel",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'cName',
        'cActive',
        'Column7',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vSearch(): FormControl {
        return this.fg.controls[MgControlName.vSearch] as FormControl;
    }

    get CustomerName(): FormControl {
        return this.getTableChildFormControl(MgControlName.CustomerName);
    }

    get Active(): FormControl {
        return this.getTableChildFormControl(MgControlName.Active);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}