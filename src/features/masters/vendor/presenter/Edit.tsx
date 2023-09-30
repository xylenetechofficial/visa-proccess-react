import { useEffect, useState } from "react";
import { updateVendor } from "../repository";
import { VendorInterface } from "../type";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";

export default function Main(props: {
  vendor: VendorInterface;
  onClose: any;
  fetchVendorList: any;
}) {
  const [name, setName] = useState('')

  async function onClickSave() {
    // call update
    await updateVendor(props.vendor.id ?? 0, {name: name,});

    props.fetchVendorList();
    props.onClose();
  }

  useEffect(() => {
    setName(props.vendor.name);
  }, []);

  return (
    <ModalContent
      title="Update Vendor"
      onClose={props.onClose}
      buttonName="Update"
      handleClick={onClickSave}
    >
      {/* name Input */}
      <StandardInput
        value={name}
        onChangeValue={(e: string) => {
          setName(e);
        }}
        label="Vendor Name"
      />
    </ModalContent>
  );
}
