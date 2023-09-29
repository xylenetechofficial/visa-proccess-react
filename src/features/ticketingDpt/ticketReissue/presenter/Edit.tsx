import { useEffect, useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";




export default function Main(props: { onClose: any, reIssue:any}) {


const onClickSave = () =>{

}


 

    return (

        <ModalContent
            title="Ticket Reissue"
            onClose={props.onClose}
            buttonName="Submit"
         
            handleClick={onClickSave}
        >


            {/* name Input */}
            <StandardInput
                value={name}
                onChangeValue={(e: string) => {
                  
                }}
                label="abc"
            />


        </ModalContent>
    )
}