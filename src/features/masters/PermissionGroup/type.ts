export interface PermissionGroupInterface {
  id?: number;
  name: string;
  dpt_list?:PermissionDataInterface[],
}

export interface PermissionDataInterface {
  name: string;
  page_list: PageInterface[];
}

export interface PageInterface {
  name: string;
  permission_list: PermissionInterface[];
}

export interface PermissionInterface {
  name: string;
  check: boolean;
  id:number;
}