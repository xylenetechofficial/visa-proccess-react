import { useEffect, useState } from "react";
import { updateUser } from "../repository";
import { UserInterface } from "../type";
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





export default function Main(props: { user: UserInterface, onClose: any, fetchUserList: any }) {
    const [name, setName] = useState('')





    async function onClickSave() {

        // // call update
        // const data = await updateUser(props.user.id ?? 0, {
        //     name: name,
        // })
        // // show alert
        // // alert(data.message)
        // showMessage(data.message)
        props.fetchUserList()
        props.onClose()
    }

    useEffect(() => {
        setName(props.user.name)

    }, [])

    return (

        <Modal
            open={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {/* modal */}
            <Box sx={Modalstyle}>
                {/* heading */}

                <ContentHeading
                    sx={{

                    }}

                >
                    <Toolbar>
                        <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                        >
                            <Title> Update User</Title>


                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => {
                                props.onClose()
                            }}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </ContentHeading>

                {/* body */}
                <ContentBody >

                    {/* name Input */}
                    
                    <TextField
                        fullWidth
                        sx={{ margin: "2% 0%", border: "none" }}
                        required
                        id="outlined-required"
                        label="User Name"
                        // defaultValue="Tes"s
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />

                    {/* add button */}
                    {/* <Button
                        sx={{ margin: "2% 0%" }}
                        variant="contained"
                        color="success"
                        onClick={onClickSave}
                    >
                        Update User
                    </Button> */}
                    <BlueButton text={"Update"} onClick={onClickSave}/>


                </ContentBody>
            </Box>


        </Modal>
    )
}