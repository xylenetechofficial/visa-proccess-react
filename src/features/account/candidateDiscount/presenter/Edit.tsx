import { readDiscountList, updateDiscountList } from "../repository";
import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { DiscountInterface, VisaProfesionInterface } from "../type";
import DiscountTable from './Table';
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
import { Checkbox } from "flowbite-react";
import { UnlabeledInput, TextAreaInput } from "../../../../componenets/Input";
import { convertDateFormat, getNanoID } from "../../../../utils/function";
import { CustomCheckBox, CustomSingleCheckBox } from "../../../../componenets/Checkbox";
import { DiscountTypeList } from "../../../db";
import Pagination from "../../../../componenets/Pagination";

export default function Main(props: {
    onClose: () => void,
    // fetchDiscountList: () => void,

}) {
    const [DiscountList, setDiscountList] = useState<DiscountInterface[]>([]);
    const [additionalData, setAdditionalData] = useState<AdditionalDataInterface>(
        {
            pagination: {
                page: 1,
                page_count: 1,
                item_count: 0,
                sno_base: 0,
            },
        }
    );
    const fetchDiscountList = async (page?: number) => {
        const data: any = await readDiscountList({
            page: page ?? additionalData.pagination.page,
            status: "no"
        });
        if (data) {
            setDiscountList(data);
        }
        setAdditionalData(await PaginationManager.getData());

    };

    useEffect(() => {
        fetchDiscountList(additionalData.pagination.page);
    }, []);


    function onUpdateRow(index: number, rowData: DiscountInterface) {
        const nextData = DiscountList.map((e, i) => {
            if (i === index) {
                // Increment the clicked counter
                return rowData;
            } else {
                // The rest haven't changed
                return e;
            }
        });
        setDiscountList(nextData)
    }

    const Heading = [
        { name: " Sr No.", for: [] },
        { name: " CONDIDATE NAME", for: [] },
        { name: " PASSPORT NO.", for: [] },
        { name: "Status", for: [] },
        { name: "Approve By", for: [] },
        { name: " SELECT*", for: [] },
        { name: " DISCOUNT", for: [] },
        { name: " DISCOUNT TYPE", for: [] },
        { name: "DISCOUNT REMARK", for: [] },
    ]

    const onClickSubmit = async () => {
        const newArray = []

        for (let i = 0; i < DiscountList.length; i++) {
            if (DiscountList[i].checked) newArray.push(DiscountList[i])
        }
        const update = await updateDiscountList(newArray)
        if (update) {
            props.onClose();
            fetchDiscountList()
        }
    }

    return (

        <FullScreenModal
            buttonName="Update"
            handleClick={onClickSubmit}
            title="Update Candidate Discount"
            onClose={props.onClose}
        >

            {/* <div className=" grid grid-cols-1 py-3  gap-2 shadow"> */}

                {/* <div className="overflow-auto"> */}
                    <Table3>
                        <TableHead3>
                            <TableHeadRow3>
                                {Heading.map((e, i) => <TableHeadCell3 key={getNanoID()}>{e.name}</TableHeadCell3>)}
                            </TableHeadRow3>
                        </TableHead3>
                        <TableBody3>
                            {DiscountList.map((item, index) =>

                            (
                                <TableRow3 key={index}>
                                    <TableCell3>{index + additionalData.pagination.sno_base + 1}</TableCell3>
                                    <TableCell3> {item.candidate_name} </TableCell3>
                                    <TableCell3> {item.candidate_passport_no}</TableCell3>
                                    <TableCell3> {item.status ? "Yes" : "No"}</TableCell3>
                                    <TableCell3> {item.approved_by} </TableCell3>
                                    <TableCell3>

                                    <CustomSingleCheckBox
                    onChange={(value) => {
                      onUpdateRow(index, { ...item, checked: value })
                    }}
                    value={item.checked ? true : false}
                  />

                                    </TableCell3>
                                    <TableCell3>
                                        <UnlabeledInput value={item?.discount}
                                            type='number'
                                            onchange={(value) => {
                                                onUpdateRow(index, { ...item, discount: parseInt(value) })
                                            }}
                                        />
                                    </TableCell3>
                                    <TableCell3>
                                        <CustomCheckBox
                                            inlined
                                            value={item.discount_type}
                                            onChange={(val) => {
                                                onUpdateRow(index, { ...item, discount_type: val })
                                            }}
                                            option={DiscountTypeList}
                                        />
                                    </TableCell3>
                                    <TableCell3>
                                        <TextAreaInput
                                            label="remark"
                                            id={getNanoID()}
                                            value={item.discount_remarks}
                                            onChange={(value) => {
                                                onUpdateRow(index, { ...item, discount_remarks: value })
                                            }} />
                                    </TableCell3>


                                </TableRow3>
                            )
                            )}
                        </TableBody3>
                    </Table3>



                {/* </div> */}

            {/* </div> */}

            <Pagination
                data={additionalData}
                onPageChange={(e) => {
                    console.log(e); // Only Dev
                    fetchDiscountList(e);
                }}
            />
        </FullScreenModal>
    )
}