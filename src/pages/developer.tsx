import NavBar from 'components/Bar/NavBar';
import React from 'react';
import { XLargeButton } from 'components/Button/Button';

const Developer: React.FC = () => {
  const link = "https://litt.ly/floating";

  return (
    <div className="flex flex-col items-center justify-start h-full">
      <NavBar subject="Credit" nonIcon />
      <h1 className="text-[16px] mt-[40px] text-gray-800">카카오 X 구름톤 유니브 연합해커톤</h1>
      <div className="flex items-center mt-[24px]">
        <img className="mr-[16px]" src="/assets/goorm.svg" alt="Goorm Logo" width="60" height="60" />
        <h2 className="text-[48px] text-[#9D1DFF]">7팀</h2>
      </div>
      <div className="mt-6 text-center text-[20px] space-y-2">
        <p>Product Manager: 전소연</p>
        <p>Product Designer: 송연우</p>
        <p>Front-End Dev.: 이지희</p>
        <p>Front-End Dev.: 박상민</p>
        <p>Front-End Dev.: 박병목</p>
        <p>Back-End Dev.: 강기환</p>
        <p>Back-End Dev.: 이건희</p>
        <p>Back-End Dev.: 이정은</p>
      </div>
      <div className="absolute bottom-10 flex flex-col items-center">
        <img className="mb-[-45px]" src="/assets/Char/smile.svg" alt="smile" />
        <XLargeButton
          text="개발자와 커피챗하기"
          textColor="text-black"
          img='github'
          onClick={() => window.open(link, '_blank')}        />
      </div>
    </div>
  );
};

export default Developer;
