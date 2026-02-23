import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    StartProgram = "StartProgram",
        vUsername = "vUsername",
        vPassword = "vPassword",
        bLogin = "bLogin",
        bLogout = "bLogout",
        MainOutlet = "MainOutlet",
        bMenu1 = "bMenu1",
}
export enum MgCustomProperties {
    StartProgram_isLoggedIn = 'StartProgram~isLoggedIn',
        StartProgram_Menu = 'StartProgram~Menu',
        StartProgram_Version = 'StartProgram~Version',
}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vUsername(): FormControl {
        return this.fg.controls[MgControlName.vUsername] as FormControl;
    }

    get vPassword(): FormControl {
        return this.fg.controls[MgControlName.vPassword] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}