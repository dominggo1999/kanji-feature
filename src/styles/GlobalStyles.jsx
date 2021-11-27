import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const imgUrl = new URL('../fonts/dfkaishu.ttf', import.meta.url).href;

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased`}
  }

  @font-face {
    font-family: 'hkgokukaikk';
    font-weight: 400;
    src: local('hkgokukaikk'), url('https://qkqsdlvawbrhbeqrhsrj.supabase.in/storage/v1/object/sign/fonts/nagayama_kai08.otf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb250cy9uYWdheWFtYV9rYWkwOC5vdGYiLCJpYXQiOjE2Mzc1Mjc2OTQsImV4cCI6MTk1Mjg4NzY5NH0.NCivxjlq76cG_q_MyV7IFxoI4FwzlyIN04LpQ05-X8Q') format('truetype');
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
