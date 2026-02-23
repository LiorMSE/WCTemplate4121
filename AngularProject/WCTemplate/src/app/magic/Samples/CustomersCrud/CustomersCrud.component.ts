import { Component } from '@angular/core';

import { FormGroup } from '@angular/forms';
import {
  MgFormControlsAccessor,
  MgControlName,
  MgCustomProperties,
} from './CustomersCrud.mg.controls.g';

import { TaskBaseMagicComponent, magicProviders } from '@magic-xpa/angular';

import { MagicModalInterface } from '@magic-xpa/angular';

@Component({
  selector: 'mga-CustomersCrud_CustomersCrud',
  providers: [...magicProviders],
  templateUrl: './CustomersCrud.component.html',
  standalone: false,
})
export class CustomersCrud
  extends TaskBaseMagicComponent
  implements MagicModalInterface
{
  private static readonly isResizable: boolean = true;
  private static readonly isMovable: boolean = true;
  IsResizable() {
    return CustomersCrud.isResizable;
  }
  IsMovable() {
    return CustomersCrud.isMovable;
  }

  mgc = MgControlName;
  mgcp = MgCustomProperties;
  mgfc!: MgFormControlsAccessor;
  override createFormControlsAccessor(formGroup: FormGroup) {
    this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
  }
  private static readonly formName: string = 'CustomersCrud';
  private static readonly showTitleBar: boolean = false;
  private static readonly x: number = 0;
  private static readonly y: number = 0;
  private static readonly width: string = 'fit-content';
  private static readonly height: string = '36vh';
  private static readonly isCenteredToWindow: boolean = true;
  private static readonly shouldCloseOnBackgroundClick = false;
  X() {
    return CustomersCrud.x;
  }
  Y() {
    return CustomersCrud.y;
  }
  Width(): string {
    return CustomersCrud.width;
  }
  Height(): string {
    return CustomersCrud.height;
  }
  IsCenteredToWindow() {
    return CustomersCrud.isCenteredToWindow;
  }
  FormName() {
    return CustomersCrud.formName;
  }
  ShowTitleBar() {
    return CustomersCrud.showTitleBar;
  }
  ShouldCloseOnBackgroundClick() {
    return CustomersCrud.shouldCloseOnBackgroundClick;
  }
}
