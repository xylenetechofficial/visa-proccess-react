export interface PermissionGroupInterface {
    id?: number;
    name: string;
    dpt_list?: PermissionDataInterface[];
  }
  
  export interface PermissionDataInterface {
    check?: boolean;
    name: string;
    page_list: PageInterface[];
  }
  
  export interface PageInterface {
    check?: boolean;
    name: string;
    permission_list: PermissionInterface[];
  }
  
  export interface PermissionInterface {
    name: string;
    check: boolean;
    id: number;
  }
  