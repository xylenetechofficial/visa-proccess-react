import { useEffect, useState } from "react";
import { updateVisaAuthorisation } from "../repository";
import { VisaAuthorisationInterface } from "../type";
import {
    Box,
    Button,
    styled,
    TextField,
    Modal,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { showMessage } from "../../../../utils/alert";
import { BlueButton } from "../../../../componenets/CustomButton";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";

const Modalstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "35%",
    bgcolor: "background.paper",
    dispaly: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: 24,
    height: "auto",
    borderRadius: "5px"
};
const ContentHeading = styled(AppBar)(() => ({
    position: "relative",
    backgroundColor: "#024453",
    borderRadius: "5px 5px 0px 0px",
    color: "white"
}))
// deign for modal content
const ContentBody = styled(Box)(() => ({
    overflow: "auto",
    height: "75%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // border: "1px solid black", 
    margin: "10%"
}))



const Title = styled("span")(() => ({
    fontSize: "2rem",
    fontWeight: "500",
    textTransform: "capitalize",
    color: "white"
}));





export default function Main(props: { visaAuthorisation: VisaAuthorisationInterface, onClose: any, fetchVisaAuthorisationList: any }) {
    const [name, setName] = useState('')





    async function onClickSave() {

        // call update
        await updateVisaAuthorisation(props.visaAuthorisation.id ?? 0, {
            name: name,
        })

        props.fetchVisaAuthorisationList()
        props.onClose()
    }

    useEffect(() => {
        setName(props.visaAuthorisation.name)

    }, [])

    return (

        <ModalContent
        buttonName="Update"
        handleClick={onClickSave}
        title="Update Visa Authorisation"
        onClose={props.onClose}
    >

          {/* name Input */}
          <StandardInput
            label="Agent Name"
            value={name}
            onChangeValue={(value: string) => {
                setName(value);
            }}
        />

      
    </ModalContent>
    )
}