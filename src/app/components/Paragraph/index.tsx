/**
 *
 * Paragraph
 *
 */
import styled from 'styled-components/macro';
import {
  color,
  compose,
  fontSize,
  fontWeight,
  layout,
  opacity,
  space,
  textAlign,
  typography,
  variant,
} from 'styled-system';

const P = styled.p`
  font-weight: ${props => props.theme.fontWeights.regular};
  ${fontSize};
  ${compose(color, space, fontSize, textAlign, fontWeight)};
`;

const Span = styled.span`
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontWeights.regular};
  ${color};
  ${space};
  ${fontSize};
  ${fontWeight};
  ${layout};
  ${typography};
  ${opacity};
  ${variant({
    prop: 'variant',
    variants: {
      body: {
        fontWeight: 'regular',
      },
      bodyBold: {
        fontWeight: 'bold',
      },
      bodyItalic: {
        fontStyle: 'italic',
      },
      small: {
        fontSize: 'small',
        fontWeight: 'regular',
      },
      smallBold: {
        fontSize: 'small',
        fontWeight: 'bold',
      },
    },
  })}
`;

export { P, Span };
