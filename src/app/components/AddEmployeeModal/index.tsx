/**
 *
 * AddEmployeeModal
 *
 */
import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { FormControl } from '../FormControl';
import { FormGroup } from '../FormGroup';
import { FormLabel } from '../FormLabel';
import { Button } from '../Button';
import { ErrorMessage } from '../ErrorMessage';

interface Props {
  show: boolean;
  handleClose: () => void;
  onSubmit: (values?: Record<string, any>) => void;
  isSubmitting: boolean;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  position: Yup.string().required('Required'),
});

export function AddEmployeeModal(props: Props) {
  const { show, handleClose, onSubmit, isSubmitting } = props;

  return (
    <Modal onHide={handleClose} show={show} centered>
      <Formik
        initialValues={{ name: '', email: '', position: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange }) => (
          <Form>
            <Modal.Header closeButton>
              <Modal.Title>Add Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormGroup>
                <FormLabel isRequired>Name</FormLabel>
                <FormControl
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                <ErrorMessage name="name" />
              </FormGroup>
              <FormGroup>
                <FormLabel isRequired>Email</FormLabel>
                <FormControl
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage name="email" />
              </FormGroup>
              <FormGroup>
                <FormLabel isRequired>Position</FormLabel>
                <FormControl
                  type="text"
                  name="position"
                  value={values.position}
                  onChange={handleChange}
                />
                <ErrorMessage name="position" />
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleClose}
                className="mr-2"
              >
                Close
              </Button>
              <Button
                variant="primary"
                type="submit"
                isLoading={isSubmitting}
                disabled={isSubmitting}
              >
                Add
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
