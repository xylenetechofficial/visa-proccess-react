export interface PermissionIndexInterface {
  id?: number;
  name: string;
}

export interface PermissionGroupInterface {
  name: string;
  page_list: PageInterface[];
}

interface PageInterface {
  name: string;
  permission_list: PermissionInterface[];
}

interface PermissionInterface {
  name: string;
  check: boolean;
  id: number;
}
