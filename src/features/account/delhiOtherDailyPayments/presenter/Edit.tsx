import { Checkbox } from "flowbite-react"
import { Table2, TableBody, TableCell, TableHead2, TableHeadCell2, TableHeadRow2, TableRow } from "../../../../componenets/Table"
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
        <Table2>
          <TableHead2>
            <TableHeadRow2>
              <TableHeadCell2> Sr No.</TableHeadCell2>
              <TableHeadCell2> CONDIDATE NAME</TableHeadCell2>
              <TableHeadCell2> PASSPORT NO</TableHeadCell2>
              <TableHeadCell2> COMPANY NAME</TableHeadCell2>
              <TableHeadCell2> AGENT </TableHeadCell2>
              <TableHeadCell2> TOTAL SERVICE CHARGES </TableHeadCell2>
              <TableHeadCell2> <Checkbox /> </TableHeadCell2>
              <TableHeadCell2> AMOUNT RECEIVED</TableHeadCell2>
              <TableHeadCell2> RECEIVED AT </TableHeadCell2>
              <TableHeadCell2> SERVICE TAX</TableHeadCell2>
              <TableHeadCell2> SERVICE TAX RECEIVED</TableHeadCell2>


            </TableHeadRow2>
          </TableHead2>
          <TableBody>
            {dummy.map((ele, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                {/* <TableCell> {ele.id}</TableCell> */}
                <TableCell>MOHAMMAD RASHID </TableCell>
                <TableCell>
                  L7252926
                </TableCell>
                <TableCell> SOUNDLINES ADMINISTERATIVE COMPANY</TableCell>
                <TableCell>  unregistered(delhi)</TableCell>
                <TableCell> 2400</TableCell>
                <TableCell> <Checkbox /></TableCell>
                <TableCell>4500</TableCell>
                <TableCell> 09-feb-2022</TableCell>
                <TableCell> YES<p className="text-red-500 cursor-pointer font-medium" onClick={() => props.onClickEdit("paymentdetails", ele)}>{ele}/-</p></TableCell>
                <TableCell>yes</TableCell>
                {/* <TableCell>
          <p className="text-red-500 cursor-pointer font-medium" onClick={() => props.onClickEdit("agentcommission", ele)}>
            -UP</p>
        </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table2>
        <GreenButton text="Submit" onClick={() => { console.log("first"), props.setModalName("") }
        } />
      </div>
      </Box>


                </Modal>

    </>
  )
}