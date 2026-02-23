import { Component } from '@angular/core';

import { FormGroup } from '@angular/forms';
import {
  MgFormControlsAccessor,
  MgControlName,
  MgCustomProperties,
} from './CustomersListTable.mg.controls.g';
import { MgDisplayedColumns } from './CustomersListTable.mg.controls.g';

import {
  BaseMatTableMagicComponent,
  matMagicProviders,
} from '@magic-xpa/angular-material-core';

@Component({
  selector: 'mga-CustomersList_CustomersListTable_CustomersListTable',
  providers: [...matMagicProviders],
  templateUrl: './CustomersListTable.component.html',
  standalone: false,
})
export class CustomersListTable extends BaseMatTableMagicComponent {
  mgc = MgControlName;
  mgcp = MgCustomProperties;
  mgfc!: MgFormControlsAccessor;
  mgdp = MgDisplayedColumns;
  override createFormControlsAccessor(formGroup: FormGroup) {
    this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    this.checkScreenSize();
  }
  override displayedColumns = this.mgdp;

  // Enable the line below and import HostListener from angular/core to recognize resizing change
  // which will change the isMobile flag accordingly
  // @HostListener('window:resize', ['$event'])

  isMobile: boolean = false;

  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 576;
  }
}
