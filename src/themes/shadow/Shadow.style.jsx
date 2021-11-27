import tw, { styled } from 'twin.macro';

export const Char = styled.h1`
  ${tw`
    text-white 
    text-center
    pt-20
  `}

  font-size:300px;
  line-height: 300px;
  color: #67875d;
  text-shadow: 0 0 2px #67875d, 
      -4px 5px 0 #5d7755, 
      -7px 11px 0 #4d6047,
      -12px 17px 0 #2e382b,
      -17px 23px 0 #000;
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
