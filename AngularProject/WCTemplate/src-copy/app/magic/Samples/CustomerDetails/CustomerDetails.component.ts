import { Component } from '@angular/core';

import { FormGroup } from '@angular/forms';
import {
  MgFormControlsAccessor,
  MgControlName,
  MgCustomProperties,
} from './CustomerDetails.mg.controls.g';

import { TaskBaseMagicComponent, magicProviders } from '@magic-xpa/angular';

@Component({
  selector: 'mga-CustomerDetails_CustomerDetails',
  providers: [...magicProviders],
  templateUrl: './CustomerDetails.component.html',
  standalone: false,
})
export class CustomerDetails extends TaskBaseMagicComponent {
  mgc = MgControlName;
  mgcp = MgCustomProperties;
  mgfc!: MgFormControlsAccessor;
  override createFormControlsAccessor(formGroup: FormGroup) {
    this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
  }
}
