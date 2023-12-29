import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { MouseEvent, useEffect, useMemo, useState } from "react";
import { convertDateFormat, getNanoID } from "../utils/function";

export const selectOptionConveter = (props: {
    options: any[],
    options_struct: { name: string, value: string }
}) => {
    // console.log(props.options,"mm")
    const newArray: { name: string, value: string }[] = []
    props.options.map((e: any) => {
        newArray.push({
            name: e[props.options_struct.name],
            value: e[props.options_struct.value]
        })
    })
    // console.log(newArray)
    return newArray
}

export function CustomSelectWithSearch(props: {
    style?: {
        height?: string;
        width?: string;
    }
    label?: string,
    required?: boolean,
    value?: any,
    default?: any,
    options: { name: string, value: string }[]
    onChange: (value: any) => void
}) {

    const [search, setSearch] = useState("");
    const [optionList, setOptionList] = useState<{ name: string, value: string }[]>([]);
    const [open, setOpen] = useState(false);

    const [id] = useState(getNanoID());

    useEffect(() => {
        function handleOutsideClick(e: any) {
            if (
                !e.target.closest(`#Toggle-${id}`) &&
                !e.target.closest(`#Select-${id}`)
            )
                setOpen(false);
        }

        document.addEventListener("mousedown", handleOutsideClick);

        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);


    useEffect(() => {
        setOptionList(props.options)
    }, [props.options])

    const filterData = (query: string, data: { name: string, value: string }[]) => {
        if (!query) {
            return data;
        } else {
            // console.log(data);
            return data.filter((d) =>
                d.name.toLowerCase().includes(query.toLowerCase())
            );
        }
    };


    return (
        <div
            id={`Select-${id}`}
            className="relative flex flex-col items-center justify-center"
        >
            <div className="flex w-full items-center justify-between divide-x divide-neutral-200 gap-1 border border-neutral-400 bg-white text-black rounded-md overflow-hidden">
                <input
                    className="outline-none px-2"
                    placeholder="Search..."
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                        const dataFiltered = filterData(e.target.value, props.options);
                        setOptionList(dataFiltered)
                    }}
                    onFocus={() => setOpen(true)}
                />
                <span
                    className="relative p-4 cursor-pointer"
                    onClick={() => setOpen((p) => !p)}
                    id={`Toggle-${id}`}
                >
                    <span
                        className={classNames(
                            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[6px] border-l-transparent border-r-transparent border-b-0 border-t-neutral-900 transition-[transform]",
                            open ? "rotate-180" : "rotate-0"
                        )}
                    ></span>
                </span>
            </div>
            <div
                id="options"
                className={classNames(
                    "absolute top-10 border-neutral-400 w-full rounded-md overflow-auto transition-all text-black",
                    open ? "max-h-40 border" : "max-h-0 border-0"
                )}
            >
                {optionList.map((ele, index) => {
                    return <div
                        key={index}
                        className="px-3 py-1 cursor-pointer bg-white text-neutral-600 hover:bg-neutral-300"
                        onClick={() => {
                            console.log(ele);   // Only Dev
                            props.onChange(ele.value);
                            setOpen(false);
                        }}
                    >
                        {ele.name}
                    </div>
                })}
            </div>
        </div>
    );
}

export const classNames = (...classes: any[]) => classes.filter(Boolean).join(" ");
export function CustomSelectComponent(props: {
    style?: {
        height?: string;
        width?: string;
    }
    label?: string,
    required?: boolean,
    value?: any,
    default?: any,
    options: { name: string, value: string }[]
    onChange: (value: any) => void
}) {
    const [value, setValue] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        props.onChange(event.target.value)
    };

    // console.log(props.value)
    return (
        <div style={props.style}>
            <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">{props.label} {props.required ? "*" : ""}</InputLabel>
                <Select
                    required={props.required ? true : false}
                    sx={{ width: "100%" }}
                    label={props.label}
                    value={props.value}
                    onChange={handleChange}
                >
                    {/* <MenuItem value={props.default ?? ""}>None</MenuItem> */}
                    {props.options.map((option) => (
                        <MenuItem value={option.value}>{option.name}</MenuItem>

                    ))}

                </Select>
            </FormControl>
        </div>
    );
}
export function CustomSelectComponentUnlabeled(props: {
    style?: {
        height?: string;
        width?: string;
    }
    label?: string;
    required?: boolean,
    value?: any,
    options: { name: string, value: any }[]
    onChange: (value: any) => void
}) {

    return (
        <div style={props.style}>
            <select
                onChange={(event) => {
                    props.onChange(event.target.value)
                }}
                id="countries" className="bg-white border max-w-[300px] min-w-[130px] border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                <option value="" >select</option>
                {props.options.map((element) => (
                    <option value={element.value} selected={element.value == props.value} >{element.name}</option>
                ))}

            </select>
        </div>
    );
}

export const selectOptionConveterv2 = (props: {
    options: any[],
    options_struct: any
}) => {
    const newArray: { name: string, value: string }[] = [];
    props.options.forEach((e: any) => {
        const { amount, available_amount, created_at, id } = e;
        const optionName = `${amount.toString()}- ${convertDateFormat(created_at.toString())} - ${available_amount.toString()}`;
        newArray.push({ name: optionName, value: id.toString() });
    });
    return newArray;
};



export function CustomSelectComponentUnlabeledv2(props: {
    required?: boolean,
    value?: any,
    options: { name: string, value: any }[]
    onChange: (value: any) => void
}) {
    return (
        <select
            onChange={(event) => {
                props.onChange(event.target.value)
            }}
            id="countries" className="bg-white border max-w-[300px] min-w-[130px] border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            <option> --select-- </option>

            {props.options.map((element) => (
                <option key={element.value} value={element.value} selected={element.value == props.value}>{element.name}</option>
            ))}

        </select>
    );
}


export const selectOptionConveterv3 = (props: {
    options: any[],
    options_struct: { name1: string, name2: string, value: string }
}) => {
    // console.log(props.options,"mm")
    const newArray: { name: string, value: string, }[] = []
    props.options.map((e: any) => {
        newArray.push({
            name: `${e[props.options_struct.name1]} - ${e[props.options_struct.name2]}`,
            value: e[props.options_struct.value]
        })
    })
    // console.log(newArray)
    return newArray
}
