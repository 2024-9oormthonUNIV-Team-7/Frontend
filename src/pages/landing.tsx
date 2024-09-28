import React from 'react';
import EtcBox from 'components/box/EtcBox';
import { LargeButton, XLargeButton } from 'components/Button/Button';
import onBoarding from 'data/onBoarding';
import { useHistory } from 'react-router-dom';

const Landing: React.FC = () => {
  const history = useHistory();
  const handlePlanPage = () => {
    history.push('/plans');
  };
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="absolute flex flex-col justify-center items-center min-h-[639px] gap-[30px] bottom-[44px]">
        <div className="flex flex-col justify-center items-center">
          <img className="mb-[-70px]" src="/assets/logo.svg" alt="logo" />
          <img
            className="w-[360px] h-[360px] mb-[-85px]"
            src="/assets/Char/smile.svg"
            alt="smile"
          />
          <EtcBox subject="onBoarding" color="white" onBoarding={onBoarding} />
        </div>
        <p className="text-center text-[13px] text-txt_secondary">
          카카오 X 구름톤 유니브 연합 해커톤 7팀
        </p>
        <XLargeButton text="구글로 시작하기" bgColor="bg-white" onClick={handlePlanPage} img='google' />
      </div>
    </div>
  );
};

export default Landing;
