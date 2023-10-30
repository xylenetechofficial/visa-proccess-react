import { AgreementInterface } from "../type";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { TextAreaInput } from "../../../../componenets/Input";

const AgreementTable = (props: {
  agreementList: AgreementInterface[];
  snoBase: number;
  onChange: (value: AgreementInterface[]) => void;
  actionType?: string;
}) => {

  function onUpdateRow(index: number, rowData: AgreementInterface) {
    const nextData = props.agreementList.map((e, i) => {
      if (i === index) {
        // Increment the clicked counter
        return rowData;
      } else {
        // The rest haven't changed
        return e;
      }
    });
    props.onChange(nextData);
  }
  const HEADERLIST = [
    ["Sr No."],
    ["PARTY CODE"],
    ["COMPANY NAME"],
    ["CANDIDATE NAME"],
    ["PASSPORT NO."],
    ["ACTUAL PROFESSION"],
    ["VISA PROFESSION"],
    ["AGENT"],
    ["RC NAME"],
    ["VISA RECEIVED DATE"],
    ["VISA EXPIRY DATE"],
    ["SECTOR FROM"],
    ["SECTOR TO"],
    ["DEPARTURE DATE"],
    ["PAYMENT CLEARED"],
    ["REPORTED FOR AGREEMENT"],
    ["REMARKS"],
    ["CONTACT DETAILS"],
  ];

  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            {HEADERLIST.map((item) => {
              return <TableHeadCell3> {item}</TableHeadCell3>;
            })}
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.agreementList.map((item, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>

              <TableCell3>{item.party_code}</TableCell3>
              <TableCell3>{item.company_name}</TableCell3>
              <TableCell3>{item.name}</TableCell3>
              <TableCell3>{item.passport_no}</TableCell3>
              <TableCell3>{item.actual_profession}</TableCell3>
              <TableCell3>{item.visa_profession}</TableCell3>
              <TableCell3>{item.agent_name}</TableCell3>
              <TableCell3>{item.rc_name}</TableCell3>
              <TableCell3>{item.visa_received_date}</TableCell3>
              <TableCell3>{item.visa_expiry_date}</TableCell3>
              <TableCell3>{item.sector_from}</TableCell3>
              <TableCell3>{item.sector_to}</TableCell3>
              <TableCell3>{item.departure_date}</TableCell3>
              <TableCell3>
                {item.payment_cleared}
              </TableCell3>

              {props.actionType == "read" ? (
                <>

                  <TableCell3>
                    {item.reported_for_agreement}
                  </TableCell3>
                  <TableCell3>{item.remarks}</TableCell3>
                  <TableCell3>{item.contact_details}</TableCell3>
                </>
              ) : (
                <>
                  {/* add & edit oparation */}


                  <TableCell3>
                    <TextAreaInput
                      id="reported_for_agreement"
                      placeHolder="Reported For Agreement"
                      onChange={(value) => {
                        onUpdateRow(index, {
                          ...item,
                          reported_for_agreement: value,
                        });
                      }}
                      value={item.reported_for_agreement}
                    />
                  </TableCell3>

                  <TableCell3>
                    <TextAreaInput
                      id="remarks"
                      placeHolder="Remarks"
                      onChange={(value) => {
                        onUpdateRow(index, { ...item, remarks: value });
                      }}
                      value={item.remarks}
                    />
                  </TableCell3>

                  <TableCell3>
                    <TextAreaInput
                      id="Contact Details"
                      placeHolder="Contact Details"
                      onChange={(value) => {
                        onUpdateRow(index, { ...item, contact_details: value });
                      }}
                      value={item.contact_details}
                    />
                  </TableCell3>
                </>
              )}
            </TableRow3>
          ))}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default AgreementTable;
