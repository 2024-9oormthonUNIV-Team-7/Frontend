import React from 'react';
import titleContentsData from 'data/titleContentsData';
import { useHistory } from 'react-router-dom';

const NavBar: React.FC<{ subject: string; nonIcon?: boolean; heart?: boolean }> = ({
  subject,
  nonIcon,
  heart,
}) => {
  const history = useHistory();

  const goBack = () => {
    history.go(-1);
  };

  return (
    <div className="flex py-[16px] justify-center items-center">
      <button type="button" className="absolute left-[20px]" onClick={goBack}>
        <img src="/assets/left_arrow.svg" alt="left_arrow" />
      </button>
      <div className="flex items-center justify-center gap-[4px]">
        {nonIcon ? (
          ''
        ) : (
          <img className="w-[20px] h-[20px]" src={`/assets/${subject}.svg`} alt={subject} />
        )}
        <p className="text-base text-center">
          {nonIcon ? `${subject}` : titleContentsData[subject].title}
        </p>
      </div>
      {heart ? (
        <button type="button" className="absolute right-[20px]" onClick={goBack}>
          <img src="/assets/heart.svg" alt="heart" />{' '}
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default NavBar;
