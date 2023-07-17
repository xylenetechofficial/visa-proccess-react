import { useEffect, useState } from "react";
import { createUser, deleteUser, readUserList, updateUser } from "../repository";
import { UserInterface } from "../type";
import ItemRow from './Item'
import CreateModal from './Create'
import EditModal from './Edit'
import { Box, Button, Icon, IconButton, TextField, styled } from "@mui/material";
import UserTable from "./Table";
import { confirmationMessage, showMessage } from "../../../../utils/alert";
import { Heading1, Heading3 } from "../../../../componenets/CoustomHeader";
import { GreenButton, YellowButton } from "../../../../componenets/CustomButton";
import { CustomButton, CustomButton2 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    const [userList, setUserList] = useState<UserInterface[]>([])

    const [editUser, setEditUser] = useState<UserInterface>({} as UserInterface)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: UserInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.name.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, userList);

    const onClickCreate = () => {
        setModalName('create');

    }

    const onClickEdit = (user: UserInterface) => {
        setEditUser(user)
        console.log("onClickEdit");   // Only Dev
        console.log(user);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (user: UserInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && user.id) {
            const res = await deleteUser(user.id);
            fetchUserList()
        }
    }

    // useEffect(() => {
    // }, [editUser, modalName])

    const fetchUserList = async () => {
        // setUserList(await readUserList(true))
    }
    useEffect(() => {

        fetchUserList()

    }, [])



    return (

        <div >
            <CardHeader>
                <Heading3 text={" User"} color={"text-zinc-700"} />
                {/* User List */}


                    <CustomButton2 buttonText="Add filter" icon={<FaFilter />}  />
                   

                {/* search bar */}

                <form>
                    <TextField
                        id="search-bar"
                        className="text"
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                        }}
                        label="Enter the name"
                        variant="outlined"
                        placeholder="Search..."
                        size="small"
                    />
                    <IconButton type="submit" aria-label="search">
                        <Icon>search</Icon>
                    </IconButton>

                </form>
                <GreenButton text={"Add User +"} onClick={() => {
                    setModalName("create")
                }} />
                {/* <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                        setModalName("create")
                    }}
                >
                    Add User +
                </Button> */}
                {/* <IconButton>
                    <Icon color="primary">refresh</Icon>
                </IconButton> */}
            </CardHeader>


            {/*  user stable */}
            <UserTable
                userList={dataFiltered}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
            />

            {/* <!-- Modal --> */}

            {/* Create */}
            {modalName !== "create" ? "" : <CreateModal onClose={() => setModalName("")} fetchUserList={fetchUserList} />}

            {/* Edit */}
            {modalName !== "edit" ? "" : <EditModal user={editUser} onClose={() => setModalName("")} fetchUserList={fetchUserList}
            />}
        </div>
    )
}