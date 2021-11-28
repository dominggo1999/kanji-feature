import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const imgUrl = new URL('../fonts/dfkaishu.ttf', import.meta.url).href;

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased`}
  }

  @font-face {
    font-family: 'cool';
    src: local('cool'), url('https://idcyaqedpckeldnybifq.supabase.in/storage/v1/object/sign/fonts/nagayama_kai08.otf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb250cy9uYWdheWFtYV9rYWkwOC5vdGYiLCJpYXQiOjE2MzgwMDEwMjUsImV4cCI6MTk1MzM2MTAyNX0.WwDVb42chPwhxvllV1UHFsxLHKDXyKthEbqF_Djxf00') format('opentype');
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
