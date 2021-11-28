import tw, { styled } from 'twin.macro';

export const SidebarWrapper = styled.aside`
  ${tw`
    fixed
    top-0 
    left-0 
    bg-transparent
    h-full
    pl-4
  `}

  width: 200px;
  z-index: 9999;


  label {
    ${tw`
      inline-block
      text-white
      mb-1
    `}
  }

  input{
    ${tw`
      bg-transparent
      border-2
      border-white
      rounded-lg
      mb-4
      text-white
      px-4
    `}
  }

  button {
    ${tw`
      text-white
      mt-4
      font-bold
    `}
  }
`;
