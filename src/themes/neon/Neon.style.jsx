import tw, { styled } from 'twin.macro';

import { keyframes } from 'styled-components';

// https://colorhunt.co/palettes/neon
// https://www.shutterstock.com/blog/neon-color-palettes/

export const Char = styled.h1`
  ${tw`
    text-white 
    text-center
    pt-20 
  `}

  font-weight: 100;
  font-size:180px;
  line-height: 180px;
  color: #f4fff6cc;
  --color1: #92f18f;
  --color2: #9ef6dc;
  --color3: #263b2d;
  --color4: #1c4135;
  
  display: block;
  text-shadow: 
    0 0 10px var(--color1),
    0 0 20px var(--color2),
    0 0 40px var(--color3),
    0 0 80px var(--color4);
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
      py-2 
      px-4
      rounded-xl
      mx-2
      border-2 
    `}

  border-color: #9ef6dc;
  --color1: #92f18f;
  --color2: #9ef6dc;
  --color3: #263b2d;
  --color4: #1c4135;
  
  box-shadow: 
    0 0 10px var(--color1),
    0 0 20px var(--color2),
    0 0 40px var(--color3),
    0 0 80px var(--color4);
  }
`;
