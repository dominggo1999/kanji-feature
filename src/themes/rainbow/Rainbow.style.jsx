import tw, { styled } from 'twin.macro';

export const Char = styled.h1`
  ${tw`
    text-white 
    text-center
    pt-20
    font-hkgokukaikk
  `}

  font-size:300px;
  line-height: 300px;
  color: #ffffff;
  text-shadow: 5px 5px 0px #6E81A0, 
              10px 10px 0px #3f4b5f, 
              15px 15px 0px #833934, 
              20px 20px 0px #7AB942, 
              25px 25px 0px #3c6377;
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
