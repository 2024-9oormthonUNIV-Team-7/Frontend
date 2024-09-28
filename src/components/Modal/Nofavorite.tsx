import React from 'react';

const Nofavorite: React.FC = () => {
  return (
    <div className="flex flex-col w-[234px] h-[142px] items-center justify-center">
      <img src="/assets/Char/sad.svg" alt="cloud_sad" />
      <p className="text-txt_secondary text-[16px]">아직 즐겨찾기 한 게임이 없어요</p>
    </div>
  );
};

export default Nofavorite;
