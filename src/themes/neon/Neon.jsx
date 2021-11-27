import React from 'react';
import { Char, Indicator, Control } from './Neon.style';

const Neon = ({
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
export default Neon;
