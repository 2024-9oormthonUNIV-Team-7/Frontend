import React, { useEffect } from 'react';
import EtcBox from 'components/box/EtcBox';
import { XLargeButton } from 'components/Button/Button';
import onBoarding from 'data/onBoarding';
import { useHistory } from 'react-router-dom';

const Landing: React.FC = () => {
  const history = useHistory();

  // 백엔드로 구글 인증 요청
  const handleGoogleLogin = () => {
    const backendGoogleAuthUrl = 'https://floating.site/oauth2/authorization/google';
    // 백엔드의 구글 OAuth 로그인 엔드포인트로 리다이렉트
    window.location.href = backendGoogleAuthUrl;
  };

  // /plans로 백엔드에서 리다이렉트된 후 액세스 토큰이 있는지 확인
  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      // 이미 로그인된 상태이면 /plans로 자동으로 리다이렉트
      history.push('/plans');
    } else {
      // 로그인되지 않은 경우 첫 페이지로 리다이렉트
      history.push('/')
    }
  }, [history]);

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
        <XLargeButton text="구글로 시작하기" bgColor="bg-white" onClick={handleGoogleLogin} img />
      </div>
    </div>
  );
};

export default Landing;
