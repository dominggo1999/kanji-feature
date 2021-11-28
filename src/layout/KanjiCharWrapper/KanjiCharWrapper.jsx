import React, { useContext } from 'react';
import {
  Wrapper, Char, Indicator, Control,
} from './KanjiCharWrap.style';
import { ReviewContext } from '../../context/Review.context';
import Basic from '../../themes/basic/Basic';
import Neon from '../../themes/neon/Neon';
import Shadow from '../../themes/shadow/Shadow';
import Rainbow from '../../themes/rainbow/Rainbow';
import Monserrat from '../../themes/monserrat/Monserrat';

const KanjiCharWrapper = () => {
  const {
    currentChar, list, order, nextOrder, shuffleList,
  } = useContext(ReviewContext);

  const totalCurrentCharList = list.length;

  return (
    <Wrapper>
      {/* <Monserrat
        currentChar={currentChar}
        order={order}
        nextOrder={nextOrder}
        shuffleList={shuffleList}
        totalCurrentCharList={totalCurrentCharList}
      /> */}
      <Neon
        currentChar={currentChar}
        order={order}
        nextOrder={nextOrder}
        shuffleList={shuffleList}
        totalCurrentCharList={totalCurrentCharList}
      />
      {/* <Rainbow
        currentChar={currentChar}
        order={order}
        nextOrder={nextOrder}
        shuffleList={shuffleList}
        totalCurrentCharList={totalCurrentCharList}
      /> */}
      {/* <Shadow
        currentChar={currentChar}
        order={order}
        nextOrder={nextOrder}
        shuffleList={shuffleList}
        totalCurrentCharList={totalCurrentCharList}
      /> */}
      {/* <Basic
        currentChar={currentChar}
        order={order}
        nextOrder={nextOrder}
        shuffleList={shuffleList}
        totalCurrentCharList={totalCurrentCharList}
      /> */}
    </Wrapper>
  );
};

export default KanjiCharWrapper;
