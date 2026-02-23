import { Component, Input } from '@angular/core';

import { ToggleSideNav } from '../../Utils/toggle-side-nav';

interface SideMenuItem {
  isOpen?: boolean;
  Name?: string;
  url?: string;
  Icon?: string;
  Menus?: SideMenuItem[];
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: false,
})
export class SideMenuComponent {
  _source!: SideMenuItem[];

  @Input() set source(val: string | SideMenuItem[]) {
    if (val && typeof val === 'string') {
      this._source = JSON.parse(val);
    } else {
      this._source = val as SideMenuItem[];
    }
  }

  liToggle(item: any, e: MouseEvent) {
    item.isOpen = !item.isOpen;
    e.stopPropagation();
  }

  aClick(e: MouseEvent) {
    ToggleSideNav();
    e.stopPropagation();
  }

  ToggleList(e: MouseEvent) {
    selectedElement: HTMLElement;
    const clickedListItem = e.target as HTMLElement;
    clickedListItem.classList.toggle('selected');
  }
}
