import { IndexVisaInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, Table2, TableBody, TableBody2, TableCell, TableCell2, TableCell2lastColumn, TableHead, TableHead2, TableHeadCell, TableHeadCell2, TableHeadRow, TableHeadRow2, TableRow, TableRow2 } from '../../../../componenets/Table';
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
           

            <Table2  >
                <TableHead2 >
                    <TableHeadRow2  >
                        <TableHeadCell2  > Sr No.</TableHeadCell2>
                        <TableHeadCell2 > Job Order Number</TableHeadCell2>
                        <TableHeadCell2 > INDEX DATE</TableHeadCell2>
                        <TableHeadCell2 > COMPANY NAME</TableHeadCell2>
                        <TableHeadCell2 > Party Code</TableHeadCell2>
                        <TableHeadCell2 > VISA ISSUED DATE</TableHeadCell2>
                        <TableHeadCell2 > VISA EXPIRY DATE</TableHeadCell2>
                        <TableHeadCell2 > COUNTRY</TableHeadCell2>
                        <TableHeadCell2 > VISA DATE (ARABIC)</TableHeadCell2>
                        <TableHeadCell2 > VISA NUMBER</TableHeadCell2>
                        <TableHeadCell2 > VISA FEE</TableHeadCell2>
                        <TableHeadCell2 > VISA AUTHORIZATION</TableHeadCell2>
                        <TableHeadCell2 > VISA SUBMISSION</TableHeadCell2>
                        <TableHeadCell2 > SPONSOR ID</TableHeadCell2>
                        <TableHeadCell2 > Action</TableHeadCell2>

                    </TableHeadRow2>
                </TableHead2>
                <TableBody2>
                    {props.indexVisaList.map((ele, index) => (

                        <TableRow2 key={index}>
                            <TableCell2 >{index + 1}</TableCell2>
                            <TableCell2 > {ele.jobOrderNo}</TableCell2>
                            <TableCell2 > {convertDateFormat(ele.index_date)}</TableCell2>
                            {/* <TableCell2 > {props.companyList.map((company) => company.id == ele.company ? company.name : "")}</TableCell2> */}
                            <TableCell2 > {ele.company_name??""}</TableCell2>
                            <TableCell2 > {ele.party_code}</TableCell2>
                    
                            <TableCell2 > {convertDateFormat(ele.visa_issued_date)}</TableCell2>
                            <TableCell2 > {convertDateFormat(ele.visa_expiry_date)}</TableCell2>  
                            {/* <TableCell2 > {props.countryList.map((country) => country.id == ele.country ? country.name : "")}</TableCell2> */}
                            <TableCell2 > {ele.country_name??""}</TableCell2>
                            <TableCell2 > {ele.visa_date_arabic}</TableCell2>
                            <TableCell2 > {ele.visa_number}</TableCell2>
                            <TableCell2 > {ele.visa_fee}</TableCell2>
                            <TableCell2 > {ele.visa_authorization_name??""}</TableCell2>
                            <TableCell2 > {ele.visa_submission}</TableCell2>
                            <TableCell2 > {ele.sponsor_id}</TableCell2>
                            <TableCell2lastColumn >

                        
                        {/* <BlueButton text={" Edit"} preIcon='edit' onClick={() => {
                                    props.onClickEdit(ele)
                                }} /> */}

                                <RedButton text={"Delete"} preIcon='delete' onClick={() => {
                                    props.onClickDelete(ele)
                                }} />
                       

                            </TableCell2lastColumn>
                        </TableRow2>
                    ))}



                </TableBody2>
            </Table2>

        </div>
    )
}

export default IndexVisaTable

