import { IndexVisaInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, Table2, Table3, TableBody, TableBody2, TableBody3, TableCell, TableCell2, TableCell2lastColumn, TableCell3, TableHead, TableHead2, TableHead3, TableHeadCell, TableHeadCell2, TableHeadCell3, TableHeadRow, TableHeadRow2, TableHeadRow3, TableRow, TableRow2, TableRow3 } from '../../../../componenets/Table';
import { SectorInterface } from '../../../masters/sector/type';
import { CompanyInterface } from '../../../masters/company/type';
import { CountryInterface } from '../../../masters/country/type';
import { convertDateFormat } from '../../../../utils/function';




const IndexVisaTable = (props: {
    indexVisaList: IndexVisaInterface[],
    onClickEdit: any,
    onClickDelete: any
    sectorList: SectorInterface[],
    companyList: CompanyInterface[],
    countryList: CountryInterface[],
}) => {
   
    return (
        <div className='overflow-auto'>
           

            <Table3>
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableHeadCell3  > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > Job Order Number</TableHeadCell3>
                        <TableHeadCell3 > INDEX DATE</TableHeadCell3>
                        <TableHeadCell3 > COMPANY NAME</TableHeadCell3>
                        <TableHeadCell3 > Party Code</TableHeadCell3>
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
                    {props.indexVisaList.map((ele, index) => (

                        <TableRow3 key={index}>
                            <TableCell3 >{index + 1}</TableCell3>
                            <TableCell3 > {ele.jobOrderNo}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.index_date)}</TableCell3>
                            {/* <TableCell3 > {props.companyList.map((company) => company.id == ele.company ? company.name : "")}</TableCell3> */}
                            <TableCell3 > {ele.company_name??""}</TableCell3>
                            <TableCell3 > {ele.party_code}</TableCell3>
                    
                            <TableCell3 > {convertDateFormat(ele.visa_issued_date)}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.visa_expiry_date)}</TableCell3>  
                            {/* <TableCell3 > {props.countryList.map((country) => country.id == ele.country ? country.name : "")}</TableCell3> */}
                            <TableCell3 > {ele.country_name??""}</TableCell3>
                            <TableCell3 > {ele.visa_date_arabic}</TableCell3>
                            <TableCell3 > {ele.visa_number}</TableCell3>
                            <TableCell3 > {ele.visa_fee}</TableCell3>
                            <TableCell3 > {ele.visa_authorization_name??""}</TableCell3>
                            <TableCell3 > {ele.visa_submission}</TableCell3>
                            <TableCell3 > {ele.sponsor_id}</TableCell3>
                            <TableCell2lastColumn >

                        
                        {/* <BlueButton text={" Edit"} preIcon='edit' onClick={() => {
                                    props.onClickEdit(ele)
                                }} /> */}

                                <RedButton text={"Delete"} preIcon='delete' onClick={() => {
                                    props.onClickDelete(ele)
                                }} />
                       

                            </TableCell2lastColumn>
                        </TableRow3>
                    ))}



                </TableBody3>
            </Table3>

        </div>
    )
}

export default IndexVisaTable

