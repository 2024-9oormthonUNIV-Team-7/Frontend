import SquareBox from 'components/box/SquareBox';
import NavBar from 'components/Bar/NavBar';
import Description from 'components/ToolTips/Description';
import React from 'react';
import Tab from 'components/Tab/Tab';

const TeamProject: React.FC = () => {
  return (
    <div className="flex flex-col relative h-full">
      <NavBar subject="team" />
      <Tab buttonTexts={["처음 만났어요", "시간 조율", "스몰 토크", "제안해요"]}/>
      {/* 구름 아이콘 카테고리 */}
      <div className="mt-[27px] mx-auto">
        <Description text={`원하는 카테고리를 알려주세요`} />
        <img
          src="/assets/GoormCharacter.svg"
          alt="cloud-character"
          className="mx-auto w-[192px] h-[192px] mb-[-45px] mt-[-12px]"
        />
      </div>
      {/* 카테고리 선택 */}
      <div className="absolute bottom-[59px] left-0 right-0 mx-auto grid grid-cols-2 gap-[9px] justify-center items-center w-full max-w-[336px]">
        <SquareBox color="main" content={`처음\n만났어요`} question={false} />
        <SquareBox color="main" content="시간 조율" question={false} />
        <SquareBox color="main" content="스몰 토크" question={false} />
        <SquareBox color="main" content="제안 해요" question={false} />
        <SquareBox color="white" content="" question={true} />
      </div>
    </div>
  );
};

export default TeamProject;

