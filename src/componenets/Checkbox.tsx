
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export function CustomCheckBox(props: {
    option: { name: string, value: any }[]
    onChange: (value: any) => void
    value?:any
    inlined?: boolean
}) {
    // const [localOption, setLocalOption] = useState<{ name: string, value: any }[]>([])
    // useEffect(() => {
    //     setLocalOption(props.option)
    // }, [])s
    const radio_value_name = uuidv4();
    const parentClassname = props.inlined ? "flex" : "items-center w-full text-sm font-medium text-gray-900 bg-white  sm:flex dark:bg-gray-700 dark:text-white  border md:border-0 border-gray-200 rounded-lg ";
    const childClassname = props.inlined ? "flex items-center mr-4" : "flex items-center pl-3";
    const liClassname = props.inlined ? "" : "w-full border-b border-gray-200 md:border-0 ";
    return (
        <div>
            <ul className={parentClassname}>

                {props.option.map((e) => {
                    const uuid = uuidv4();

                    return (

                        <li className={liClassname}>
                            <div className={childClassname}>
                                <input id={uuid}
                                    type="checkbox"
                                    checked={e.value==props.value}
                                    value={e.value}
                                    onChange={(event) => {
                                        props.onChange(event.target.value)
                                    }}
                                    name={radio_value_name}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor={uuid} className="w-full py-3 ml-2 text-sm font-medium text-gray-900 cursor-pointer dark:text-gray-300">{e.name} </label>
                            </div>
                        </li>
                    )

                }

                )}
            </ul>
        </div>
    )

}
export function CustomSingleCheckBox(props: {
    placeholder?: string,
    onChange: (value: any) => void
    value?:boolean
    inlined?: boolean
}) {
    // const [localOption, setLocalOption] = useState<{ name: string, value: any }[]>([])
    // useEffect(() => {
    //     setLocalOption(props.option)
    // }, [])
    const checkbox_id = uuidv4();
    const parentClassname = props.inlined ? "flex" : "items-center w-full text-sm font-medium text-gray-900 bg-white  sm:flex dark:bg-gray-700 dark:text-white  border md:border-0 border-gray-200 rounded-lg ";
    const childClassname = props.inlined ? "flex items-center mr-4" : "flex items-center pl-3";
    const liClassname = props.inlined ? "" : "w-full border-b border-gray-200 md:border-0 ";
    return (
        <div>
            <ul className={parentClassname}>

            <li className={liClassname}>
                            <div className={childClassname}>
                                <input id={checkbox_id}
                                    type="checkbox"
                                    checked={props.value?true:false}
                                    
                                    onChange={(event) => {
                                        props.onChange(event.target.checked)
                                    }}
                                    name={props.placeholder}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor={checkbox_id} className="w-full py-3 ml-2 text-sm font-medium text-gray-900 cursor-pointer dark:text-gray-300">{props.placeholder} </label>
                            </div>
                        </li>
            </ul>
        </div>
    )

}