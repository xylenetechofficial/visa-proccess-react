import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { GreenButton, RedButton } from "../../../../componenets/CustomButton";
import { FullScreenModal } from "../../../../componenets/Modal";





export default function Main(props: { onClose: any, }){
    const onClickAdd = () =>{

    }
    return(
        <> <FullScreenModal
        buttonName=""
        handleClick={onClickAdd}
        title="Index Add"
        onClose={props.onClose}
      >
 <div className=" grid grid-cols-1 py-3  gap-2 shadow">
          <UpdateContentBox>
            <SubHeading1 text="Index Date :" />
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="company name :" />
           
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="Party Code:" />
           
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="job order:" />
           
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="country :" />
            {/* <SubHeading1 text={props.reIssue.s} /> */}
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="quantity:" />

          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="visa date (Arabic) :" />
            {/* name Input */}
           
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="visa number:" />
            {/* name Input */}
           
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="visa fee :" />
            {/* name Input */}
           
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="visa issue date :" />
            {/* name Input */}
           
          </UpdateContentBox>


          <UpdateContentBox>
            <SubHeading1 text="visa authorization :" />
            {/* name Input */}
           
          </UpdateContentBox>


          <UpdateContentBox>
            <SubHeading1 text="visa submission :" />
            {/* name Input */}
           
          </UpdateContentBox>


          <UpdateContentBox>
            <SubHeading1 text="arabic sponsor name :" />
            {/* name Input */}
           
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="sponsor id :" />
            {/* name Input */}
           
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="visa expiry date :" />
            {/* name Input */}
           
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="division :" />
            {/* name Input */}
           
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="visa accountable :" />
            {/* name Input */}
           
          </UpdateContentBox>         


        </div>

      </FullScreenModal>
        
        
        </>
    )
}