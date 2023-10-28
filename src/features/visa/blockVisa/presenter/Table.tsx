import { BlockVisaInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3,  TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
import { SectorInterface } from '../../../masters/sector/type';
import { CompanyInterface } from '../../../masters/company/type';
import { CountryInterface } from '../../../masters/country/type';
import { convertDateFormat } from '../../../../utils/function';




const BlockVisaTable = (props: {
    snoBase:number,
    blockVisaList: BlockVisaInterface[],
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
                    {props.blockVisaList.map((ele, index) => (

                        <TableRow key={index}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell > {ele.blockVisaNumber}</TableCell>
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


            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableHeadCell3  > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > BLOCK VISA CODE</TableHeadCell3>
                        <TableHeadCell3 > INDEX DATE</TableHeadCell3>
                        <TableHeadCell3 > COMPANY NAME</TableHeadCell3>
                        <TableHeadCell3 > VISA ISSUED DATE</TableHeadCell3>
                        <TableHeadCell3 > VISA EXPIRY DATE</TableHeadCell3>
                        <TableHeadCell3 > COUNTRY</TableHeadCell3>
                        <TableHeadCell3 > VISA DATE (ARABIC)</TableHeadCell3>
                        <TableHeadCell3 > VISA NUMBER</TableHeadCell3>
                        <TableHeadCell3 > VISA FEE</TableHeadCell3>
                        <TableHeadCell3 > VISA AUTHORIZATION</TableHeadCell3>
                        <TableHeadCell3 > VISA SUBMISSION</TableHeadCell3>
                        <TableHeadCell3 > SPONSOR ID</TableHeadCell3>
                        <TableHeadCell3 > Action</TableHeadCell3>

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.blockVisaList.map((ele, index) => (

                        <TableRow3 key={index}>
                           <TableCell3 >{index + props.snoBase+1}</TableCell3>
                            <TableCell3 > {ele.id}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.index_date)}</TableCell3>
                            {/* <TableCell3 > {props.companyList.map((company) => company.id == ele.company ? company.name : "")}</TableCell3> */}
                            <TableCell3 > {ele.company_name ?? ""}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.visa_issued_date)}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.visa_expiry_date)}</TableCell3>
                            {/* <TableCell3 > {props.countryList.map((country) => country.id == ele.country ? country.name : "")}</TableCell3> */}
                            <TableCell3 > {ele.company_name ?? ""}</TableCell3>
                            <TableCell3 > {ele.visa_date_arabic}</TableCell3>
                            <TableCell3 > {ele.visa_number}</TableCell3>
                            <TableCell3 > {ele.visa_fee}</TableCell3>
                            <TableCell3 > {ele.visa_authorization_name ?? ""}</TableCell3>
                            <TableCell3 > {ele.visa_submission}</TableCell3>
                            <TableCell3 > {ele.sponsor_id}</TableCell3>
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

export default BlockVisaTable

