import { ReactNode } from "react";
import { Modal } from "@mui/material";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
interface ModalProps {
  onClose: () => void;
  title: string;
  // inputLabel: string;
  // id: string;
  buttonName?: string;
  handleClick: any;
  children: ReactNode;
}

const ModalContent: React.FC<ModalProps> = ({ onClose, title, handleClick, buttonName, children }) => {
  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}>
        <div className="w-full min-w-[400px] overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full focus:ring-4 focus:outline-none focus:ring-blue-300">
          <div className="relative w-full max-w-md max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={onClose}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
                <div className="space-y-7 max-h-[80vh] py-3 overflow-auto" >
                  {children}
                  <button
                    onClick={handleClick}
                    type="submit"
                    className="w-full text-white bg-[#AB47BC] hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {buttonName}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalContent;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const FullScreenModal: React.FC<ModalProps> = (
  { onClose,
    title,
    handleClick,
    buttonName,
    children }) => {

  return (


    <Dialog
      fullScreen
      open={true}
      TransitionComponent={Transition}
    >
      <div className="w-full min-w-[400px] overflow-x-hidden  md:inset-0 h-[calc(100%-1rem)] max-h-full focus:ring-4 focus:outline-none focus:ring-blue-300">
        <div className="relative w-full max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={onClose}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">{title}</h3>
              <hr className="h-px mt-4 mb-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div className=" space-y-7" >
                {children}
                {buttonName ?
                  <div className="flex mt-5">

                    <button
                      onClick={handleClick}
                      type="submit"
                      className="w-32 ml-auto mr-5 text-white bg-[#AB47BC] hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {buttonName}
                    </button>
                  </div>

                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>

    </Dialog>
  )
}