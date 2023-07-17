import { JobOrderInterface } from '../type'
import { BlueButton, GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';
import { SectorInterface } from '../../../masters/sector/type';
import { CompanyInterface } from '../../../masters/company/type';
import { CountryInterface } from '../../../masters/country/type';
// import { BDEList, OPManagerList, rcList, recruitManagerList, rsList } from '../../db/user';
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

            <Table  >
                <TableHead >
                    <TableHeadRow  >
                        <TableHeadCell  > Sr No.</TableHeadCell>
                        <TableHeadCell > Job Order Number</TableHeadCell>
                        <TableHeadCell > Date</TableHeadCell>
                        <TableHeadCell > Company</TableHeadCell>
                        <TableHeadCell > Country</TableHeadCell>
                        <TableHeadCell > BDE</TableHeadCell>
                        <TableHeadCell > Sector</TableHeadCell>
                        <TableHeadCell > Opration Manager</TableHeadCell>
                        <TableHeadCell > Recruit Manager</TableHeadCell>
                        <TableHeadCell > Recruit Supervisor</TableHeadCell>
                        <TableHeadCell > Recruit Coordinator</TableHeadCell>
                        <TableHeadCell > Action</TableHeadCell>

                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.jobOrderList.map((ele, index) => (

                        <TableRow key={index}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell > {ele.jobOrderNumber}</TableCell>
                            <TableCell > {convertDateFormat(ele.date)}</TableCell>
                            <TableCell > {ele.company_name ?? ""}</TableCell>
                            <TableCell > {ele.client_country_name ?? ""}</TableCell>
                            <TableCell > {ele.bde_name ?? ""}</TableCell>
                            {/* <TableCell > {BDEList.map((user) => user.id == ele.BDEName ? user.name : "")}</TableCell> */}
                            <TableCell > {props.sectorList.map((sector) => sector.id == ele.sectorId ? sector.name : "")}</TableCell>
                            <TableCell > {ele.operation_manager_name ?? ""}</TableCell>
                            <TableCell > {ele.recruitment_manager_name ?? ""}</TableCell>
                            <TableCell > {ele.rs_name ?? ""}</TableCell>
                            <TableCell > {ele.rc_name ?? ""}</TableCell>
                            <TableCell >
                                {ele.rsId == 0 || ele.rcId == 0 ?
                                    <GreenButton text={" Assign"} onClick={() => {
                                        props.onClickEdit(ele)
                                    }} /> :
                                    <BlueButton text={" Edit"} onClick={() => {
                                        props.onClickEdit(ele)
                                    }} />
                                }





                            </TableCell>
                        </TableRow>
                    ))}



                </TableBody>
            </Table>

        </div>
    )
}

export default JobOrderTable

