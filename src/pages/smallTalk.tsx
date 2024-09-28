import React, { useState, useEffect } from 'react';
import { XLargeButton } from 'components/Button/Button';
import NavBar from 'components/Bar/NavBar';
import Description from 'components/ToolTips/Description';
import { useQuery } from 'react-query';
import { SmalltalkResponse } from 'types/SmalltalkResponse';
import { getSmalltalks } from 'hooks/useSmall';
import { Smalltalk } from 'types/Smalltalk.type';

const SmallTalk: React.FC = () => {
  const { data, error, isLoading } = useQuery<SmalltalkResponse, Error>('subject', getSmalltalks);

  if (error) {
    console.log(error.message);
  }

  const [smallTalkList, setSmallTalkList] = useState<Smalltalk[]>([]);

  useEffect(() => {
    if (data) {
      setSmallTalkList(data.talk_subjects);
    }
  }, [data]);

  const [currentTopic, setCurrentTopic] = useState(0);

  const handleNextTopic = () => {
    if (smallTalkList) {
      setCurrentTopic((prev) => (prev + 1) % smallTalkList.length);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar subject="vs" />
      <div className="flex flex-col justify-center items-center relative">
        <div className="flex gap-2 justify-center items-center h-[450px] text-txt_secondary">
          <img src="/assets/cloud.svg" alt="cloud-emoji" className="h-6 w-6" />
          <div>스몰토크 주제</div>
        </div>
        <div className="absolute text-4xl top-64 w-[335px] break-words text-center leading-[70px]">
          {smallTalkList ? smallTalkList[currentTopic]?.subject : '주제가 없습니다.'}
        </div>
      </div>
      <div className="absolute flex flex-col justify-center items-center w-[352px] bottom-[44px]">
        <Description text={smallTalkList ? smallTalkList[currentTopic]?.description : ''} />
        <img className="mb-[-45px]" src="/assets/GoormCharacter.svg" alt="goorm-character" />
        <div className="w-[335px]">
          <XLargeButton text="다른 게임 할래요" onClick={handleNextTopic} />
        </div>
      </div>
    </div>
  );
};

export default SmallTalk;
