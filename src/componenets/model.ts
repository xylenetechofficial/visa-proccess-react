interface NavigationInterface {
    name: string;
    icon: string;
    path?:string;
    children?: NavigationInterface[];
}
