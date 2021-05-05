import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontSizes.body};
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: ${props => props.theme.fonts.primary};
    line-height: ${props => props.theme.lineHeights.body};
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
