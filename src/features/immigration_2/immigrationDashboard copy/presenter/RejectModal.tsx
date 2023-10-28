import { useEffect, useState } from "react";
import { updateImmigration } from "../repository";
import { ImmigrationInterface } from "../type";
import { showMessage } from "../../../../utils/alert";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput, TextAreaInput } from "../../../../componenets/Input";








export default function Main(props: { immigration: ImmigrationInterface, onClose: any, fetchImmigrationList: any }) {


    const initValue: ImmigrationInterface = {
        name: '',
        company_name: '',
        passport_no: '',
        party_code: 0,
        division: '',
        pp_issued_date: '',
        pp_expiry_date: '',
        place_of_issue: '',
        date_of_birth: '',
        address: '',
        nominee_name: '',
        nominee_relation: '',
        place_of_birth: '',
        visa_number: '',
        actual_profession: '',
        visa_profession: '',
        agent_name: '',
        agent_location_name: '',
        visa_authorization_name: '',
        visa_issued_date: '',
        visa_received_date: '',
        visa_expire_date: '',
        mol_number: '',
        immigration_required: '',
        immigration_submission_date: '',
        immigration_received_date: '',
        immigration_reject_remarks: '',
        is_without: 0,
    }
    const [immigration, setImmigration] = useState(initValue)


    useEffect(() => {
        setImmigration(props.immigration)
    }, [props.immigration])


    async function onClickSave() {
        const data = await updateImmigration(props.immigration.id ?? 0, immigration)
        props.onClose()
    }

    return (

        <ModalContent
            buttonName="Submit"
            handleClick={onClickSave}
            title="Immigration Reject"
            onClose={props.onClose}
        >

            Company: {immigration.company_name}
            <br /><br />
            Party Code: {immigration.party_code}
            <br /><br />
            Candidate: {immigration.name}
            <br /><br />
            Passport No: {immigration.passport_no}
            <br /><br />
            Agent: {immigration.agent_name}
            <br /><br />
            {/* name Input */}
            <h4>Remarks</h4>
            <TextAreaInput
                id="hdsfhsjh "
                label="Name"
                value={immigration.immigration_reject_remarks}
                onChange={(value: any) => {
                    setImmigration({ ...immigration, immigration_reject_remarks: value })
                }}
            />
        </ModalContent>
    )
}