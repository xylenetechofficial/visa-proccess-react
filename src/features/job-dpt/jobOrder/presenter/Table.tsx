import { JobOrderInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3,  TableBody3, TableCell3, TableHead3, TableHeadCell3,  TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
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
                            <TableCell3 >{index + 1}</TableCell3>
                            <TableCell3 > {ele.jobOrderNumber}</TableCell3>
                            <TableCell3 > {ele.date}</TableCell3>
                            <TableCell3 > {ele.company_name ?? ""}</TableCell3>
                            <TableCell3 > {ele.client_country_name ?? ""}</TableCell3>
                            <TableCell3 > {BDEList.map((user) => user.id == ele.BDEName ? user.name : "")}</TableCell3>
                            <TableCell3 > {props.sectorList.map((sector) => sector.id == ele.sectorId ? sector.name : "")}</TableCell3>
                            <TableCell3 >

                        
                        <BlueButton text={" Edit"} preIcon='edit' onClick={() => {
                                    props.onClickEdit(ele)
                                }} />

                                <RedButton text={"Delete"} preIcon='delete' onClick={() => {
                                    props.onClickDelete(ele)
                                }} />
                       

                            </TableCell3>
                        </TableRow>
                    ))}



                </TableBody>
            </Table> */}


            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableHeadCell3  > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > Job Order Number</TableHeadCell3>
                        <TableHeadCell3 > Date</TableHeadCell3>
                        <TableHeadCell3 > Company</TableHeadCell3>
                        <TableHeadCell3 > Country</TableHeadCell3>
                        <TableHeadCell3 > BDE</TableHeadCell3>
                        <TableHeadCell3 > Sector</TableHeadCell3>
                        <TableHeadCell3 > Action</TableHeadCell3>

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.jobOrderList.map((ele, index) => (

                        <TableRow3 key={index}>
                            <TableCell3 >{index + 1}</TableCell3>
                            <TableCell3 > {ele.jobOrderNumber}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.date)}</TableCell3>
                            <TableCell3 > {ele.company_name ?? ""}</TableCell3>
                            <TableCell3 > {ele.client_country_name ?? ""}</TableCell3>
                            <TableCell3 > {ele.bde_name}</TableCell3>
                            {/* <TableCell3 > {BDEList.map((user) => user.id == ele.BDEName ? user.name : "")}</TableCell3> */}
                            <TableCell3 > {props.sectorList.map((sector) => sector.id == ele.sectorId ? sector.name : "")}</TableCell3>
                            <TableCell3 >


                                <BlueButton text={" Edit"} preIcon='edit' onClick={() => {
                                    props.onClickEdit(ele)
                                }} />

                                <RedButton text={"Delete"} preIcon='delete' onClick={() => {
                                    props.onClickDelete(ele)
                                }} />


                            </TableCell3>
                        </TableRow3>
                    ))}



                </TableBody3>
            </Table3>

        </div>
    )
}

export default JobOrderTable

