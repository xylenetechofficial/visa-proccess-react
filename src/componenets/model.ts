import { BYPASS, appEnv } from "../constant";

export interface PermissionInterface {
  page: string;
  ui: string[];
}

export interface PermissionNavigationInterface {
  permission_list: PermissionInterface[];
  navigation_list: NavigationInterface[];
}

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

export class PermissionHelper {
  navigation_list: NavigationInterface[] = [];
  raw_navigation_list: NavigationAdapter[] = [];
  permission_list: PermissionInterface[] = [];
  path_name = "";
  is_dev = true;

  constructor(list: any) {
    this.is_dev = BYPASS;
    // this.raw_navigation_list = list;
    this.permission_list = list;
    this.path_name = window.location.pathname;
    this.path_name = this.path_name.replace(/^\//, "");
    console.log("URL: ", this.path_name); // Only Dev
  }

  has(page: string, permission: string): boolean {
    // TODO: remove in production mode
    if (this.is_dev) return true;

    for (let i = 0; i < this.permission_list.length; i++) {
      if (this.permission_list[i].page != page) continue;

      const permissions = this.permission_list[i].ui;
      for (let j = 0; j < permissions.length; j++) {
        if (permissions[j] != permission) continue;

        return true;
      }
    }

    return false;
  }

  url_has(permission: string): boolean {
    // TODO: remove in production mode
    if (this.is_dev) return true;

    for (let i = 0; i < this.permission_list.length; i++) {
      if (this.permission_list[i].page != this.path_name) continue;

      const permissions = this.permission_list[i].ui;
      for (let j = 0; j < permissions.length; j++) {
        if (permissions[j] != permission) continue;

        return true;
      }
    }

    return false;
  }

  async getNavigationSideMenu() {
    const raw_data = this.raw_navigation_list;

    const final_data: NavigationInterface[] = [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: "",
      },
    ];

    console.log("RAW DATA");
    // raw_data.forEach((item) =>
    for (let i = 0; i < raw_data.length; i++) {
      const item = raw_data[i];

      const pageParts = item.page.split("/");
      const topLevelName = pageParts[0];
      const subPageName = pageParts[1];

      // Check if there's already an entry for the top-level name in final_data
      const topLevelEntry = final_data.find(
        (entry) => entry.name === topLevelName
      );

      if (topLevelEntry) {
        // Add the sub-page as a child
        topLevelEntry.children = topLevelEntry.children || [];
        topLevelEntry.children.push({
          name: subPageName,
          icon: "pageview",
          path: `/${item.page}`,
        });
      } else {
        // Create a new entry for the top-level name
        final_data.push({
          name: topLevelName,
          icon: "work",
          children: [
            {
              name: subPageName,
              icon: "pageview",
              path: `/${item.page}`,
            },
          ],
        });
      }
    }

    return this.navigation_list;
  }
}
