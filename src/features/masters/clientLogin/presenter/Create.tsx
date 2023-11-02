import { StandardInput } from "../../../../componenets/Input";
import { FullScreenModal } from "../../../../componenets/Modal";
import { RenderPermissions } from "./RenderCompanys";

export default function Main(props: { onClose: any }) {
  return (
    <FullScreenModal
      buttonName="submit"
      handleClick={"onClickSubmit"}
      title="Client Login Add"
      onClose={props.onClose}
    >
      <div className="w-96">
        <StandardInput
          label="Client Name"
          value={""}
          onChangeValue={(value: string) => {
            // setPermissionGroup({ ...permissionGroup, name: value })
          }}
        />

        <StandardInput
          label="Client Id"
          value={""}
          onChangeValue={(value: string) => {
            // setPermissionGroup({ ...permissionGroup, name: value })
          }}
        />

        <StandardInput
          label="Password"
          value={""}
          onChangeValue={(value: string) => {
            // setPermissionGroup({ ...permissionGroup, name: value })
          }}
        />
      </div>
      <div className="w-full">
         <RenderPermissions
                    // departments={permissionGroup.dpt_list ?? []}
                    // onUpdate={(value) => setPermissionGroup({ ...permissionGroup, dpt_list: value })}
                /> 
      </div>
    </FullScreenModal>
  );
}
