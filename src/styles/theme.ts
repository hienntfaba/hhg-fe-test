import { DefaultTheme } from 'styled-components/macro';

const theme: DefaultTheme = {
  colors: {
    primaryBlue: '#000852',
    white: '#ffffff',
    background: '#F5F6F8',
  },
  space: {
    xs: '5px',
    sm: '10px',
    md: '15px',
    lg: '20px',
    xl: '25px',
  },
  fontSizes: {
    small: '0.8rem',
    body: '0.9rem',
    h6: '1rem',
    h5: '1.2rem',
    h4: '1.4rem',
    h3: '1.6rem',
    h2: '1.8rem',
    h1: '2rem',
  },
  lineHeights: {
    h1: '3.42rem',
    h2: '2.86rem',
    h3: '2.57rem',
    h4: '2.29rem',
    h5: '2rem',
    h6: '1.71rem',
    small: '1.29rem',
    body: '1.43rem',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  fonts: {
    primary: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    secondary: 'Georgia, Times, Times New Roman, serif',
  },
};

export default theme;
