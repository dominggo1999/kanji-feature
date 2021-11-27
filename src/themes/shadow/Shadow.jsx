import React from 'react';
import { Char, Indicator, Control } from './Shadow.style';

const Shadow = ({
  currentChar, order, totalCurrentCharList, nextOrder, shuffleList,
}) => {
  return (
    <>
      <Char>
        {currentChar.kanji}
      </Char>
      <Indicator>{order}/{totalCurrentCharList}</Indicator>
      <Control>
        <button onClick={nextOrder}>Next</button>
        <button onClick={shuffleList}>random</button>
      </Control>
    </>
  );
};

export default Shadow;
