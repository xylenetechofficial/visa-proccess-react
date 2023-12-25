import { Icon } from '@mui/material';
import React, { ReactNode } from 'react';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  preIcon?: string;
  postIcon?: string;

}

// const Button = (props: { color: string, children: ReactNode }) => {
//   return (
//     <>
//       <button type="button" className={`text-white ${props.color} hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
//         {/* <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//           <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
//         </svg> */}
//         {props.children}
//       </button>
//     </>
//   )
// }

export const BlueButton: React.FC<ButtonProps> = ({ text, onClick, preIcon, postIcon }) => {




  return (

    // <Button color='blue'>
    //   {preIcon ? <Icon className='w-5 h-5 mr-2 -ml-1'>{preIcon}</Icon> : ""}

    //   {text}
    //   {postIcon ? <Icon className='w-5 h-5 ml-2 -mr-1'>{postIcon}</Icon> : ""}


    // </Button>
    <button type="button" className="text-white bg-[#2196F3] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[4px] text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onClick}>
      {/* <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg> */}
      {preIcon ? <Icon fontSize='small' className='mr-2 -ml-1'>{preIcon}</Icon> : ""}

      {text}
      {postIcon ? <Icon className='w-5 h-5 ml-2 -mr-1'>{postIcon}</Icon> : ""}
    </button>
  );
};


export const GreenButton: React.FC<ButtonProps> = ({ text = 'Button', onClick, preIcon, postIcon }) => {

  return (
    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-[5px] text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={onClick}>
      {/* <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg> */}
      {preIcon ? <Icon className='w-4 h-4 mr-2 -ml-1'>{preIcon}</Icon> : ""}

      {text}
      {postIcon ? <Icon className='w-4 h-4 ml-2 -mr-1'>{postIcon}</Icon> : ""}

    </button>
  );
};

export const RedButton: React.FC<ButtonProps> = ({ text, onClick, postIcon, preIcon }) => {

  return (
    <button type="button" className="text-white bg-[#FF5252] hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-[5px] text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={onClick}>
      {/* <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg> */}
      {preIcon ? <Icon fontSize='small' className={text ? 'mr-2 -ml-1' : ""}>{preIcon}</Icon> : ""}

      {text}
      {postIcon ? <Icon fontSize='small' className={text ? 'mr-1 -ml-2' : ""}>{postIcon}</Icon> : ""}
    </button>
  );
};

export const YellowButton: React.FC<ButtonProps> = ({ text = 'Button', onClick }) => {

  return (
    <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-[5px] text-sm px-5 py-2.5 text-center inline-flex items-center mr-2  dark:focus:ring-yellow-900" onClick={onClick}>
      {/* <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg> */}
      {text}
    </button>
  );
};



export const LinkButton: React.FC<ButtonProps> = ({text, onClick}) => {
  return(
    <button
    type="button"
    className="text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
    onClick={onClick}
  >
    {text}
  </button>
  )
  }