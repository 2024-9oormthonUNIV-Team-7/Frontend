import React, { useEffect, useState } from 'react';
import NavBar from 'components/Bar/NavBar';
import ShowGame from './Game/ShowGame';
import ExplainCloud from 'components/Cloud/ExplainCloud';
import ButtonCloud from 'components/Cloud/ButtonCloud';
import RandomCloud from 'components/Cloud/RandomCloud';
import GameModal from 'components/Modal/GameModal';
import { useQuery } from 'react-query';
import { MinigameResponse } from 'types/MinigameResponse.type';
import { getMinigames } from 'hooks/useGame';
import { Minigame } from 'types/Minigame.type';

const MiniGame: React.FC = () => {
  const { data, error, isLoading } = useQuery<MinigameResponse, Error>('minigames', getMinigames, {
    refetchOnWindowFocus: false, // 창 포커스 시 재조회 방지
  });

  const [gameList, setGameList] = useState<Minigame[]>([]);
  const [gameType, setGameType] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  // 처음 랜더링 시, undefined 나오는 것을 방지하기 위해
  useEffect(() => {
    if (data) {
      setGameList(data.minigames);
      setGameType(data.minigames[0]?.name || '');
    }
  }, [data]);

  if (error) {
    return <div>Error: {error.message}</div>; // UI에 에러 메시지 표시
  }

  const handleModalOpen = (action: () => void) => {
    setPendingAction(() => action);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleConfirmAction = () => {
    if (pendingAction) {
      pendingAction();
    }
    setIsModalOpen(false);
    setPendingAction(null);
  };

  const handleToggleRunning = () => {
    setIsRunning((prev) => !prev);
  };

  const handlePreviousGame = () => {
    const currentIndex = gameList.findIndex((game) => game.name === gameType);
    const newGameType =
      currentIndex > 0 ? gameList[currentIndex - 1].name : gameList[gameList.length - 1].name;
    setGameType(newGameType);
    setIsRunning(false);
  };

  const handleNextGame = () => {
    const currentIndex = gameList.findIndex((game) => game.name === gameType);
    const newGameType =
      currentIndex < gameList.length - 1 ? gameList[currentIndex + 1].name : gameList[0].name;
    setGameType(newGameType);
    setIsRunning(false);
  };

  const currentGameDescription = gameList.find((game) => game.name === gameType)?.description || '';
  const currentGameId = gameList.find((game) => game.name === gameType)?.id || 0; // 현재 게임의 ID 가져오기

  return (
    <div className="flex flex-col items-center">
      <NavBar subject="game" heart category="mini_game" itemId={currentGameId} />{' '}
      {/* 현재 게임 ID 전달 */}
      <ShowGame
        name={gameType}
        onButtonClick={isRunning ? () => handleModalOpen(handleNextGame) : handleNextGame}
        onPrevious={handlePreviousGame}
        onNext={handleNextGame}
      />
      {gameType === '훈민정음' || gameType === '반말 모드' ? (
        <ButtonCloud
          key={gameType}
          name={gameType}
          explanation={currentGameDescription}
          isRunning={isRunning}
          onToggleRunning={handleToggleRunning}
        />
      ) : gameType === '초성 퀴즈' ? (
        <RandomCloud />
      ) : (
        <ExplainCloud explanation={currentGameDescription} />
      )}
      <GameModal isOpen={isModalOpen} onClose={handleModalClose} onConfirm={handleConfirmAction} />
    </div>
  );
};

export default MiniGame;
