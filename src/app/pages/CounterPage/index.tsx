/**
 *
 * CounterPage
 *
 */
import { Button } from 'app/components/Button';
import { Span } from 'app/components/Paragraph';
import * as React from 'react';
import styled from 'styled-components/macro';

const DEFAULT_COUNTER = 0;

interface Props {}

export function CounterPage(props: Props) {
  const [counter, setCounter] = React.useState(DEFAULT_COUNTER);
  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  const handleReset = () => {
    setCounter(DEFAULT_COUNTER);
  };
  return (
    <Div className="d-flex align-items-center">
      <Span className="mr-4">Counter: {counter}</Span>
      <Button variant="success" className="mr-4" onClick={handleIncrease}>
        Increase
      </Button>
      <Button variant="danger" onClick={handleReset}>
        Reset
      </Button>
    </Div>
  );
}

const Div = styled.div``;
