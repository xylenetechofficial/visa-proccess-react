import React, { ReactNode } from 'react';

interface HeadingProps {
  text?: string;
  color?: string;
  align?: string

}
// Heading 1
export const Heading1: React.FC<HeadingProps> = ({ text = "", color }) => {
  const textColor = color ? color : '';
  const className = ` text-5xl font-extrabold dark:text-white ${textColor}`;

  return <h1 className={className}>{text}</h1>;
};
// Heading 2
export const Heading2: React.FC<HeadingProps> = ({ text = "", color }) => {
  const textColor = color ? color : '';
  const className = ` text-4xl font-bold dark:text-white ${textColor}`;

  return <h1 className={className}>{text}</h1>;
};
// Heading 3
export const Heading3: React.FC<HeadingProps> = ({ text = "", color }) => {
  const textColor = color ? color : '';
  const className = ` text-3xl font-bold dark:text-white ${textColor}`;

  return <h1 className={className}>{text}</h1>;
};
// Heading 4
export const Heading4: React.FC<HeadingProps> = ({ text = "", color }) => {
  const textColor = color ? color : '';
  const className = ` text-2xl font-bold dark:text-white ${textColor}`;

  return <h1 className={className}>{text}</h1>;
};
// Heading 5
export const Heading5: React.FC<HeadingProps> = ({ text = "", color }) => {
  const textColor = color ? color : '';
  const className = ` text-xl font-bold dark:text-white ${textColor}`;

  return <h1 className={className}>{text}</h1>;
};
// Heading 6
export const Heading6: React.FC<HeadingProps> = ({ text = "", color ,align}) => {
  const textColor = color ? color : '';
  const alignStyle = align ? "text-center" : "";
  const className = ` text-lg font-bold dark:text-white ${textColor} ${alignStyle}`;

  return <h1 className={className}>{text}</h1>;
};


export const SubHeading1: React.FC<HeadingProps> = ({ text = "", color }) => {
  // const textColor = color ? color : '';
  // const className = ` text-lg font-bold dark:text-white ${textColor}`;

  return <div className="uppercase col-span-2 text-[11px] font-bold text-[#374151] mr-3   flex justify-end items-center">
    {text}
  </div>;
}



export const SubHeading2: React.FC<HeadingProps> = ({ text = "", color }) => {
  // const textColor = color ? color : '';
  // const className = ` text-lg font-bold dark:text-white ${textColor}`;

  return <div className="uppercase text-[11px] font-bold text-[#374151] text-center flex justify-center items-center flex-none">
    {text}
  </div>;
};

export const SubHeadingSpan: React.FC<HeadingProps> = ({ text = "", color }) => {
  // const textColor = color ? color : '';
  // const className = ` text-lg font-bold dark:text-white ${textColor}`;

  return <span className="uppercase text-[11px] font-bold text-[#374151] text-center">
    {text}
  </span>;
};




export const BodyText1 = (props: { children: ReactNode }) => {
  // const textColor = color ? color : '';
  // const className = ` text-[11px] dark:text-white ${textColor}`;

  return <div className=" text-sm">
   {props.children}
  </div>;
};

export const UpdateContentBox = (props: { children: ReactNode }) => {

  return (
    <div className="w-full grid grid-cols-5">
      {props.children}
    </div>
  )
}


export const CardDiv  = (props: { children: ReactNode }) => {
  // const textColor = color ? color : '';
  // const className = ` text-lg font-bold dark:text-white ${textColor}`;

  return <div className="grid grid-cols-2 text-justify shadow shadow-slate-500 w-80 p-3">
  {props.children}
  </div>;
};
