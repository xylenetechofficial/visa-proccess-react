import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export function CustomRadioButton(props: {
    label?: string,
    required?: boolean,
    value?: any
    option: { name: string, value: any }[]
    onChange: (value: any) => void
    inlined?: boolean
}) {

    const [selectedValue, setSelectedValue] = useState<string | number>();
    const [localOption, setLocalOption] = useState<{ name: string, value: any }[]>([])

    useEffect(() => {
        setLocalOption(props.option)
        console.log("props.value: " + props.value)
        setSelectedValue(props.value)
    }, [])
    const radio_value_name = uuidv4();
    const parentClassname = props.inlined ? "flex items-center" : "flex flex-col items-center w-full text-sm font-medium text-gray-900 bg-white  sm:flex dark:bg-gray-700 dark:text-white  border md:border-0 border-gray-200 rounded-lg ";
    const childClassname = props.inlined ? "flex items-center mr-4" : "flex items-center pl-3";
    const liClassname = props.inlined ? "" : "w-full border-b border-gray-200 md:border-0 ";

    // console.log(props.value)
    return (
        <div>
            <ul className={parentClassname}>
                <li className="mr-6">{props.label} {props.required ? "*" : ""}</li>

                {localOption.map((e) => {
                    const uuid = uuidv4();
                    // console.log(e.value)
                    return (

                        <li className={liClassname}>
                            <div className={childClassname}>
                                <input id={uuid}
                                    checked={props.value == e.value}
                                    type="radio"
                                    value={e.value}
                                    required={props.required ? true : false}
                                    onChange={(event) => {
                                        setSelectedValue(event.target.value);
                                        console.log(typeof event.target.value);
                                        // console.log(  event.target.value);



                                        props.onChange(event.target.value)
                                        // props.value=event.target.value
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






