import React, { useState, useEffect } from 'react';
import { XLargeButton } from 'components/Button/Button';
import NavBar from 'components/Bar/NavBar';
import Description from 'components/ToolTips/Description';
import EtcBox from 'components/box/EtcBox';
import { useQuery } from 'react-query';
import { BalancegameResponse } from 'types/BalancegameResponse';
import { getBalancegames } from 'hooks/useBalance';
import { Balancegame } from 'types/Balancegame.type';

const BalanceGame: React.FC = () => {
  const { data, error, isLoading } = useQuery<BalancegameResponse, Error>(
    'balance_game',
    getBalancegames,
  );
  if (error) {
    console.log(error.message);
  }

  const [balanceList, setBalanceList] = useState<Balancegame[]>([]);

  useEffect(() => {
    if (data) {
      setBalanceList(data.balance_game);
    }
  }, [data]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    if (balanceList) {
      setCurrentQuestion((prev) => (prev + 1) % balanceList?.length);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar subject="vs" />
      <div className="flex flex-col w-[375px] h-[860px] bg-background_color relative">
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <div className="h-[196px]">
            <EtcBox
              subject="balance"
              color="main"
              balance={balanceList[currentQuestion]?.questionA}
            />
          </div>
          <img src="/assets/red-vs.svg" alt="red-vs" className="h-[12.58px] w-[18.87px]" />
          <div className="h-[196px]">
            <EtcBox
              subject="balance"
              color="main"
              balance={balanceList[currentQuestion]?.questionB}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="absolute flex flex-col justify-center items-center w-[350px] bottom-[70px]">
            <Description text="어떤 걸 고를까요?" />
            <img className="mb-[-45px]" src="/assets/GoormCharacter.svg" alt="goorm-character" />
            <div className="w-[335px]">
              <XLargeButton text="다른 게임 할래요" onClick={handleNextQuestion} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceGame;
