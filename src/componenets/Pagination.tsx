import { ReactNode } from "react";

interface ParentComponentProps {
  children: ReactNode;
  width?: number;
}
interface ParentComponent2Props {
  children: ReactNode;
  width?: number;
  class:string
  onClick: (value: any) => void;
}

export const PaginationContainer = ({ children }: ParentComponentProps) => {
  return (
    <nav aria-label="Page navigation example" className="flex py-2 pb-8">
      {/* <span className="p-2 h-10 mr-10 text-center leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> */}
        {children}
      {/* </span> */}
    </nav>
  );
};


export function PaginationBack({ children, onClick }: ParentComponent2Props) {
  return (
    <div>
        <span
        onClick={onClick}
        className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {children}
      </span>
    </div>
  );
}

export function PaginationNext({ children, onClick }: ParentComponent2Props) {
    return (
      <div>
        <span
          onClick={onClick}
          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {children}
        </span>
      </div>
    );
  }


  export function PaginationCurrent({ children, onClick}: ParentComponent2Props) {
    
    return (
        <div>
        <span
            onClick={onClick}
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
             {children}
          </span>
        </div>
    
    );
  }

// const Pagination = (props:{ onClick:any }) => {
//   return (

//     <nav aria-label="Page navigation example" className="flex py-2 pb-8">
//     <span className="p-2 h-10 mr-10 text-center leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//       <span> Total Records {10}</span>
//     </span>
//     <ul className="inline-flex -space-x-px text-base h-10 ">
//       <li>
//         <a
//           href="#"
//           onClick={onClick}
//           className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//         >
//           Previous
//         </a>
//       </li>

//       {numbers.map((current, i) => (
//         <li key={i}>
//           <a
//             href="#"
//             onClick={() => changeCurrent(current)}
//             className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
//               currentPage === current ? "bg-blue-900" : "bg-white"
//             }`}
//           >
//             {current}
//           </a>
//         </li>
//       ))}

//       <li>
//         <a
//           href="#"
//           onClick={onClick}
//           className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//         >
//           Next
//         </a>
//       </li>
//     </ul>
//   </nav>
//   )
// }

// export default Pagination
