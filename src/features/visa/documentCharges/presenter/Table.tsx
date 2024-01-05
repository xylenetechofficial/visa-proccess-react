import { UnlabeledInput } from "../../../../componenets/Input";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { DocumentChargesInterface } from "../type";

const DocumentChargesTable = (props: {
  snoBase: number;
  documentChargesList: DocumentChargesInterface[];
  onChange: (value: DocumentChargesInterface[]) => void;
}) => {
  function onUpdateRow(index: number, rowData: DocumentChargesInterface) {
    const nextData = props.documentChargesList.map((e, i) => {
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
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3>sn. no</TableHeadCell3>
            <TableHeadCell3>candidate name</TableHeadCell3>
            <TableHeadCell3>candidate no</TableHeadCell3>
            <TableHeadCell3>party code </TableHeadCell3>
            <TableHeadCell3>company name</TableHeadCell3>
            <TableHeadCell3>passport no. </TableHeadCell3>
            <TableHeadCell3>actual profession</TableHeadCell3>
            <TableHeadCell3>visa profession</TableHeadCell3>
            <TableHeadCell3>agent</TableHeadCell3>
            <TableHeadCell3>mofa number</TableHeadCell3>
            <TableHeadCell3>visa authorization</TableHeadCell3>
            <TableHeadCell3>division</TableHeadCell3>
            <TableHeadCell3>visa submission </TableHeadCell3>
            <TableHeadCell3>visa fee</TableHeadCell3>
            <TableHeadCell3>document charges</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>

        <TableBody3>
          {props.documentChargesList.map((documentCharge, index) => (
            <TableRow3>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3>{documentCharge.candidate_name}</TableCell3>
              <TableCell3>{documentCharge.candidate_no}</TableCell3>
              <TableCell3>{documentCharge.party_code}</TableCell3>
              <TableCell3>{documentCharge.company_name}</TableCell3>
              <TableCell3>{documentCharge.passport_no}</TableCell3>
              <TableCell3>{documentCharge.actual_profession}</TableCell3>
              <TableCell3>{documentCharge.visa_profession}</TableCell3>
              <TableCell3>{documentCharge.agent}</TableCell3>
              <TableCell3>{documentCharge.mofa_number}</TableCell3>
              <TableCell3>{documentCharge.visa_authorization}</TableCell3>
              <TableCell3>{documentCharge.division}</TableCell3>
              <TableCell3>{documentCharge.visa_submission}</TableCell3>
              <TableCell3>{documentCharge.visa_fee}</TableCell3>
              <TableCell3>
                <UnlabeledInput
                  onchange={(value) => {
                    onUpdateRow(index, {
                      ...documentCharge,
                      document_charges: value,
                    });
                  }}
                  value={documentCharge.document_charges}
                />
              </TableCell3>
            </TableRow3>
          ))}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default DocumentChargesTable;
