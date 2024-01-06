import { FullScreenModal } from "../../../../componenets/Modal";

export default function Main(props: { onClose: () => void }) {
  return (
    <>
      <FullScreenModal
        title="View Report"
        onClose={props.onClose}
        // buttonName="Report"
        handleClick={""}
      >
        <h1>Report</h1>
      </FullScreenModal>
    </>
  );
}
