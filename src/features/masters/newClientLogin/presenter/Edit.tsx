import { useEffect, useState } from "react";
import { updateClientLogin, readClientLogin } from "../repository";
import { ClientLogin } from "../type";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";
import { RenderPermissions } from "./RenderCompanys";



export default function Main(props: {
    onClose: any,
    clientLogin: ClientLogin
}) {
    const initValue: ClientLogin = {
        id: 0,
        name: '',
        user_name: '',
        password: '',
        active: 0,
        company_list: []
    }

    // const [companyList, setCompanyList] = useState<CompanyInterface[]>([])
    // const fetchCompanyList = async () => {
    //     const res: any = await readCompanyList(false)
    //     setCompanyList(res);
    // }

    // useEffect(() => {
    //     fetchCompanyList();
    // }, []);

    const [clientLogin, setClientLogin] = useState(initValue)
    const fetchClientLogin = async (id: any) => {
        const res: any = await readClientLogin(id ?? 0)
        setClientLogin(res);
    }

    async function onClickSave() {
        const data = await updateClientLogin(clientLogin)

        if (!data) return
        props.onClose()
    }

    useEffect(() => {
        fetchClientLogin(props.clientLogin.id);
    }, [props.clientLogin.id]);

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