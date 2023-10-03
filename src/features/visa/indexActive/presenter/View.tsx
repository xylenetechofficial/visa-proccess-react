import { BlueButton } from "../../../../componenets/CustomButton";
import { FullScreenModal } from "../../../../componenets/Modal";
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";



export default function Main(props: { onClose: any, }){
    const onClickAdd = () =>{

    }
    return(
        <>
         <FullScreenModal
        buttonName=""
        handleClick={onClickAdd}
        title="Index Visa Professions View"
        onClose={props.onClose}
      >

<div className="overflow-auto">
          <Table3>
            <TableHead3>
              <TableHeadRow3>
                <TableHeadCell3>sr.no</TableHeadCell3>
                <TableHeadCell3>index date</TableHeadCell3>
                <TableHeadCell3>company name</TableHeadCell3>
                <TableHeadCell3>party code </TableHeadCell3>
                <TableHeadCell3>visa profession</TableHeadCell3>
                <TableHeadCell3>aravic visa category</TableHeadCell3>
                <TableHeadCell3>visa quantity</TableHeadCell3>
                <TableHeadCell3>visa used</TableHeadCell3>
                <TableHeadCell3>dead visa qty</TableHeadCell3>
                <TableHeadCell3>visa balance</TableHeadCell3>
                <TableHeadCell3>mofa done</TableHeadCell3>
                <TableHeadCell3>pp submission</TableHeadCell3>
                <TableHeadCell3>rejected</TableHeadCell3>
                <TableHeadCell3>cancelled</TableHeadCell3>
              </TableHeadRow3>
            </TableHead3>
            <TableBody3>
              <TableRow3>
                <TableCell3>1</TableCell3>
                <TableCell3>index date</TableCell3>
                <TableCell3>company name</TableCell3>
                <TableCell3>party code </TableCell3>
                <TableCell3>visa profession</TableCell3>
                <TableCell3>aravic visa category</TableCell3>
                <TableCell3>visa quantity</TableCell3>
                <TableCell3>visa used</TableCell3>
                <TableCell3>dead visa qty</TableCell3>
                <TableCell3>visa balance</TableCell3>
                <TableCell3>mofa done</TableCell3>
                <TableCell3>pp submission</TableCell3>
                <TableCell3>rejected</TableCell3>
                <TableCell3>cancelled</TableCell3>
              
              </TableRow3>
            </TableBody3>
          </Table3>
        </div>

      </FullScreenModal>
        
        </>
    )
}