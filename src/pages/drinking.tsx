import { LargeButton } from 'components/Button/Button';
import NavBar from 'components/Bar/NavBar';
import Description from 'components/ToolTips/Description';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getBalancegames } from 'hooks/useBalance';
import { getSmalltalks } from 'hooks/useSmall';
import { getMinigames } from 'hooks/useGame';
import { BalancegameResponse } from 'types/BalancegameResponse';
import { SmalltalkResponse } from 'types/SmalltalkResponse';
import { MinigameResponse } from 'types/MinigameResponse.type';

interface GameItem {
  id: number;
  name: string;
  description: string;
}

const Drinking: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [randomGame, setRandomGame] = useState<GameItem | null>(null);

  const { data: balanceData } = useQuery<BalancegameResponse, Error>('games', getBalancegames);
  const { data: smallTalkData } = useQuery<SmalltalkResponse, Error>('subject', getSmalltalks);
  const { data: miniGameData } = useQuery<MinigameResponse, Error>('minigames', getMinigames);

  useEffect(() => {
    if (balanceData && smallTalkData && miniGameData) {
      const combinedList: GameItem[] = [
        ...balanceData.balance_games.map((game) => ({
          id: game.id,
          name: game.question_a, // 예시로 question_a 사용
          description: game.description || '게임 설명이 없습니다.',
        })),
        ...smallTalkData.talk_subjects.map((subject) => ({
          id: subject.id,
          name: subject.subject,
          description: subject.description || '주제 설명이 없습니다.',
        })),
        ...miniGameData.minigames.map((game) => ({
          id: game.id,
          name: game.name,
          description: game.description || '게임 설명이 없습니다.',
        })),
      ];

      // 랜덤 게임 선택
      const randomIndex = Math.floor(Math.random() * combinedList.length);
      setRandomGame(combinedList[randomIndex]);
    }
  }, [balanceData, smallTalkData, miniGameData]);

  const handleNextGame = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      // 다음 게임으로 넘어가는 로직 추가
    }, 1000);
  };

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
          <p className="text-xlarge text-center mt-[16px]">
            {randomGame ? randomGame.name : '로딩 중...'}
          </p>
        </div>
        {/* 설명 및 다른 게임/시작하기 */}
        <div className="absolute flex flex-col justify-center bottom-[44px] items-center">
          <Description text={randomGame ? randomGame.description : ''} />
          <img
            src="/assets/GoormCharacter.svg"
            alt="cloud-character"
            className="mx-auto w-[192px] h-[192px] mb-[-45px]"
          />
          <div className="flex flex-row space-x-[11px] w-full px-4 ">
            <LargeButton
              text="다른 게임"
              bgColor="bg-background_elevated"
              textColor="text-black"
              onClick={handleNextGame} // 다음 게임으로 버튼 클릭 시 모달 표시
            />
            <LargeButton
              text="시작하기"
              bgColor="bg-main_primary"
              textColor="text-black"
              onClick={() => {}} // 시작하기 버튼 클릭 시 타이머 시작 로직 추가
            />
          </div>
        </div>

        {/* 랜덤게임 모달 */}
        {showModal && (
          <div className="absolute inset-0 h-screen flex items-center justify-center z-40 bg-txt_primary/65">
            <SquareBox color="white" content="랜덤 게임으로 넘어갑니다!" question={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Drinking;
