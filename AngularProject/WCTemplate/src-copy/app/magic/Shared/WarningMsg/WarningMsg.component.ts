import { Component } from '@angular/core';

import { FormGroup } from '@angular/forms';
import {
  MgFormControlsAccessor,
  MgControlName,
  MgCustomProperties,
} from './WarningMsg.mg.controls.g';

import { TaskBaseMagicComponent, magicProviders } from '@magic-xpa/angular';

import { MagicModalInterface } from '@magic-xpa/angular';

@Component({
  selector: 'mga-WarningMsg_WarningMsg',
  providers: [...magicProviders],
  templateUrl: './WarningMsg.component.html',
  styleUrls: ['./WarningMsg.component.scss'],
  standalone: false,
})
export class WarningMsg
  extends TaskBaseMagicComponent
  implements MagicModalInterface
{
  private static readonly isResizable: boolean = true;
  private static readonly isMovable: boolean = true;
  IsResizable() {
    return WarningMsg.isResizable;
  }
  IsMovable() {
    return WarningMsg.isMovable;
  }

  mgc = MgControlName;
  mgcp = MgCustomProperties;
  mgfc!: MgFormControlsAccessor;
  override createFormControlsAccessor(formGroup: FormGroup) {
    this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
  }
  private static readonly formName: string = 'WarningMsg';
  private static readonly showTitleBar: boolean = false;
  private static readonly x: number = 0;
  private static readonly y: number = 0;
  private static readonly width: string =
    window.innerWidth > 576 ? '30vw' : '80vw';
  private static readonly height: string = '40vh';
  private static readonly isCenteredToWindow: boolean = true;
  private static readonly shouldCloseOnBackgroundClick = false;
  X() {
    return WarningMsg.x;
  }
  Y() {
    return WarningMsg.y;
  }
  Width(): string {
    return WarningMsg.width;
  }
  Height(): string {
    return WarningMsg.height;
  }
  IsCenteredToWindow() {
    return WarningMsg.isCenteredToWindow;
  }
  FormName() {
    return WarningMsg.formName;
  }
  ShowTitleBar() {
    return WarningMsg.showTitleBar;
  }
  ShouldCloseOnBackgroundClick() {
    return WarningMsg.shouldCloseOnBackgroundClick;
  }
}
