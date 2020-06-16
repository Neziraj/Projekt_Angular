import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  icon: string;
}

const SidebarMenu = [
  { state: 'incomingbackups', name: 'Nadcházející zálohy', icon: 'av_timer' },
  { state: 'completedbackups', name: 'Dokončené zálohy', icon: 'assignment_turned_in' },
  { state: 'configurations',name: 'Konfigurace', icon: 'view_list' },
  { state: 'clients', name: 'Klienti', icon: 'group' },
  { state: 'menu', name: 'Noví klienti', icon: 'view_headline' },
  { state: 'tabs', name: 'NWM', icon: 'tab' },

];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return SidebarMenu;
  }
}
