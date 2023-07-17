import React from "react";

import {
    TextField,
} from "@mui/material";

/**
 * DateInput Component
 *
 * A component for selecting a date.
 *
 * @param {object} props - The component props.
 * @param {string} props.id - The unique identifier for the input field.
 * @param {string} [props.label] - The label for the input field (optional).
 * @param {string} [props.value] - The initial value for the input field (optional).
 * @param {function} props.onChange - The callback function called when the date value changes.
 */
export const DateInput = (props: { id: string, label?: string, required?: boolean, value?: string, onChange: (ele: string) => void, inline?: boolean },) => {
    const [date, setDate] = React.useState("");
    React.useEffect(() => {
        // Set initial value if provided
        props.value && setDate(props.value);
    }, [])

    /**
   * Handles the change event of the input field.
   *
   * @param {object} event - The change event object.
   */
    function handleChange(event: any) {
        setDate(event.target.value)
        props.onChange(event.target.value)
    }
    const containerStyle = "w-full max-w-sm"
    const inlineContainerStyle = "flex  items-center w-full max-w-sm"



    // function someFunc() {
    //     const dateInput = document.getElementById("dateInput");
    //     if (dateInput) {
    //         dateInput.showPicker();
    //     }
    // }


    return (
        <div className={props.inline ? inlineContainerStyle : containerStyle}>
            {props.label && <label htmlFor={props.id} className="block mb-2 mr-6 text-sm font-medium text-gray-900 dark:text-white">{props.label} {props.required ? "*" : ""}</label>}
            <input id={props.id} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 ring-8  focus:border-blue-500 block   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required={props.required ? true : false}
                placeholder="Select date" value={props.value} onChange={handleChange} />
            {/* <input type="date" id="dateInput" onFocus={() => {
                const dateInput = document.getElementById("dateInput");
                if (dateInput) {
                    dateInput.showPicker();
                }
            }} /> */}

        </div>
    )
}


/**
 * TextAreaInput Component
 *
 * A component for entering multi-line text.
 *
 * @param {object} props - The component props.
 * @param {string} props.id - The unique identifier for the textarea.
 * @param {string} [props.label] - The label for the textarea (optional).
 * @param {string} [props.value] - The initial value for the textarea (optional).
 * @param {string} [props.placeHolder] - The placeholder text for the textarea (optional).
 * @param {function} props.onChange - The callback function called when the textarea value changes.
 */
export const TextAreaInput = (props: { id: string, label?: string, value?: string, placeHolder?: string, onChange: (ele: string) => void }) => {

    /**
  * Handles the change event of the textarea.
  *
  * @param {object} event - The change event object.
  */
    function handleChange(event: any) {

        props.onChange(event.target.value)
    }
    return (
        <div>

            {/* {props.label && <label htmlFor={props.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.label}</label>} */}
            {/* <textarea value={props.value} id={props.id} rows={4} className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.placeHolder} onChange={handleChange}></textarea> */}
            <textarea value={props.value} id={props.id} className="min-w-[130px] max-w-[300px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.placeHolder} onChange={handleChange}></textarea>
        </div>

    )
}

export const StandardInput = (props: { value: any, onChangeValue: any, label?: string, type?: string, required?: boolean }) => {

    return (
        <TextField
            className="focus:ring-0 focus:ring-offset-0"
            type={props.type}
            fullWidth
            size="small"
            sx={{ margin: "2% 0%", border: "none" }}
            required={props.required ? true : false}
            id="outlined-required"
            label={props.label}
            // defaultValue="Tes"s
            value={props.value}
            onChange={(e) => {
                props.onChangeValue(e.target.value);
            }}
        />
    )

}

export function UnlabeledInput(props: { placeholder?: string, type?: string, value: any, onchange: (ele: string) => void, disabled?: boolean }) {

    const [value, setState] = React.useState(props.value);
    function handleClick(event: any) {
        setState(event.target.value);
        props.onchange(event.target.value)
    }
    return (<input type={props.type} disabled={props.disabled}
        className="min-w-[130px] max-w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleClick} placeholder={props.placeholder} value={props.value} ></input>)
}



export const FileInput = (props: { label?: string, required?: boolean, handleFileChange: (ele: File) => void, url?: string, }) => {
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <h5 className="mb-1 min-w-[60px]">{props.label} {props.required ? "*" : ""}</h5>
            <input
                className="bg-gray-100 rounded-md"

                type="file"
                required={props.required ? true : false}
                onChange={(event) => {
                    const file = event.target.files![0];
                    props.handleFileChange(file)
                }} />
            {props.url ?
                <a href={props.url} target="_blank" rel="noopener noreferrer">View Uploaded File</a>
                : ""}

        </div>


    )
}
export const FileInputUnlabel = (props: { required?: boolean, handleFileChange: (ele: any) => void, url?: string, }) => {
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>

            <input
                type="file"
                required={props.required ? true : false}
                onChange={(event) => {
                    const file = event.target.files![0];
                    props.handleFileChange(file)
                }} />
            {props.url ?
                <a href={props.url} target="_blank" rel="noopener noreferrer">View Uploaded File</a>
                : ""}

        </div>


    )
}