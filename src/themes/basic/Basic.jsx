import React from 'react';
import {
  Char, Indicator, Control,
} from './Basic.style';

const Basic = ({
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

export default Basic;
