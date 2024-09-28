import ServiceButton from 'components/Button/ServiceButton';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Service: React.FC = () => {
  const history = useHistory();
  const goToService = () => {
    window.open('https://grand-holly-07b.notion.site/10fd242390ae80a784b0e91a570bd563');
  };

  const goToPrivacy = () => {
    window.open('https://grand-holly-07b.notion.site/f0cd07a9f32c42d9b365a03669648a41');
  };

  const goToDev = () => {
    history.push('/dev');
  };

  return (
    <div className="flex flex-col w-full h-[432px] items-center justify-center pb-[44px] bg-green-200">
      <img className="mb-[-45px]" src="/assets/Char/smile.svg" alt="cloud_smile" />
      <div className="flex flex-col gap-[16px]">
        <ServiceButton text="서비스 이용 약관" bgColor="bg-white" onClick={goToService} />
        <ServiceButton text="개인정보 처리 방침" bgColor="bg-white" onClick={goToPrivacy} />
        <ServiceButton text="서비스 만든 이" bgColor="bg-white" onClick={goToDev} />
        <ServiceButton text="로그아웃" bgColor="bg-red-300" />
      </div>
    </div>
  );
};

export default Service;
