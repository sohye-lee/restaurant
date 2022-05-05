import { createGlobalStyle } from 'styled-components';

export const mainTheme = {
  body: '#fff',
  text: '#121212',
  primary: '#ff6347',
  secondary: '#ffd700',
  gray: '#898989',
  grayLight: '#f0f0f0',
  grayDark: '#343434',
  black: '#121212',
  white: '#fff',
  transition: 'all ease 300ms',
  title1: '3rem',
  title2: '2.4rem',
  title3: '2rem',
  text1: '20px',
  text2: '18px',
  text3: '16px',
  text4: '14px',
  text5: '12px',
  mainFont: 'Montserrat, sans-serif',
};

export const GlobalStyles = createGlobalStyle`
* {
   box-sizing: border-box;
}
body {
   margin: 0;
   padding: 0;
   background: ${({ theme }) => theme.body};
   color: ${({ theme }) => theme.text};
   font-family: ${({ theme }) => theme.mainFont};
   font-weight: 400;
   font-style: normal;
   transition: ${({ theme }) => theme.transition};
}
 
 a {
   color: inherit;
   text-decoration: none;
 }
 
 * {
   box-sizing: border-box;
 }

input, textarea, button {font-family: inherit}
`;
