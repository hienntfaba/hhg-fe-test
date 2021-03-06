// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryBlue: string;
      white: string;
      background: string;
    };
    space: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontSizes: {
      small: string;
      body: string;
      h6: string;
      h5: string;
      h4: string;
      h3: string;
      h2: string;
      h1: string;
    };
    lineHeights: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      small: string;
      body: string;
    };
    fontWeights: {
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
  }
}
