/**
 *
 * FormGroup
 *
 */
import styled from 'styled-components/macro';
import { compose, typography, space, color } from 'styled-system';
import { default as BootstrapFormGroup } from 'react-bootstrap/FormGroup';

export const FormGroup = styled(BootstrapFormGroup)`
  ${compose(typography, space, color)}
`;
