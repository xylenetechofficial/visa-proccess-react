import {  AgreementInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
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
        <TableHeadCell3 width={100} > {e[0]}</TableHeadCell3>
    ));
    return (
        <div className='overflow-auto'>
          


            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                  {tableHeadingsComponent}

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.deployCandidateList.map((ele, index) => (

                        <TableRow3 key={index}>
                            <TableCell3 >{index + 1}</TableCell3>
                            <TableCell3 > {ele.party_code}</TableCell3>
                            <TableCell3 > {ele.company_name}</TableCell3>
                            <TableCell3 > {ele.candidate_name}</TableCell3>
                            <TableCell3 > {ele.passport_no}</TableCell3>
                            <TableCell3 > {ele.actual_profession}</TableCell3>
                            <TableCell3 > {ele.visa_profession}</TableCell3>
                            <TableCell3 > {ele.agent}</TableCell3>
                            <TableCell3 > {ele.rc_name}</TableCell3>
                            <TableCell3 > {ele.visa_received_date}</TableCell3>
                            <TableCell3 > {ele.visa_expiry_date}</TableCell3>
                            <TableCell3 > {ele.sector_from}</TableCell3>
                            <TableCell3 > {ele.sector_to}</TableCell3>
                            <TableCell3 > {ele.departure_date}</TableCell3>
                            <TableCell3 > {ele.payment_cleared}</TableCell3>
                            <TableCell3 > {ele.reported_for_agreement}</TableCell3>
                            <TableCell3 > {ele.remarks}</TableCell3>
                            <TableCell3 > {ele.contact_details}</TableCell3>
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
                        </TableRow3>
                    ))}



                </TableBody3>
            </Table3>

        </div>
    )
}

export default AgreementTable

