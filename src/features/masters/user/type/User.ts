export interface UserInterface {
  id?: number;
  name: string;
  user_name: string;
  email: string;
  password: string;
  remember_token?: string;
  permission_group_id: number;
  permission_group_name?: string;
  user_role_id: number;
  user_role_name?: string;

  gm_id?: number;
  om_id?: number;
  rm_id?: number;
  rs_id?: number;
  data_by?: string;
  sector_id?: number;
  invoice_sector_id?: number;

  active: number;
}

export interface UserAdapter {
  id?: number;
  name: string;
  user_name: string;
  email: string;
  password: string;
  remember_token?: string;
  permission_group_id: number;
  permission_group_name?: string;
  user_role_id: number;
  user_role_name?: string;

  gm_id?: number;
  om_id?: number;
  rm_id?: number;
  rs_id?: number;
  data_by?: string;
  sector_id?: number;
  invoice_sector_id?: number;

  active: number;
}

export class UserConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: UserAdapter) {
    const data: UserInterface = {
      id: a.id,
      name: a.name,
      user_name: a.user_name,
      email: a.email,
      password: a.password,
      remember_token: a.remember_token,
      permission_group_id: a.permission_group_id,
      permission_group_name: a.permission_group_name,
      user_role_id: a.user_role_id,
      user_role_name: a.user_role_name,

      gm_id: a.gm_id,
      om_id: a.om_id,
      rm_id: a.rm_id,
      rs_id: a.rs_id,
      data_by: a.data_by,
      sector_id: a.sector_id,
      invoice_sector_id: a.invoice_sector_id,

      active: a.active,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: UserInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: UserAdapter = {
      id: i.id,
      name: i.name,
      user_name: i.user_name,
      email: i.email,
      password: i.password,
      remember_token: i.remember_token,
      permission_group_id: i.permission_group_id,
      permission_group_name: i.permission_group_name,
      user_role_id: i.user_role_id,
      user_role_name: i.user_role_name,

      gm_id: i.gm_id,
      om_id: i.om_id,
      rm_id: i.rm_id,
      rs_id: i.rs_id,
      data_by: i.data_by,
      sector_id: i.sector_id,
      invoice_sector_id: i.invoice_sector_id,

      active: i.active,
    };
    return data;
  }
}

export interface UserRole {
  id?: number;
  name: string;

  role_id?: number;
  gm?: number;
  om?: number;
  rm?: number;
  rs?: number;
  data_by?: number;
  sector?: number;
  invoice_sector?: number;
}

export interface UserRoleAdapter {
  id?: number;
  name: string;

  role_id?: number;
  gm?: number;
  om?: number;
  rm?: number;
  rs?: number;
  data_by?: number;
  sector?: number;
  invoice_sector?: number;
}

export class UserRoleConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(i: UserRoleAdapter) {
    const data: UserRole = {
      id: i.id,
      name: i.name,

      role_id: i.role_id,
      gm: i.gm,
      om: i.om,
      rm: i.rm,
      rs: i.rs,
      data_by: i.data_by,
      sector: i.sector,
      invoice_sector: i.invoice_sector,
    };
    return data;
  }

  public static toInterfaceList(list: UserRoleAdapter[]) {
    const data_list: UserRole[] = [];

    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: UserRole) {
    const data: UserRoleAdapter = {
      id: i.id,
      name: i.name,

      role_id: i.role_id,
      gm: i.gm,
      om: i.om,
      rm: i.rm,
      rs: i.rs,
      data_by: i.data_by,
      sector: i.sector,
      invoice_sector: i.invoice_sector,
    };
    return data;
  }

  public static toAdapterList(list: UserRole[]) {
    const data_list: UserRoleAdapter[] = [];

    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}
