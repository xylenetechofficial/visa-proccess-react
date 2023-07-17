export interface VisaTypeInterface {
  id?: number;
  name: string;
  mofa_fee: number;
  visa_fee: number;
  visa_validity_single_entry: number;
  visa_validity_multiple_entry: number;
}

export interface VisaTypeAdapter {
  id?: number;
  name: string;
  mofa_fee: number;
  visa_fee: number;
  visa_validity_single_entry: number;
  visa_validity_multiple_entry: number;
}

export class VisaTypeConverter {
  // private i: VisaTypeInterface
  // private a: VisaTypeAdapter

  /**
   * to interface
   */
  public static toInterface(a: VisaTypeAdapter) {
    const data: VisaTypeInterface = {
      id: a.id,
      name: a.name,
      mofa_fee: a.mofa_fee,
      visa_fee: a.visa_fee,
      visa_validity_single_entry: a.visa_validity_single_entry,
      visa_validity_multiple_entry: a.visa_validity_multiple_entry,
    };
    return data;
  }

  /**
   * to interface list
   */
  public static toInterfaceList(i_list: VisaTypeAdapter[]) {
    const data_list: VisaTypeInterface[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }

  /**
   * to adapter
   */
  public static toAdapter(i: VisaTypeInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: VisaTypeAdapter = {
      // id: i.id,
      name: i.name,
      mofa_fee: i.mofa_fee,
      visa_fee: i.visa_fee,
      visa_validity_single_entry: i.visa_validity_single_entry,
      visa_validity_multiple_entry: i.visa_validity_multiple_entry,
    };
    return data;
  }

  /**
   * to adapter list
   */
  public static toAdapterList(i_list: VisaTypeInterface[]) {
    const data_list: VisaTypeAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}
