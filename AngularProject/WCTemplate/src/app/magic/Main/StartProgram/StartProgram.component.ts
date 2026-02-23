import { Component } from '@angular/core';

import { FormGroup } from '@angular/forms';
import {
  MgFormControlsAccessor,
  MgControlName,
  MgCustomProperties,
} from './StartProgram.mg.controls.g';

import { TaskBaseMagicComponent, magicProviders } from '@magic-xpa/angular';

import { ToggleSideNav } from '../../../Utils/toggle-side-nav';

@Component({
  selector: 'mga-StartProgram',
  providers: [...magicProviders],
  styleUrls: ['./StartProgram.component.scss'],
  templateUrl: './StartProgram.component.html',
  standalone: false,
})
export class StartProgram extends TaskBaseMagicComponent {
  mgc = MgControlName;
  mgcp = MgCustomProperties;
  mgfc!: MgFormControlsAccessor;
  override createFormControlsAccessor(formGroup: FormGroup) {
    this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
  }

  LastObj!: any;
  mobileMenuOpen = false;
  mobileActiveMenu: number | null = null;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (!this.mobileMenuOpen) {
      this.mobileActiveMenu = null;
    }
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    this.mobileActiveMenu = null;
  }

  onMobileParentClick(index: number): void {
    this.mobileActiveMenu = this.mobileActiveMenu === index ? null : index;
  }

  HighLightMenu(obj: any): void {
    const navbarItemBox = obj.currentTarget.closest(
      '.navbar-itembox'
    ) as HTMLElement;
    if (!navbarItemBox) return;

    const sideNav = document.getElementById('side-nav');

    if (this.LastObj === navbarItemBox) {
      navbarItemBox.classList.toggle('navbar-item-selected');
      sideNav?.classList.toggle('side-nav-state');
    } else {
      if (this.LastObj) {
        this.LastObj.classList.remove('navbar-item-selected');
      }
      navbarItemBox.classList.add('navbar-item-selected');
      sideNav?.classList.remove('side-nav-state');
      this.LastObj = navbarItemBox;
    }
  }

  UpdateAndLogin(): void {
    const loginButton = document.getElementById('LoginButton');
    this.SetValue();
    loginButton?.click();
  }

  SetValue() {
    const usernameInput = document.getElementById(
      'username'
    ) as HTMLInputElement;
    this.mg.setValueToControl(this.mgc.vUsername, usernameInput.value);
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;
    this.mg.setValueToControl(this.mgc.vPassword, passwordInput.value);
  }

  closeMenu(): void {
    // Close the side nav
    ToggleSideNav();

    // Also clear highlight from the last selected navbar item
    if (this.LastObj) {
      this.LastObj.classList.remove('navbar-item-selected');
      this.LastObj = undefined;
    }
  }
}
