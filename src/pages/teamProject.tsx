import SquareBox from 'components/box/SquareBox';
import NavBar from 'components/Bar/NavBar';
import Description from 'components/ToolTips/Description';
import React, { useState } from 'react';
import Tab from 'components/Tab/Tab';
import categoryData from 'data/categoryData'; // categoryData 임포트
import EtcBox from 'components/box/EtcBox';

const TeamProject: React.FC = () => {
  const [square, setSquare] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // 클릭한 인덱스 상태

  const handleSquareBoxClick = (index: number) => {
    setActiveIndex(index); // 클릭한 인덱스 저장
    setSquare(false); // square 상태를 false로 변경
  };

  const handleTabButtonClick = (index: number) => {
    setActiveIndex(index); // Tab 버튼 클릭 시 인덱스 저장
  };

  // 선택된 버튼 텍스트에 해당하는 카테고리 데이터 가져오기
  const selectedCategory =
    activeIndex !== null
      ? ['처음 만났어요', '시간 조율', '스몰토크', '제안 해요'][activeIndex]
      : null;
  const questions = selectedCategory ? categoryData[selectedCategory] : [];

  return (
    <div className="flex flex-col relative h-full items-center">
      <NavBar subject="team" />
      {/* 구름 아이콘 카테고리 */}
      {square ? (
        <>
          <div className="mt-[27px] mx-auto">
            <Description text={`원하는 카테고리를 알려주세요`} />
            <img
              src="/assets/GoormCharacter.svg"
              alt="cloud-character"
              className="mx-auto w-[192px] h-[192px] mb-[-45px] mt-[-12px]"
            />
          </div>
          <div className="absolute bottom-[59px] left-0 right-0 mx-auto grid grid-cols-2 gap-[9px] justify-center items-center w-full max-w-[336px]">
            {['처음\n만났어요', '시간\n조율', '스몰\n토크', '제안\n해요'].map((content, index) => (
              <SquareBox
                key={index}
                color="main"
                content={content}
                question={false}
                onClick={() => handleSquareBoxClick(index)} // 클릭 핸들러 추가
              />
            ))}
            <SquareBox
              key={4}
              color="white"
              question={true}
              onClick={() => handleSquareBoxClick(4)}
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col h-full overflow-y-auto">
          <Tab
            activeIndex={activeIndex}
            buttonTexts={['처음\n만났어요', '시간\n조율', '스몰\n토크', '제안\n해요', '?']}
            onButtonClick={handleTabButtonClick} // Tab 버튼 클릭 핸들러 전달
          />

          <div className="flex flex-col items-center mt-[16px] gap-[16px]">
            {/* 여백 추가 */}
            {activeIndex !== 3 && questions.length > 0 ? (
              questions.map((item, index) => (
                <EtcBox
                  key={index}
                  subject="questionList"
                  color="white"
                  question={item.question}
                  content={item.content}
                />
              ))
            ) : (
              <p>질문이 없습니다.</p> // 질문이 없을 때 메시지
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamProject;
