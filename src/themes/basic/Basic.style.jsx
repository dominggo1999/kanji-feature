import tw, { styled } from 'twin.macro';

export const Char = styled.h1`
  ${tw`
    text-white 
    text-center
    pt-20
  `}

  font-size:300px;
  line-height: 300px;
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
