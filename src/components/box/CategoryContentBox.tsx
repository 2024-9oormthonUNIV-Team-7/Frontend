import React from 'react';

const CategoryContentBox: React.FC<{ index: number; category: string; content: string }> = ({
  category,
  content,
  index,
}) => {
  const boxStyle = `flex flex-col w-[335px] h-[79px] px-[20px] py-[16px] border border-2 border-txt_primary rounded-description shadow-description ${index === 0 ? 'bg-main_primary' : 'bg-white'}`;

  return (
    <div className={boxStyle}>
      <p className="text-[12px] text-txt_secondary">{category}</p>
      <p className="w-[295px] text-[16px] text-txt_primary overflow-hidden whitespace-nowrap text-ellipsis">
        {content}
      </p>
    </div>
  );
};

export default CategoryContentBox;
