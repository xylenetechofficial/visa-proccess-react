import { BlueButton } from "../../../../componenets/CustomButton";
import {
    Table3,
    TableBody3,
    TableCell3,
    TableHead3,
    TableHeadCell3,
    TableHeadRow3,
    TableRow3,
  } from "../../../../componenets/Table";
  
  const PenaltyChargesTable = (props:{
    onClickEdit:any,

  }) => {
    return (
      <div className="overflow-auto">
        <Table3>
          <TableHead3>
            <TableHeadRow3>
            <TableHeadCell3>sn. no</TableHeadCell3>
              <TableHeadCell3>party code </TableHeadCell3>
              <TableHeadCell3>company name</TableHeadCell3>
              <TableHeadCell3>candidate name</TableHeadCell3>
              <TableHeadCell3>passport no. </TableHeadCell3>
              <TableHeadCell3>actual profession</TableHeadCell3>
              <TableHeadCell3>visa profession</TableHeadCell3>
              <TableHeadCell3>agent</TableHeadCell3>
              <TableHeadCell3>visa recieved date</TableHeadCell3>
              <TableHeadCell3>process charges</TableHeadCell3>
              <TableHeadCell3>training charges</TableHeadCell3>
              <TableHeadCell3>sector charges</TableHeadCell3>
              <TableHeadCell3>partial charges</TableHeadCell3>
              <TableHeadCell3>consulate setting charges</TableHeadCell3>

              <TableHeadCell3>client invoice</TableHeadCell3>

              <TableHeadCell3>penalty charges</TableHeadCell3>

              <TableHeadCell3>Edit</TableHeadCell3>
            </TableHeadRow3>
          </TableHead3>
  
          <TableBody3>
            <TableRow3>
              <TableCell3>{1}</TableCell3>
              <TableCell3>party code </TableCell3>
              <TableCell3>company name</TableCell3>
              <TableCell3>candidate nane</TableCell3>
              <TableCell3>passport no. </TableCell3>
              <TableCell3>actual profession</TableCell3>
              <TableCell3>visa profession</TableCell3>
              <TableCell3>agent</TableCell3>
              <TableCell3>visa recieved date</TableCell3>
              <TableCell3>process charges</TableCell3>
              <TableCell3>training charges</TableCell3>
              <TableCell3>sector charges</TableCell3>
              <TableCell3>partial charges</TableCell3>
              <TableCell3>consulate setting charges</TableCell3>

              <TableCell3>client invoice</TableCell3>

              <TableCell3>penalty charges</TableCell3>

              <TableCell3>
              <BlueButton
                    text={"Edit"}
                    onClick={() => {
                      props.onClickEdit();
                    }}
                  />
              </TableCell3>
            </TableRow3>
          </TableBody3>
        </Table3>
      </div>
    );
  };
  
  export default PenaltyChargesTable;
  