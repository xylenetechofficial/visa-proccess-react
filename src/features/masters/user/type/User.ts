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
        active: i.active,
      };
      return data;
    }
  }
  
  export interface UserRole {
    id?: number;
    name: string;
  }
  