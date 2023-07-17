import {  AgreementInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, Table2, TableBody, TableBody2, TableCell, TableCell2, TableHead, TableHead2, TableHeadCell, TableHeadCell2, TableHeadRow, TableHeadRow2, TableRow, TableRow2 } from '../../../../componenets/Table';
import { SectorInterface } from '../../../masters/sector/type';
import { CompanyInterface } from '../../../masters/company/type';
import { CountryInterface } from '../../../masters/country/type';




const AgreementTable= (props: {
    deployCandidateList:AgreementInterface[]
    // blockVisaList: BlockVisaInterface[],
    // onClickEdit: any,
    // onClickDelete: any
    // sectorList: SectorInterface[],
    // companyList: CompanyInterface[],
    // countryList: CountryInterface[],
}) => {

    let tableHeadings = [
        ["Sr No.", ],
        ["PARTY CODE"],
        ["COMPANY NAME"],
        ["CANDIDATE NAME"],
        ["PASSPORT NO."],
        ["ACTUAL PROFESSION"],
        ["VISA PROFESSION"],
        ["AGENT"],
        ["RC NAME"],
        ["VISA RECEIVED DATE"],
        ["VISA EXPIRY DATE"],
        ["SECTOR FROM"],
        ["SECTOR TO"],
        ["DEPARTURE DATE"],
        ["PAYMENT CLEARED"],
        ["REPORTED FOR AGREEMENT"],
        ["REMARKS"],
        ["CONTACT DETAILS"]
    ];
    let tableHeadingsComponent = tableHeadings.map((e)=>(
        <TableHeadCell2 width={100} > {e[0]}</TableHeadCell2>
    ));
    return (
        <div className='overflow-auto'>
          


            <Table2  >
                <TableHead2 >
                    <TableHeadRow2  >
                  {tableHeadingsComponent}

                    </TableHeadRow2>
                </TableHead2>
                <TableBody2>
                    {props.deployCandidateList.map((ele, index) => (

                        <TableRow2 key={index}>
                            <TableCell2 >{index + 1}</TableCell2>
                            <TableCell2 > {ele.party_code}</TableCell2>
                            <TableCell2 > {ele.company_name}</TableCell2>
                            <TableCell2 > {ele.candidate_name}</TableCell2>
                            <TableCell2 > {ele.passport_no}</TableCell2>
                            <TableCell2 > {ele.actual_profession}</TableCell2>
                            <TableCell2 > {ele.visa_profession}</TableCell2>
                            <TableCell2 > {ele.agent}</TableCell2>
                            <TableCell2 > {ele.rc_name}</TableCell2>
                            <TableCell2 > {ele.visa_received_date}</TableCell2>
                            <TableCell2 > {ele.visa_expiry_date}</TableCell2>
                            <TableCell2 > {ele.sector_from}</TableCell2>
                            <TableCell2 > {ele.sector_to}</TableCell2>
                            <TableCell2 > {ele.departure_date}</TableCell2>
                            <TableCell2 > {ele.payment_cleared}</TableCell2>
                            <TableCell2 > {ele.reported_for_agreement}</TableCell2>
                            <TableCell2 > {ele.remarks}</TableCell2>
                            <TableCell2 > {ele.contact_details}</TableCell2>
                            {/* <TableCell2 > {props.companyList.map((company) => company.id == ele.company ? company.name : "")}</TableCell2> */}
                           
                            {/* <TableCell2 > {props.countryList.map((country) => country.id == ele.country ? country.name : "")}</TableCell2> */}
                          
                            {/* <TableCell2 >

                        
                        <BlueButton text={" Edit"} preIcon='edit' onClick={() => {
                                    props.onClickEdit(ele)
                                }} />

                                <RedButton text={"Delete"} preIcon='delete' onClick={() => {
                                    props.onClickDelete(ele)
                                }} />
                       

                            </TableCell2> */}
                        </TableRow2>
                    ))}



                </TableBody2>
            </Table2>

        </div>
    )
}

export default AgreementTable

