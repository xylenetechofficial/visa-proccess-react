import { UserInterface } from "../type";
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

const UserTable = (props: {
  userList: UserInterface[];
  onClickEdit: any;
  onClickDelete: any;
  snoBase: number;
}) => {
  const [sectorList, setSectorList] = useState<SectorInterface[]>();
  const { authPermissionList } = useUserAuth();

  const fetchSectorList = async () => {
    const res = await readSectorList();
    setSectorList(res);
  };

  useEffect(() => {
    fetchSectorList();
  }, []);

  console.log(sectorList);
  console.log(props.userList);
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> Login Name</TableHeadCell3>
            <TableHeadCell3> Email</TableHeadCell3>
            {/* <TableHeadCell3> Permission Group</TableHeadCell3> */}
            <TableHeadCell3> Role</TableHeadCell3>
            <TableHeadCell3> Action </TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.userList.map((ele, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3> {ele.user_name}</TableCell3>
              <TableCell3> {ele.email}</TableCell3>
              {/* <TableCell3 > {ele.permission_group_name}</TableCell3> */}
              <TableCell3> {ele.user_role_name}</TableCell3>
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

export default UserTable;
