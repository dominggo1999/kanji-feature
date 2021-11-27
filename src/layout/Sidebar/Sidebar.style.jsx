import tw, { styled } from 'twin.macro';

export const SidebarWrapper = styled.aside`
  ${tw`
    fixed
    top-0 
    left-0 
    bg-red-500
    h-full
  `}

  width: 200px;
  z-index: 9999;
`;
