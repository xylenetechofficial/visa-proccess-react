export interface NavigationInterface {
  name: string;
  icon: string;
  path?: string;
  children?: NavigationInterface[];
}

export interface NavigationAdapter {
  page: string;
  ui: string[];
}

export class NavigationHelper {
  navigation_list: NavigationInterface[] = [];
  constructor(list: any) {
    this.navigation_list = list;
  }
  getNavigationSideMenu() {
    return this.navigation_list ;
  }
}
