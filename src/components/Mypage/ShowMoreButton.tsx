import React from 'react';

const ShowMoreButton: React.FC<{ category: string; onClick: () => void }> = ({
  category,
  onClick,
}) => {
  return (
    <div className="flex flex-row w-[335px] my-[20px] justify-between items-center">
      <p className="text-[24px]">{category}</p>
      <button type="button" onClick={onClick}>
        <img className="w-[32px] h-[32px]" src="/assets/right_arrow.svg" alt="right_arrow" />
      </button>
    </div>
  );
};

export default ShowMoreButton;
