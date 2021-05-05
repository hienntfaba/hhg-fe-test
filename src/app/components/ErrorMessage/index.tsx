/**
 *
 * ErrorMessage
 *
 */
import * as React from 'react';
import { ErrorMessage as FormikErrorMessage, ErrorMessageProps } from 'formik';
import Feedback from 'react-bootstrap/Feedback';

interface Props {}

export function ErrorMessage(props: Props & ErrorMessageProps) {
  return (
    <FormikErrorMessage
      render={msg => (
        <Feedback type="invalid" className="d-block">
          {msg}
        </Feedback>
      )}
      {...props}
    />
  );
}
