import { useEffect, useState } from "react";
import { createClientLogin, readClientLogin } from "../repository";
import { ClientLogin } from "../type";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";
import { PermissionGroupInterface } from "../../permissionGroup/type";
import { RenderPermissions } from "./RenderCompanys";



export default function Main(props: {
    onClose: any,
}) {
    const initValue: ClientLogin = {
        id: 0,
        name: '',
        user_name: '',
        password: '',
        active: 0,
        company_list: []
    }

    const [clientLogin, setClientLogin] = useState(initValue)
    const fetchClientLogin = async () => {
        const res: any = await readClientLogin(0)
        setClientLogin(res);
    }
    useEffect(() => {
        fetchClientLogin();
    }, []);

    async function onClickSave() {
        const data = await createClientLogin(clientLogin)

        if (!data) return
        props.onClose()
    }

    return (
        <FullScreenModal
            buttonName="Create"
            handleClick={onClickSave}
            title="Create ClientLogin"
            onClose={props.onClose}
        >
            <StandardInput
                label="Name"
                value={clientLogin.name}
                onChangeValue={(value: string) => {
                    setClientLogin({ ...clientLogin, name: value })
                }}
            />


            <StandardInput
                label="User Name"
                value={clientLogin.user_name}
                onChangeValue={(value: string) => {
                    setClientLogin({ ...clientLogin, user_name: value })
                }}
            />

            <StandardInput
                label="Password"
                value={clientLogin.password}
                onChangeValue={(value: string) => {
                    setClientLogin({ ...clientLogin, password: value })
                }}
            />

            <CustomRadioButton
                label="Active: "
                value={clientLogin.active}
                inlined
                option={[{ value: 1, name: "yes" }, { value: 0, name: "No" }]}
                onChange={(value) => {
                    setClientLogin({ ...clientLogin, active: value })
                }}
            />

            <div className="w-full">
                <RenderPermissions
                    company_list={clientLogin.company_list ?? []}
                    onUpdate={(index, value) => {

                        const newArray = clientLogin.company_list?.map(company => {
                            if (company.id == index)
                                return value
                            else
                                return company
                        })
                        setClientLogin({ ...clientLogin, company_list: newArray })
                    }}
                />
            </div>

        </FullScreenModal>
    )
}