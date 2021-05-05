/**
 *
 * FormLabel
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { compose, typography, space, color } from 'styled-system';
import {
  default as BootstrapFormLabel,
  FormLabelProps,
} from 'react-bootstrap/FormLabel';

interface Props {
  isRequired?: boolean;
}

const FormLabelWrapper = (props: Props & FormLabelProps) => {
  const { isRequired, ...rest } = props;
  return (
    <>
      <BootstrapFormLabel {...rest} />
      {isRequired && <span className="text-danger"> *</span>}
    </>
  );
};

const FormLabel = styled(FormLabelWrapper)`
  ${compose(typography, color, space)}
`;

export { FormLabel };
