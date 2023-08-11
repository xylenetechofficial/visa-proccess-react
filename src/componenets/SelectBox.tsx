import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { convertDateFormat } from "../utils/function";

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



export function CustomSelectComponent(props: {
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
    );
}
export function CustomSelectComponentUnlabeled(props: {

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
            id="countries" className="bg-white border max-w-[300px] min-w-[130px] border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option  > --select-- </option>

            {props.options.map((element) => (
                <option value={element.value} selected={element.value == props.value} >{element.name}</option>
            ))}

        </select>
    );
}

export const selectOptionConveterv2 = (props: {
    options: any[],
    options_struct: any
}) => {
    const newArray: { name: string, value: string }[] = [];
    props.options.forEach((e: any) => {
        const { amount, used_amount, created_at, id } = e;
        const optionName = `${amount.toString()}- ${convertDateFormat(created_at.toString())} - ${used_amount.toString()}`;
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
