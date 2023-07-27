
export interface ImmigrationInterface {
    id: number,
    name: string,
    company_name: string,
    passport_no: string,
    immigration_required: string,
    payment: string,
    service_tax_received: string,
    is_invoice: string,
    division: string,
    visa_authorization_name: string,
    party_code: number,
    immigration_submission_date: string,
    immigration_received_date: string,
    actual_profession: string,
    visa_profession: string,
    agent_name: string,
    agent_location_name: string,
    visa_issued_date: string,
    visa_received_date: string,
    visa_expire_date: string,
    release_by_date: string,
    release_requested_by: string,
    given_to: string,
    given_date: string,
    is_without: number

}
// 'block_visa' => 'required|array',
// 'visa_profession_list' => 'required|array'


// block_visa
export interface ImmigrationAdapter {
    id: number,
    name: string,
    company_name: string,
    passport_no: string,
    immigration_required: string,
    payment: string,
    service_tax_received: string,
    is_invoice: string,
    division: string,
    visa_authorization_name: string,
    party_code: number,
    immigration_submission_date: string,
    immigration_received_date: string,
    actual_profession: string,
    visa_profession: string,
    agent_name: string,
    agent_location_name: string,
    visa_issued_date: string,
    visa_received_date: string,
    visa_expire_date: string,
    release_by_date: string,
    release_requested_by: string,
    given_to: string,
    given_date: string,
    is_without: number
}

export class ImmigrationConverter {
    // private i: ImmigrationInterface
    // private a: ImmigrationAdapter

    /**
     * toInterface
     */
    public static toInterface(a: ImmigrationAdapter) {
        const data: ImmigrationInterface = {
            id: a?.id,
            name: a?.name,
            company_name: a?.company_name,
            passport_no: a?.passport_no,
            immigration_required: a?.immigration_required,
            payment: a?.payment,
            service_tax_received: a?.service_tax_received,
            is_invoice: a?.is_invoice,
            division: a?.division,
            visa_authorization_name: a?.visa_authorization_name,
            party_code: a?.party_code,
            immigration_submission_date: a?.immigration_submission_date,
            immigration_received_date: a?.immigration_received_date,
            actual_profession: a?.actual_profession,
            visa_profession: a?.visa_profession,
            agent_name: a?.agent_name,
            agent_location_name: a?.agent_location_name,
            visa_issued_date: a?.visa_issued_date,
            visa_received_date: a?.visa_received_date,
            visa_expire_date: a?.visa_expire_date,
            release_by_date: a?.release_by_date,
            release_requested_by: a?.release_requested_by,
            given_to: a?.given_to,
            given_date: a?.given_date,
            is_without: a?.is_without,
        };
        return data;
    }

    /**
     * toAdapter
     */
    public static toAdapter(i: ImmigrationInterface) {
        console.log("i"); // Only Dev
        console.log(i); // Only Dev
        const data: ImmigrationAdapter = {
            id: i?.id,
            name: i?.name,
            company_name: i?.company_name,
            passport_no: i?.passport_no,
            immigration_required: i?.immigration_required,
            payment: i?.payment,
            service_tax_received: i?.service_tax_received,
            is_invoice: i?.is_invoice,
            division: i?.division,
            visa_authorization_name: i?.visa_authorization_name,
            party_code: i?.party_code,
            immigration_submission_date: i?.immigration_submission_date,
            immigration_received_date: i?.immigration_received_date,
            actual_profession: i?.actual_profession,
            visa_profession: i?.visa_profession,
            agent_name: i?.agent_name,
            agent_location_name: i?.agent_location_name,
            visa_issued_date: i?.visa_issued_date,
            visa_received_date: i?.visa_received_date,
            visa_expire_date: i?.visa_expire_date,
            release_by_date: i?.release_by_date,
            release_requested_by: i?.release_requested_by,
            given_to: i?.given_to,
            given_date: i?.given_date,
            is_without: i?.is_without,
        };
        return data;
    }
}


export interface AddImmigrationDashboardInterface {
    selection_list: AddImmigrationInterface[];
}

export interface AddImmigrationDashboardAdapter {
    selection_list: AddImmigrationAdapter[];
}

export class AddInvoiceRaiseConverter {
    public static toInterface(a: AddImmigrationDashboardAdapter): AddImmigrationDashboardInterface {
        console.log(a, "kkkkkk")
        const data: AddImmigrationDashboardInterface = {
            selection_list: a?.selection_list?.map((item) => ({
                id: item?.id,
                is_without: item?.is_without,
                given_to: item?.given_to,
                given_date: item?.given_date,
                
            })),
        };
        return data;
    }

    public static toAdapter(i: AddImmigrationDashboardInterface): AddImmigrationDashboardAdapter {
        console.log(i, "iiiii")
        const data: AddImmigrationDashboardAdapter = {

            selection_list: i?.selection_list?.map((item) => ({
                id: item?.id,
                is_without: item?.is_without,
                given_to: item?.given_to,
                given_date: item?.given_date,
                
            })),
        };
        return data;
    }
}

export interface AddImmigrationInterface {
    id: number,
    is_without: number,
    given_to: string,
    given_date: string
}

export interface AddImmigrationAdapter {
    id: number,
    is_without: number,
    given_to: string,
    given_date: string,
    
}

export interface UpdateImmigrationRejectInterface {
    is_without: number,
    given_to: string,
    given_date: string,
}

export interface UpdateImmigrationRejectAdapter {
    is_without: number,
    given_to: string,
    given_date: string,
}


export class UpdateImmigrationRejectConverter {
    public static toInterface(a: UpdateImmigrationRejectAdapter) {
        console.log(a, "kkkkkk")
        const data: UpdateImmigrationRejectInterface = {
            is_without: a?.is_without,
            given_to: a?.given_to,
            given_date: a?.given_date,
        };
        return data;
    }

    public static toAdapter(i: UpdateImmigrationRejectInterface) {
        console.log(i, "iiiii")
        const data: UpdateImmigrationRejectAdapter = {

            is_without: i?.is_without,
            given_to: i?.given_to,
            given_date: i?.given_date,
        };
        return data;
    }
}
