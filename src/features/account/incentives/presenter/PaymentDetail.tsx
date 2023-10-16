import {  useState } from "react";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { Box } from "@mui/material";
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
import { AgentPaymentReceivedInterface } from "../../agentPaymentsRecieved/type";


export default function Main(props: {
    onClose: () => void,
    fetchAccountDashboardList: (value:any) => void,
    currentElement: AgentPaymentReceivedInterface,
    sectorList: SectorInterface[],
    companyList: CompanyInterface[],
    countryList: CountryInterface[],
}) {
   

  
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #fff',
        boxShadow: 24,
        borderRadius: 2,
        p: 4,
    };
    return (

    

        <Box sx={style}>
            <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">Payment Detail</h3>
            <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => props.onClose()}
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
            
            <div className="grid grid-cols-1 py-3  gap-2 shadow justify-center">

                 <UpdateContentBox>
                    <SubHeading1 text="Agent Name   :" />
                    <SubHeading1 text={String(props.currentElement?.party_code)} />
                </UpdateContentBox>
                <UpdateContentBox>
                    <SubHeading1 text="Company Name   :" />
                    <SubHeading1 text={props.currentElement?.company_name} />
                </UpdateContentBox>

           
               
            
                <div className='overflow-auto' style={{ justifyContent: "center" }}>

            <Table3  >
                <TableHead3 >
                    <TableHeadRow3 >
                        <TableHeadCell3  > PAYMENYT RECEIVED</TableHeadCell3>
                        <TableHeadCell3 > RECEIVED DATE</TableHeadCell3>
                        <TableHeadCell3 > ADVANCE </TableHeadCell3>
                        <TableHeadCell3 >  RECIEVED BY</TableHeadCell3>
                        

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                


                    <TableRow3>
                        <TableCell3>
                            1
                        </TableCell3>
                        <TableCell3>
                            2
                        </TableCell3>
                        <TableCell3>
                            3
                        </TableCell3>
                        <TableCell3>
                            4
                        </TableCell3>
                    </TableRow3>
                </TableBody3>
            </Table3>

        </div>

            </div>
        </Box>



   
    )
}