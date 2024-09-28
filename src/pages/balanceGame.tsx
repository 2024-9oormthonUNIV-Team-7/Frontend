import React, { useState, useEffect } from 'react';
import { LargeButton } from 'components/Button/Button';
import NavBar from 'components/Bar/NavBar';
import Description from 'components/ToolTips/Description';
import EtcBox from 'components/box/EtcBox';
import { useQuery } from 'react-query';
import { BalancegameResponse } from 'types/BalancegameResponse';
import { getBalancegames } from 'hooks/useBalance';
import { Balancegame } from 'types/Balancegame.type';

const BalanceGame: React.FC = () => {
  const { data, error, isLoading } = useQuery<BalancegameResponse, Error>('games', getBalancegames);
  if (error) {
    console.log(error.message);
  }

  const [balanceList, setBalanceList] = useState<Balancegame[]>([]);

  useEffect(() => {
    if (data) {
      setBalanceList(data.balance_games);
    }
  }, [data]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    if (balanceList) {
      setCurrentQuestion((prev) => (prev + 1) % balanceList?.length);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-[375px] h-[860px] p-4 bg-background_color relative">
        <div className="mt-[30px]">
          <NavBar subject="vs" />
          <div className="flex flex-col justify-center items-center ">
            <div className="h-[196px]">
              <EtcBox
                subject="balance"
                color="main"
                balance={balanceList[currentQuestion]?.question_a}
              />
            </div>
            <img
              src="/assets/vs.svg"
              alt="red-vs"
              className="h-[48px] w-[48px] fill-current text-red-300 mx-2"
            />
            <div className="h-[196px]">
              <EtcBox
                subject="balance"
                color="main"
                balance={balanceList[currentQuestion]?.question_b}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="absolute top-[500px] left-[90px]">
              <Description text="어떤 걸 고를까요?" />
              <img
                src="/assets/GoormCharacter.svg"
                alt="cloud-character"
                className="w-[192px] h-[192px]"
              />
            </div>
            <div className="absolute left-[20px] top-[700px] w-[335px]">
              <LargeButton text="다음" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceGame;
