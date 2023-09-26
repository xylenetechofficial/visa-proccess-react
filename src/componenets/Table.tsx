import { ReactNode } from "react";

interface ParentComponentProps {
    children: ReactNode;
    width?: number;
}
interface ParentComponent2Props {
    children: ReactNode;
    width?: number;
    onClick: (value: any) => void,
}

export const Table = ({ children }: ParentComponentProps) => {
    return (
        
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            {children}
        </table>
    )
}
export const Table2 = ({ children }: ParentComponentProps) => {
    return (
        
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            {children}
        </table>
    )
}
export const Table3 = ({ children }: ParentComponentProps) => {
    return (
        
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            {children}
        </table>
    )
}
export const TableHead = ({ children }: ParentComponentProps) => {
    return (
        <thead className="text-xs text-gray-700 uppercase bg-[#F1F2F6] dark:bg-gray-700 dark:text-gray-400">
            {children}
        </thead>
    );
}
export const TableHead2 = ({ children }: ParentComponentProps) => {
    return (
        <thead className="text-xs text-gray-700 uppercase bg-[#F1F2F6] dark:bg-gray-700 dark:text-gray-400">
            {children}
        </thead>
    );
}
export const TableHead3 = ({ children }: ParentComponentProps) => {
    return (
        <thead className="text-xs text-gray-700 uppercase bg-[#F1F2F6] dark:bg-gray-700 dark:text-gray-400">
            {children}
        </thead>
    );
}
export const TableHeadRed = ({ children }: ParentComponentProps) => {
    return (
        <thead className="text-xs text-white uppercase bg-[#e61111] dark:bg-red-700 dark:text-gray-400">
            {children}
        </thead>
    );
}
export const TableHeadRow = ({ children }: ParentComponentProps) => {
    return (
        <tr>
            {children}
        </tr>
    )
}
export const TableHeadRow2 = ({ children }: ParentComponentProps) => {
    return (
        <tr>
            {children}
        </tr>
    )
}
export const TableHeadRow3 = ({ children }: ParentComponentProps) => {
    return (
        <tr>
            {children}
        </tr>
    )
}
export const TableHeadCell = ({ children }: ParentComponentProps) => {
    return (
        <th scope="col" className="px-6 py-2 last:text-end">
            {children}
        </th>
    )
}
export const TableHeadCell2 = ({ children }: ParentComponentProps) => {
    return (
        <th scope="col" className="px-3 py-1 last:text-end">
            {children}
        </th>
    )
}
export const TableHeadCell3 = ({ children}: ParentComponentProps) => {

    return (
        <th scope="col" className="px-3 py-1 last:text-end" >
            {children}
        </th>
    )
}

export const TableBody = ({ children }: ParentComponentProps) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
}
export const TableBody2 = ({ children }: ParentComponentProps) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
}
export const TableBody3 = ({ children }: ParentComponentProps) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
}
export function TableRow({ children }: ParentComponentProps) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {children}
            {/* <td className="px-6 py-4 last:text-end">
                Product name
            </td>
            <td className="px-6 py-4 last:text-end">
                Silver
            </td>
            <td className="px-6 py-4 last:text-end">
                Laptop
            </td>
            <td className="px-6 py-4 last:text-end">
                $2999
            </td> */}
        </tr>

    );
}
export function TableRow1({ children , onClick}: ParentComponent2Props) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" onClick={onClick}>
            {children}
            {/* <td className="px-6 py-4 last:text-end">
                Product name
            </td>
            <td className="px-6 py-4 last:text-end">
                Silver
            </td>
            <td className="px-6 py-4 last:text-end">
                Laptop
            </td>
            <td className="px-6 py-4 last:text-end">
                $2999
            </td> */}
        </tr>

    );
}
export function TableRow2({ children }: ParentComponentProps) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {children}
            {/* <td className="px-6 py-4 last:text-end">
                Product name
            </td>
            <td className="px-6 py-4 last:text-end">
                Silver
            </td>
            <td className="px-6 py-4 last:text-end">
                Laptop
            </td>
            <td className="px-6 py-4 last:text-end">
                $2999
            </td> */}
        </tr>

    );
}
export function TableRow3({ children }: ParentComponentProps) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {children}
            {/* <td className="px-6 py-4 last:text-end">
                Product name
            </td>
            <td className="px-6 py-4 last:text-end">
                Silver
            </td>
            <td className="px-6 py-4 last:text-end">
                Laptop
            </td>
            <td className="px-6 py-4 last:text-end">
                $2999
            </td> */}
        </tr>

    );
}

export function TableCell({ children }: ParentComponentProps) {
    return (
        <td className="px-6 py-2 last:text-end min-w-[200px] ">
            <div className="flex">

            {children}
            </div>
        </td>
    );
}
export function TableCell2({ children }: ParentComponentProps) {
    return (
        <td className="px-6 py-1 last:text-end min-w-[200px] ">
            {/* If any problem occurs uncomment below line */}
            <div className="flex ">

            {children}
            </div>
             {/* {children} */}
        </td>
    );
}
export function TableCell2lastColumn({ children }: ParentComponentProps) {
    return (
        <td className="px-6 py-1 last:text-end min-w-[200px] ">
            {/* If any problem occurs uncomment below line */}
            <div className="flex justify-end w-full">

            {children}
            </div>
             {/* {children} */}
        </td>
    );
}
export function TableCell3({ children,width }: ParentComponentProps) {
    const widthStyle = width? `${width}px` : "fit-content";

    return (
        <td className="px-3 py-1 last:text-end " style={{width:widthStyle}}>
            <div className="flex">

            {children}
            </div>
        </td>
    );
}


<section>

    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-[#F1F2F6] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 last:text-end">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3 last:text-end">
                        Color
                    </th>
                    <th scope="col" className="px-6 py-3 last:text-end">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-3 last:text-end">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4 last:text-end">
                        Silver
                    </td>
                    <td className="px-6 py-4 last:text-end">
                        Laptop
                    </td>
                    <td className="px-6 py-4 last:text-end">
                        $2999
                    </td>
                </tr>



            </tbody>
        </table>
    </div>

</section>