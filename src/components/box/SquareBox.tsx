import React from 'react';
import bgColors from 'data/bgColors';

interface SquareBoxProps {
  color: keyof typeof bgColors;
  content?: string;
  question: boolean;
  onClick?: () => void;
}

const SquareBox: React.FC<SquareBoxProps> = ({ color, content, question, onClick }) => {
  const boxStyle: string = `flex ${bgColors[color]} justify-center items-center border border-2 border-txt_primary w-[168px] h-[168px] px-[32px] py-[20px] rounded-description shadow-description`;

  return (
    <div className={boxStyle} onClick={onClick}>
      {!question ? (
        <div className="text-[24px] text-center leading-8 whitespace-pre-wrap max-w-[123px] max-h-[123px] overflow-hidden break-words">
          {content}
        </div>
      ) : (
        <img src={`/assets/question.svg`} alt="question_mark" />
      )}
    </div>
  );
};

export default SquareBox;
