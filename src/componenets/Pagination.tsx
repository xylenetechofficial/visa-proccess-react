import { ReactNode, useEffect, useState } from "react";
import { AdditionalDataInterface } from "../utils/api_helper";

interface ParentComponentProps {
  children: ReactNode;
  width?: number;
}
interface ParentComponent2Props {
  children: ReactNode;
  width?: number;
  class: string
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

// export const PaginationContainerV2 = (props: { additionalData: AdditionalDataInterface }) => {
//   // Pagination start demo design
//   const [currentPage, setCurrentPage] = useState(1);
//   const recordPerPage = 5;
//   const lastIndex = currentPage * recordPerPage;
//   const firstIndex = lastIndex - recordPerPage;
//   const record = jobOrderList.slice(firstIndex, lastIndex);
//   const nPage = Math.ceil(jobOrderList.length / recordPerPage);
//   const numbers = [...Array(nPage + 1).keys()].slice(1);

//   return (
//     <nav aria-label="Page navigation example" className="flex py-2 pb-8">
//       {currentPage >= 2 ? (
//         <PaginationBack onClick={changePrevious}>Back</PaginationBack>
//       ) : null}
//       {numbers.map((current, i) => (
//         <PaginationCurrent onClick={() => changeCurrent(i)} key={i}>
//           {current}
//         </PaginationCurrent>
//       ))}
//       <PaginationNext onClick={changeNext}>Next</PaginationNext>

//     </nav>
//   );
// };

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


export function PaginationCurrent({ children, onClick }: ParentComponent2Props) {

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


const Pagination = (props: { data: AdditionalDataInterface, onPageChange: (cuurentPage: number) => void }) => {
  const firstButton = "flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
  const lastButton = "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
  const othersButton = "flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
  const currentButton = "flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white bg-red-700"

  const { page, page_count, item_count } = props.data.pagination ?? {
    page: 1,
    page_count: 1,
    item_count: 1,
  };
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(props.data.pagination.page)
  }, [props.data])

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= page_count) {
      props.onPageChange(newPage);
    }
  };

  function renderPageNumbers() {
    const pageNumbers = [];
    const maxVisiblePages = 3;

    for (let i = Math.max(1, currentPage - maxVisiblePages); i <= Math.min(page_count, currentPage + maxVisiblePages); i++) {
      let tempButton: any = "";
      if (currentPage == i) {
        tempButton = <button
          key={i}
          className={currentButton}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      }
      else {
        tempButton = <button
          key={i}
          className={othersButton}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      }
      pageNumbers.push(tempButton);
    }

    return pageNumbers;
  }

  return (
    <div className="pagination">
      <span>Total Items: {item_count}</span>
      {currentPage === 1 ? "" :
        <button onClick={() => handlePageChange(1)} className={firstButton}>
          First
        </button>}

      {/* <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button> */}
      {renderPageNumbers()}
      {/* <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === page_count}>
        Next
      </button> */}
      {currentPage === page_count ? "" :
        <button onClick={() => handlePageChange(page_count)} className={lastButton}>
          Last
        </button>}
    </div>
  );
};

export default Pagination;
