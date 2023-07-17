import { JobOrderInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, Table2, TableBody, TableBody2, TableCell, TableCell2, TableHead, TableHead2, TableHeadCell, TableHeadCell2, TableHeadRow, TableHeadRow2, TableRow, TableRow2 } from '../../../../componenets/Table';
import { SectorInterface } from '../../../masters/sector/type';
import { CompanyInterface } from '../../../masters/company/type';
import { CountryInterface } from '../../../masters/country/type';
// import { BDEList } from '../../db/user';
import { convertDateFormat } from '../../../../utils/function';




const JobOrderTable = (props: {
    jobOrderList: JobOrderInterface[],
    onClickEdit: any,
    onClickDelete: any
    sectorList: SectorInterface[],
    companyList: CompanyInterface[],
    countryList: CountryInterface[],
}) => {
    return (
        <div className='overflow-auto'>
            {/* <Table  >
                <TableHead >
                    <TableHeadRow  >
                        <TableHeadCell  > Sr No.</TableHeadCell>
                        <TableHeadCell > Job Order Number</TableHeadCell>
                        <TableHeadCell > Date</TableHeadCell>
                        <TableHeadCell > Company</TableHeadCell>
                        <TableHeadCell > Country</TableHeadCell>
                        <TableHeadCell > BDE</TableHeadCell>
                        <TableHeadCell > Sector</TableHeadCell>
                        <TableHeadCell > Action</TableHeadCell>

                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.jobOrderList.map((ele, index) => (

                        <TableRow key={index}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell > {ele.jobOrderNumber}</TableCell>
                            <TableCell > {ele.date}</TableCell>
                            <TableCell > {ele.company_name ?? ""}</TableCell>
                            <TableCell > {ele.client_country_name ?? ""}</TableCell>
                            <TableCell > {BDEList.map((user) => user.id == ele.BDEName ? user.name : "")}</TableCell>
                            <TableCell > {props.sectorList.map((sector) => sector.id == ele.sectorId ? sector.name : "")}</TableCell>
                            <TableCell >

                        
                        <BlueButton text={" Edit"} preIcon='edit' onClick={() => {
                                    props.onClickEdit(ele)
                                }} />

                                <RedButton text={"Delete"} preIcon='delete' onClick={() => {
                                    props.onClickDelete(ele)
                                }} />
                       

                            </TableCell>
                        </TableRow>
                    ))}



                </TableBody>
            </Table> */}


            <Table2  >
                <TableHead2 >
                    <TableHeadRow2  >
                        <TableHeadCell2  > Sr No.</TableHeadCell2>
                        <TableHeadCell2 > Job Order Number</TableHeadCell2>
                        <TableHeadCell2 > Date</TableHeadCell2>
                        <TableHeadCell2 > Company</TableHeadCell2>
                        <TableHeadCell2 > Country</TableHeadCell2>
                        <TableHeadCell2 > BDE</TableHeadCell2>
                        <TableHeadCell2 > Sector</TableHeadCell2>
                        <TableHeadCell2 > Action</TableHeadCell2>

                    </TableHeadRow2>
                </TableHead2>
                <TableBody2>
                    {props.jobOrderList.map((ele, index) => (

                        <TableRow2 key={index}>
                            <TableCell2 >{index + 1}</TableCell2>
                            <TableCell2 > {ele.jobOrderNumber}</TableCell2>
                            <TableCell2 > {convertDateFormat(ele.date)}</TableCell2>
                            <TableCell > {ele.company_name ?? ""}</TableCell>
                            <TableCell > {ele.client_country_name ?? ""}</TableCell>
                            <TableCell2 > {ele.bde_name}</TableCell2>
                            {/* <TableCell2 > {BDEList.map((user) => user.id == ele.BDEName ? user.name : "")}</TableCell2> */}
                            <TableCell2 > {props.sectorList.map((sector) => sector.id == ele.sectorId ? sector.name : "")}</TableCell2>
                            <TableCell2 >


                                <BlueButton text={" Edit"} preIcon='edit' onClick={() => {
                                    props.onClickEdit(ele)
                                }} />

                                <RedButton text={"Delete"} preIcon='delete' onClick={() => {
                                    props.onClickDelete(ele)
                                }} />


                            </TableCell2>
                        </TableRow2>
                    ))}



                </TableBody2>
            </Table2>

        </div>
    )
}

export default JobOrderTable

