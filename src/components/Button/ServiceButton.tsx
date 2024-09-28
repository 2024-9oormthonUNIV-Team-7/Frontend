import React from 'react';

const ServiceButton: React.FC<{
  text: string;
  bgColor: string;
  onClick?: () => void;
}> = ({ text, bgColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center px-[16px] py-[13px] h-[48px] w-[335px] min-w-[142px] border-txt_primary border-2 shadow-description rounded-[16px] ${
        bgColor ? bgColor : 'bg-main_primary'
      }`}
    >
      <span className={`text-[16px] leading-[140%] text-center`}>{text}</span>
    </button>
  );
};

export default ServiceButton;
