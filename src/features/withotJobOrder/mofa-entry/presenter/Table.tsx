import { MofaEntryInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, Table2, TableBody, TableBody2, TableCell, TableCell2, TableHead, TableHead2, TableHeadCell, TableHeadCell2, TableHeadRow, TableHeadRow2, TableRow, TableRow2 } from '../../../../componenets/Table';
import { SectorInterface } from '../../../masters/sector/type';
import { CompanyInterface } from '../../../masters/company/type';
import { CountryInterface } from '../../../masters/country/type';
import { convertDateFormat } from '../../../../utils/function';




const MofaEntryTable = (props: {
    mofaEntryList: MofaEntryInterface[],
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
                    {props.mofaEntryList.map((ele, index) => (

                        <TableRow key={index}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell > {ele.mofaEntryNumber}</TableCell>
                            <TableCell > {ele.date}</TableCell>
                            <TableCell > {props.companyList.map((company) => company.id == ele.companyId ? company.name : "")}</TableCell>
                            <TableCell > {props.countryList.map((country) => country.id == ele.CountryId ? country.name : "")}</TableCell>
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
                        <TableHeadCell2 > COMPANY</TableHeadCell2>
                        <TableHeadCell2 > CANDIDATE NAME</TableHeadCell2>
                        <TableHeadCell2 > PASSPORT NO</TableHeadCell2>
                        <TableHeadCell2 > ACTUAL PROFESSION</TableHeadCell2>
                        <TableHeadCell2 > AGENT</TableHeadCell2>
                        <TableHeadCell2 > RC</TableHeadCell2>
                        <TableHeadCell2 >VISA PROFESSION</TableHeadCell2>
                        <TableHeadCell2 >MOFA NUMBER</TableHeadCell2>
                        <TableHeadCell2 >PP/COPY</TableHeadCell2>
                        <TableHeadCell2 > ADDED DATE</TableHeadCell2>
                        <TableHeadCell2 > Action</TableHeadCell2>

                    </TableHeadRow2>
                </TableHead2>
                <TableBody2>
                    {props.mofaEntryList.map((ele, index) => (

                        <TableRow2 key={index}>
                            <TableCell2 >{index + 1}</TableCell2>
                            {/* <TableCell2 > {props.companyList.map((company) => company.id == ele.company_id ? company.name : "")}</TableCell2> */}
                            <TableCell2 > {ele.company_name}</TableCell2>
                            <TableCell2 > {ele.name}</TableCell2>
                            <TableCell2 > {ele.passport_no}</TableCell2>
                            <TableCell2 > {ele.actual_profession}</TableCell2>
                            <TableCell2 > {ele.agent_name}</TableCell2>
                            <TableCell2 > {ele.rc_name}</TableCell2>
                            <TableCell2 > {ele.visa_profession}</TableCell2>
                            <TableCell2 > {ele.mofa_number}</TableCell2>
                            <TableCell2 > {ele.pp_copy}</TableCell2>
                            <TableCell2 > {convertDateFormat(ele.createAt)}</TableCell2>

                            <TableCell2 >

                        
                        <BlueButton text={" Edit"} preIcon='edit' onClick={() => {
                                    props.onClickEdit(ele)
                                }} />

                                {/* <RedButton text={"Delete"} preIcon='delete' onClick={() => {
                                    props.onClickDelete(ele)
                                }} /> */}
                       

                            </TableCell2>
                        </TableRow2>
                    ))}



                </TableBody2>
            </Table2>

        </div>
    )
}

export default MofaEntryTable

