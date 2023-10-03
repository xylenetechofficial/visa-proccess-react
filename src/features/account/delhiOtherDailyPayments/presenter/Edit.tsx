import { Checkbox } from "flowbite-react"
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import { GreenButton } from "../../../../componenets/CustomButton"
import { Box, Modal, styled } from "@mui/material"

export default function Main(props: {
  onClickEdit: any,
  setModalName: any

}) {
  const dummy = [1, 2]
  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
  }));
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
  };
  return (
    <>
    <Modal open={true}
            onClose={() => props.setModalName(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
              
        <Box sx={style}>
              <h3 className="mb-4  dark:text-white text-xl p-3 font-bold text-gray-500 uppercase bg-[#F1F2F6] dark:bg-gray-500  w-auto"> delhi/other daily payment EDIT</h3>
            <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => props.setModalName(false)}
            >
                <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
      <div className="overflow-auto mt-5">

        {/* <div className="text-xl p-3 font-bold text-gray-500 uppercase bg-[#F1F2F6] dark:bg-gray-500 dark:text-gray-500 w-auto">
          delhi/other daily payment EDIT
        </div> */}
        <Table3>
          <TableHead3>
            <TableHeadRow3>
              <TableHeadCell3> Sr No.</TableHeadCell3>
              <TableHeadCell3> CONDIDATE NAME</TableHeadCell3>
              <TableHeadCell3> PASSPORT NO</TableHeadCell3>
              <TableHeadCell3> COMPANY NAME</TableHeadCell3>
              <TableHeadCell3> AGENT </TableHeadCell3>
              <TableHeadCell3> TOTAL SERVICE CHARGES </TableHeadCell3>
              <TableHeadCell3> <Checkbox /> </TableHeadCell3>
              <TableHeadCell3> AMOUNT RECEIVED</TableHeadCell3>
              <TableHeadCell3> RECEIVED AT </TableHeadCell3>
              <TableHeadCell3> SERVICE TAX</TableHeadCell3>
              <TableHeadCell3> SERVICE TAX RECEIVED</TableHeadCell3>


            </TableHeadRow3>
          </TableHead3>
          <TableBody3>
            {dummy.map((ele, index) => (
              <TableRow3 key={index}>
                <TableCell3>{index + 1}</TableCell3>
                {/* <TableCell3> {ele.id}</TableCell3> */}
                <TableCell3>MOHAMMAD RASHID </TableCell3>
                <TableCell3>
                  L7252926
                </TableCell3>
                <TableCell3> SOUNDLINES ADMINISTERATIVE COMPANY</TableCell3>
                <TableCell3>  unregistered(delhi)</TableCell3>
                <TableCell3> 2400</TableCell3>
                <TableCell3> <Checkbox /></TableCell3>
                <TableCell3>4500</TableCell3>
                <TableCell3> 09-feb-2022</TableCell3>
                <TableCell3> YES<p className="text-red-500 cursor-pointer font-medium" onClick={() => props.onClickEdit("paymentdetails", ele)}>{ele}/-</p></TableCell3>
                <TableCell3>yes</TableCell3>
                {/* <TableCell3>
          <p className="text-red-500 cursor-pointer font-medium" onClick={() => props.onClickEdit("agentcommission", ele)}>
            -UP</p>
        </TableCell3> */}
              </TableRow3>
            ))}
          </TableBody3>
        </Table3>
        <GreenButton text="Submit" onClick={() => { console.log("first"), props.setModalName("") }
        } />
      </div>
      </Box>


                </Modal>

    </>
  )
}