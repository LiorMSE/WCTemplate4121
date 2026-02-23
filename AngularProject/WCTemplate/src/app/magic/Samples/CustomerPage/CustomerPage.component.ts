import { Component } from '@angular/core';

import { FormGroup } from '@angular/forms';
import {
  MgFormControlsAccessor,
  MgControlName,
  MgCustomProperties,
} from './CustomerPage.mg.controls.g';

import { TaskBaseMagicComponent, magicProviders } from '@magic-xpa/angular';

@Component({
  selector: 'mga-module_Samples_CustomerPage_CustomerPage',
  providers: [...magicProviders],
  standalone: false,
  templateUrl: './CustomerPage.component.html',
})
export class CustomerPage extends TaskBaseMagicComponent {
  mgc = MgControlName;
  mgcp = MgCustomProperties;
  mgfc!: MgFormControlsAccessor;
  override createFormControlsAccessor(formGroup: FormGroup) {
    this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
  }
}
