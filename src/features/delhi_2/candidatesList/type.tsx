
export interface CandidateInterface {

    id?: number,
    name: string
    passport_no: string
    company_name: string
    party_code: number
    agent_id: string
    agent_name: string
    total_service_charges: string
    amount_received: string
    amount_received_delhi: string
    service_tax_received: string
    dad_service_tax: string
    dad_amount: number
    given_to: string
    given_date: string
    is_without: number

    actual_profession: string
    visa_profession: string
}



export interface CandidateAdapter {
    id?: number,
    name: string
    passport_no: string
    company_name: string
    party_code: number
    agent_id: string
    agent_name: string
    total_service_charges: string
    amount_received: string
    amount_received_delhi: string
    service_tax_received: string
    dad_service_tax: string
    dad_amount: number
    given_to: string
    given_date: string
    is_without: number

    actual_profession: string
    visa_profession: string
}


export class CandidateConverter {
    // private i: CandidateInterface
    // private a: CandidateAdapter

    /**
     * toInterface
     */
    public static toInterface(a: CandidateAdapter) {
        const data: CandidateInterface = {
            id: a.id,
            name: a.name,
            passport_no: a.passport_no,
            company_name: a.company_name,
            party_code: a.party_code,
            agent_id: a.agent_id,
            agent_name: a.agent_name,
            total_service_charges: a.total_service_charges,
            amount_received: a.amount_received,
            amount_received_delhi: a.amount_received_delhi,
            service_tax_received: a.service_tax_received,
            dad_service_tax: a.dad_service_tax,
            dad_amount: a.dad_amount,
            given_to: a.given_to,
            given_date: a.given_date,
            is_without: a.is_without,

            actual_profession: a.actual_profession,
            visa_profession: a.visa_profession,
        };
        return data;
    }



    public static toInterfaceList(a_list: CandidateAdapter[]) {
        const data_list: CandidateInterface[] = [];

        for (let i = 0; i < a_list.length; i++) {
            const element = a_list[i];
            data_list.push(this.toAdapter(element));
        }

        return data_list;
    }

    /**
     * toAdapter
     */
    public static toAdapter(i: CandidateInterface) {
        console.log("i"); // Only Dev
        console.log(i); // Only Dev
        const data: CandidateAdapter = {
            id: i.id,
            name: i.name,
            passport_no: i.passport_no,
            company_name: i.company_name,
            party_code: i.party_code,
            agent_id: i.agent_id,
            agent_name: i.agent_name,
            total_service_charges: i.total_service_charges,
            amount_received: i.amount_received,
            amount_received_delhi: i.amount_received_delhi,
            service_tax_received: i.service_tax_received,
            dad_service_tax: i.dad_service_tax,
            dad_amount: i.dad_amount,
            given_to: i.given_to,
            given_date: i.given_date,
            is_without: i.is_without,

            actual_profession: i.actual_profession,
            visa_profession: i.visa_profession,
        };
        return data;
    }



    public static toAdapterList(i_list: CandidateInterface[]) {
        const data_list: CandidateAdapter[] = [];

        for (let i = 0; i < i_list.length; i++) {
            const element = i_list[i];
            data_list.push(this.toAdapter(element));
        }

        return data_list;
    }
}