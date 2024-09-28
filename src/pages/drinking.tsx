import { LargeButton } from 'components/Button/Button';
import GameIcon from 'components/icon/game';
import NavBar from 'components/Bar/NavBar';
import Description from 'components/ToolTips/Description';
import React from 'react';

const Drinking: React.FC = () => {
  return (
    <div className="flex flex-col relative h-full">
      <NavBar subject="drink" heart={true} />
      <img
        src="/assets/white_heart.svg"
        alt="white-heart"
        className="absolute h-[24px] w-[24px] right-[20px] top-[16px]"
      />
      {/* 게임 종류 및 게임명 */}
      <div className="flex flex-col justify-start items-center mt-[162px]">
        <div className="mx-auto my-auto">
          <div className="justify-center items-center flex flex-row rplace-items-cente space-x-0.5 text-center">
            <GameIcon className="fill-gray-800 h-[20px] w-[20px]" />
            <p className="text-base text-gray-800">미니게임</p>
          </div>
          <p className="text-xlarge text-center mt-[16px]">훈민정음</p>
        </div>

        {/* description 및 다른게임/시작하기 */}
        <div className="absolute flex flex-col justify-center bottom-[44px] items-center">
          <Description
            text={`외국어, 외래어를 사용하지 않는\n게임이에요.\n시작 버튼을 누르면 제가 타이머를 셀께요!`}
          />
          <img
            src="/assets/GoormCharacter.svg"
            alt="cloud-character"
            className="mx-auto w-[192px] h-[192px] mb-[-45px]"
          />
          <div className="flex flex-row space-x-[11px] w-full px-4 ">
            <LargeButton
              text="다른게임"
              bgColor="bg-background_elevated"
              textColor="text-black"
              onClick={() => {}}
            />
            <LargeButton
              text="시작하기"
              bgColor="bg-main_primary"
              textColor="text-black"
              onClick={() => {}}
            />
          </div>
        </div>

        {/* 랜덤게임 모달 */}
        {/* <div className="absolute inset-0 h-screen flex items-center justify-center z-40 bg-txt_primary/65">
          <SquareBox color="white" content="" question={true} />
        </div> */}
      </div>
    </div>
  );
};

export default Drinking;
