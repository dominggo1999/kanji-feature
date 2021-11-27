import React from 'react';
import { Char, Indicator, Control } from './Monserrat.style';

const Monserrat = ({
  currentChar, order, totalCurrentCharList, nextOrder, shuffleList,
}) => {
  return (
    <>
      <Char>
        <svg viewBox="0 0 960 300">
          <symbol id="s-text">
            <text
              textAnchor="middle"
              x="50%"
              y="80%"
            >{currentChar.kanji}
            </text>
          </symbol>

          <g className="g-ants">
            <use
              xlinkHref="#s-text"
              className="text-copy"
            >
            </use>
            <use
              xlinkHref="#s-text"
              className="text-copy"
            >
            </use>
            <use
              xlinkHref="#s-text"
              className="text-copy"
            >
            </use>
            <use
              xlinkHref="#s-text"
              className="text-copy"
            >
            </use>
            <use
              xlinkHref="#s-text"
              className="text-copy"
            >
            </use>
          </g>
        </svg>
      </Char>
      <Indicator>{order}/{totalCurrentCharList}</Indicator>
      <Control>
        <button onClick={nextOrder}>Next</button>
        <button onClick={shuffleList}>random</button>
      </Control>
    </>
  );
};

export default Monserrat;
