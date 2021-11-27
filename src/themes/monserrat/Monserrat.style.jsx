import tw, { styled } from 'twin.macro';
import { keyframes }from 'styled-components';

const strokeOffset = keyframes`
  100% {stroke-dashoffset: -39%;}
`;

export const Char = styled.h1`
  ${tw`
    text-white 
    text-center
    pt-20
  `}

  font-size:320px;
  line-height: 320px;

  svg {
    display: block;
    width: 960px;
    height: 350px;
    margin: 0 auto;
}

  .text-copy {
      fill: none;
      stroke: white;
      stroke-dasharray: 10% 29%;
      stroke-width: 10px;
      stroke-dashoffset: 0%;
      animation: ${strokeOffset} 5.5s infinite linear;
  }

  .text-copy:nth-child(1){
    stroke: #4D163D;
    animation-delay: -1;
  }

  .text-copy:nth-child(2){
    stroke: #f02077;
    animation-delay: -2s;
  }

  .text-copy:nth-child(3){
    stroke: #bd0048;
    animation-delay: -3s;
  }

  .text-copy:nth-child(4){
    stroke: #048675;
    animation-delay: -4s;
  }

  .text-copy:nth-child(5){
    stroke: #FDB731;
    animation-delay: -5s;
  }
`;

export const Indicator = styled.p`
  ${tw`
    text-center
    mt-10
  `}
`;

export const Control = styled.div`
  ${tw`
    mt-10 
    text-center
  `}

  button {
    ${tw`
      bg-red-500
      py-2 
      px-4
      rounded-xl
    `}
  }
`;
