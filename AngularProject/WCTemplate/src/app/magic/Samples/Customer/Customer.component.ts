import { Component } from '@angular/core';

import { FormGroup } from '@angular/forms';
import {
  MgFormControlsAccessor,
  MgControlName,
  MgCustomProperties,
} from './Customer.mg.controls.g';

import { TaskBaseMagicComponent, magicProviders } from '@magic-xpa/angular';

import { MagicModalInterface } from '@magic-xpa/angular';

@Component({
  selector: 'mga-Customer_Customer',
  providers: [...magicProviders],
  templateUrl: './Customer.component.html',
  standalone: false,
})
export class Customer
  extends TaskBaseMagicComponent
  implements MagicModalInterface
{
  private static readonly isResizable: boolean = true;
  private static readonly isMovable: boolean = true;
  IsResizable() {
    return Customer.isResizable;
  }
  IsMovable() {
    return Customer.isMovable;
  }
  LastObj!: any;

  mgc = MgControlName;
  mgcp = MgCustomProperties;
  mgfc!: MgFormControlsAccessor;
  override createFormControlsAccessor(formGroup: FormGroup) {
    this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);

    // Add selected class to the default button
    this.LastObj = document.getElementById('CustomerDetails');
    this.LastObj.classList.add('selected-button');
  }
  private static readonly formName: string = 'CustomerDetails';
  private static readonly showTitleBar: boolean = false;
  private static readonly x: number = 0;
  private static readonly y: number = 0;
  private static readonly width: string = 'fit-content';
  private static readonly height: string = '60vh';
  private static readonly isCenteredToWindow: boolean = true;
  private static readonly shouldCloseOnBackgroundClick = false;
  X() {
    return Customer.x;
  }
  Y() {
    return Customer.y;
  }
  Width(): string {
    return Customer.width;
  }
  Height(): string {
    return Customer.height;
  }
  IsCenteredToWindow() {
    return Customer.isCenteredToWindow;
  }
  FormName() {
    return Customer.formName;
  }
  ShowTitleBar() {
    return Customer.showTitleBar;
  }
  ShouldCloseOnBackgroundClick() {
    return Customer.shouldCloseOnBackgroundClick;
  }

  ToggleSelected(elementID: string): void {
    const NavButton = document.getElementById(elementID);
    if (!NavButton) return;

    if (this.LastObj) this.LastObj.classList.toggle('selected-button');
    NavButton.classList.toggle('selected-button');

    if (!this.LastObj) {
      this.LastObj = NavButton;
      return;
    }

    this.LastObj = NavButton;
  }
}
