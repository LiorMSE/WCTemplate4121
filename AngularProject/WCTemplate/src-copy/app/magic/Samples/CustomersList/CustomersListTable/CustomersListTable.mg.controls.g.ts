import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CustomersListTable = "CustomersListTable",
        Table26 = "Table26",
        cID = "cID",
        CustomerID = "CustomerID",
        cName = "cName",
        CustomerName = "CustomerName",
        cEmail = "cEmail",
        CustomerEmail = "CustomerEmail",
        cActive = "cActive",
        ActiveCustomer = "ActiveCustomer",
        cParentCustomer = "cParentCustomer",
        ParentCustomer = "ParentCustomer",
        cActions = "cActions",
        bEdit = "bEdit",
        bDelete = "bDelete",
        bGotoObject = "bGotoObject",
        bOpenCustomerPage = "bOpenCustomerPage",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'cID',
        'cName',
        'cEmail',
        'cActive',
        'cParentCustomer',
        'cActions',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get CustomerID(): FormControl {
        return this.getTableChildFormControl(MgControlName.CustomerID);
    }

    get CustomerName(): FormControl {
        return this.getTableChildFormControl(MgControlName.CustomerName);
    }

    get CustomerEmail(): FormControl {
        return this.getTableChildFormControl(MgControlName.CustomerEmail);
    }

    get ActiveCustomer(): FormControl {
        return this.getTableChildFormControl(MgControlName.ActiveCustomer);
    }

    get ParentCustomer(): FormControl {
        return this.getTableChildFormControl(MgControlName.ParentCustomer);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}