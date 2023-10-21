import { SelectionInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import {  Table3,  TableBody3,  TableCell3,  TableHead3,  TableHeadCell3,  TableHeadRow3,  TableRow3 } from '../../../../componenets/Table';
import { SectorInterface } from '../../../masters/sector/type';
import { CompanyInterface } from '../../../masters/company/type';
import { CountryInterface } from '../../../masters/country/type';
import { convertDateFormat } from '../../../../utils/function';




const SelectionTable = (props: {
    snoBase:number,
    selectionList: SelectionInterface[],
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
                    {props.selectionList.map((ele, index) => (

                        <TableRow key={index}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell > {ele.selectionNumber}</TableCell>
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


            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableHeadCell3  > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > COMPANY</TableHeadCell3>
                        <TableHeadCell3 > CANDIDATE NAME</TableHeadCell3>
                        <TableHeadCell3 > PASSPORT NO</TableHeadCell3>
                        <TableHeadCell3 > ACTUAL PROFESSION</TableHeadCell3>
                        <TableHeadCell3 > AGENT</TableHeadCell3>
                        <TableHeadCell3 > ADDED DATE</TableHeadCell3>
                        <TableHeadCell3 > Action</TableHeadCell3>

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.selectionList.map((ele, index) => (

                        <TableRow3 key={index}>
                            <TableCell3 >{index + props.snoBase+1}</TableCell3>
                            {/* <TableCell3 > {props.companyList.map((company) => company.id == ele.company_id ? company.name : "")}</TableCell3> */}
                            <TableCell3 > {ele.company_name??""}</TableCell3>
                            <TableCell3 > {ele.name}</TableCell3>
                            <TableCell3 > {ele.passport_no}</TableCell3>
                            <TableCell3 > {ele.actual_profession}</TableCell3>
                            <TableCell3 > {ele.agent_name??""}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.createAt)}</TableCell3>
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

export default SelectionTable

