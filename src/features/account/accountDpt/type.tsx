export interface PaymentReceivedInterface {
    "id": number,
    "party_code": number,
    "company_name":string,
    "name":string,
    "passport_no":string,
    "actual_profession":string,
    "visa_profession":string,
    "agent_name":string,
    "photo_charges": number,
    "training_charges": number,
    "other_charges": number,
    "document_charges": number,
    "service_charges": number,
    "partial_charges": number,
    "consulate_setting_charges": number,
    "sector_charges": number,
    "extra_service_tax": number,
    "amount_received": number,
    "is_without": number,
    "received": number
  }

  export interface PaymentReceivedAdapter{
    "id": number,
    "party_code": number,
    "company_name":string,
    "name":string,
    "passport_no":string,
    "actual_profession":string,
    "visa_profession":string,
    "agent_name":string,
    "photo_charges": number,
    "training_charges": number,
    "other_charges": number,
    "document_charges": number,
    "service_charges": number,
    "partial_charges": number,
    "consulate_setting_charges": number,
    "sector_charges": number,
    "extra_service_tax": number,
    "amount_received": number,
    "is_without": number,
    "received": number
  }

  

export class PaymentReceivedConverter {
    // private i: PaymentReceivedInterface
    // private a: PaymentReceivedAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: PaymentReceivedAdapter) {
      const data: PaymentReceivedInterface = {
        id:a.id,
    party_code:a.party_code,
    company_name:a.company_name,
    name:a.name,
    passport_no:a.passport_no,
    actual_profession:a.actual_profession,
    visa_profession:a.visa_profession,
    agent_name:a.agent_name,
    photo_charges:a.photo_charges,
    training_charges:a.training_charges,
    other_charges:a.other_charges,
    document_charges:a.document_charges,
    service_charges:a.service_charges,
    partial_charges:a.partial_charges,
    consulate_setting_charges:a.consulate_setting_charges,
    sector_charges:a.sector_charges,
    extra_service_tax:a.extra_service_tax,
    amount_received:a.amount_received,
    is_without:a.is_without,
    received:a.received,
      }
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: PaymentReceivedInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: PaymentReceivedAdapter = {
        id:i.id,
        party_code:i.party_code,
        company_name:i.company_name,
        name:i.name,
        passport_no:i.passport_no,
        actual_profession:i.actual_profession,
        visa_profession:i.visa_profession,
        agent_name:i.agent_name,
        photo_charges:i.photo_charges,
        training_charges:i.training_charges,
        other_charges:i.other_charges,
        document_charges:i.document_charges,
        service_charges:i.service_charges,
        partial_charges:i.partial_charges,
        consulate_setting_charges:i.consulate_setting_charges,
        sector_charges:i.sector_charges,
        extra_service_tax:i.extra_service_tax,
        amount_received:i.amount_received,
        is_without:i.is_without,
        received:i.received,
      };
      return data;
    }
  }
  
  
  
  
  
  
