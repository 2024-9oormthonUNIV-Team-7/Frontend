import React, { useEffect, useState } from 'react';
import titleContentsData from 'data/titleContentsData';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import axios from 'axios';

const NavBar: React.FC<{
  subject: string;
  nonIcon?: boolean;
  heart?: boolean;
}> = ({ subject, nonIcon, heart }) => {
  const history = useHistory();

  const goBack = () => {
    history.go(-1);
  };

  return (
    <div className="flex py-[16px] justify-center items-center">
      <button type="button" className="absolute left-[20px]" onClick={goBack}>
        <img src="/assets/left_arrow.svg" alt="left_arrow" />
      </button>
      <div className="flex items-center justify-center gap-[4px] relative">
        {nonIcon ? (
          ''
        ) : (
          <img className="w-[20px] h-[20px]" src={`/assets/${subject}.svg`} alt={subject} />
        )}
        <p className="text-base text-center">
          {nonIcon ? `${subject}` : titleContentsData[subject].title}
        </p>
        {heart === true ? (
          <button type="button" className="absolute left-[100px]" onClick={goBack}>
            <img src="/assets/white_heart.svg" alt="left_arrow" className="h-[]" />
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default NavBar;
