import { AgentInterface } from "../type";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import { useState, useEffect } from "react";
import { SectorInterface } from "../../sector/type";
import { readSectorList } from "../../sector/repository";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { useUserAuth } from "../../../context/UserAuthContext";

const AgentTable = (props: {
  agentList: AgentInterface[];
  onClickEdit: any;
  onClickDelete: any;
  snoBase: number;
}) => {
    const {authPermissionList} = useUserAuth();
  const [sectorList, setSectorList] = useState<SectorInterface[]>();

  const fetchSectorList = async () => {
    const res = await readSectorList();
    setSectorList(res);
  };

  useEffect(() => {
    fetchSectorList();
  }, []);

  console.log(sectorList);
  console.log(props.agentList);
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> Name</TableHeadCell3>
            <TableHeadCell3> Document Registration</TableHeadCell3>
            <TableHeadCell3> Location</TableHeadCell3>
            <TableHeadCell3> Number</TableHeadCell3>
            <TableHeadCell3> Action </TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.agentList.map((ele, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3> {ele.name}</TableCell3>
              <TableCell3>
                {" "}
                {ele.isDocumentRegistration == 1 ? "Yes" : "No"}
              </TableCell3>
              <TableCell3>
                {" "}
                {sectorList?.map((e) => (e.id == ele.location ? e.name : ""))}
              </TableCell3>
              <TableCell3> {ele.number}</TableCell3>
              <TableCell3>
                {authPermissionList.url_has("update") ? (
                  <BlueButton
                    text={" EDIT"}
                    onClick={() => {
                      props.onClickEdit(ele);
                    }}
                  />
                ) : (
                  ""
                )}

                {authPermissionList.url_has("delete") ? (
                  <RedButton
                    text={"DELETE"}
                    onClick={() => {
                      props.onClickDelete(ele);
                    }}
                  />
                ) : (
                  ""
                )}
              </TableCell3>
            </TableRow3>
          ))}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default AgentTable;
