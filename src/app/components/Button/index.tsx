/**
 *
 * Button
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { compose, typography, space, color, ButtonProps } from 'styled-system';
import { default as BootstrapButton } from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

interface Props {
  isLoading?: boolean;
}

const ButtonWrapper = (props: Props & ButtonProps) => {
  const { children, isLoading, ...rest } = props;
  return (
    <BootstrapButton {...rest}>
      {isLoading && <Spinner animation="border" size="sm" className="mr-2" />}
      {children}
    </BootstrapButton>
  );
};

const Button = styled(ButtonWrapper)<Props>`
  ${compose(typography, color, space)}
`;

export { Button };
