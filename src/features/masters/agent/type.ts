export interface AgentInterface {
  id?: number;
  name: string;
  isDocumentRegistration: number;
  location: number;
  number?: string;
}

export interface AgentAdapter {
  id?: number;
  name: string;
  document_received: number;
  location: number;
  number?: string;
}

export class AgentConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: AgentAdapter) {
    const data: AgentInterface = {
      id: a.id,
      name: a.name,
      isDocumentRegistration: a.document_received,
      location: a.location,
      number: a.number,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: AgentInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: AgentAdapter = {
      name: i.name,
      document_received: i.isDocumentRegistration,
      location: i.location,
      number: i.number,
    };
    return data;
  }
}
