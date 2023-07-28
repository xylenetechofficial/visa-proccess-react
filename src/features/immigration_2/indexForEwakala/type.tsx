export interface IndexEwakalaInterface {
    party_code: number,
    company_name: string,
    received_date: string,
    visa_quantity: number,
    visa_number: string,
    visa_authorization_name: string
}
export interface IndexEwakalaAdapter {
    party_code: number,
    company_name: string,
    received_date: string,
    visa_quantity: number,
    visa_number: string,
    visa_authorization_name: string
}



export class IndexEwakalaConverter {
    public static toInterface(a: IndexEwakalaAdapter) {
        console.log(a, "kkkkkk")
        const data: IndexEwakalaInterface = {
            party_code: a?.party_code,
            company_name: a?.company_name,
            received_date: a?.received_date,
            visa_quantity: a?.visa_quantity,
            visa_number: a?.visa_number,
            visa_authorization_name: a?.visa_authorization_name,
        };
        return data;
    }

    public static toInterfaceList(a_list: IndexEwakalaAdapter[]) {
        const data_list: IndexEwakalaInterface[] = [];

        for (let i = 0; i < a_list.length; i++) {
            const element = a_list[i];
            data_list.push(this.toAdapter(element));
        }

        return data_list;
    }

    public static toAdapter(i: IndexEwakalaInterface) {
        console.log(i, "iiiii")
        const data: IndexEwakalaAdapter = {

            party_code: i?.party_code,
            company_name: i?.company_name,
            received_date: i?.received_date,
            visa_quantity: i?.visa_quantity,
            visa_number: i?.visa_number,
            visa_authorization_name: i?.visa_authorization_name,
        };
        return data;
    }

    public static toAdapterList(i_list: IndexEwakalaInterface[]) {
        const data_list: IndexEwakalaAdapter[] = [];

        for (let i = 0; i < i_list.length; i++) {
            const element = i_list[i];
            data_list.push(this.toAdapter(element));
        }

        return data_list;
    }
}
