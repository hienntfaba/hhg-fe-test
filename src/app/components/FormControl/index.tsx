/**
 *
 * FormControl
 *
 */
import styled from 'styled-components/macro';
import { compose, typography, space, color } from 'styled-system';
import { default as BootstrapFormControl } from 'react-bootstrap/FormControl';

export const FormControl = styled(BootstrapFormControl)`
  ${compose(typography, space, color)}
`;
