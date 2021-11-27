import tw, { styled } from 'twin.macro';

import { keyframes } from 'styled-components';

const flickering = keyframes`
  0% {
    color: white;
    filter: saturate(80%) hue-rotate(10deg);
  }
`;

const randomIn = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

const ms = randomIn(2000, 4000);

export const Char = styled.h1`
  ${tw`
    text-white 
    text-center
    pt-20
    font-hkgokukaikk
  `}

  font-size:300px;
  line-height: 300px;
  color: azure;
  --color1: azure;
  --color2: aqua;
  --color3: dodgerblue;
  --color4: blue;
  --interval : 2300ms;
  
  display: block;
  text-shadow: 
    0 0 10px var(--color1),
    0 0 20px var(--color2),
    0 0 40px var(--color3),
    0 0 80px var(--color4);
  will-change: filter, color;
  filter: saturate(60%);
  animation: ${flickering} steps(100) var(--interval) 2s infinite;
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
