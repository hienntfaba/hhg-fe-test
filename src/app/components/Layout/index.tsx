/**
 *
 * Layout
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Sidebar } from '../Sidebar';

interface Props {
  children: React.ReactElement;
}

export function Layout(props: Props) {
  const { children } = props;
  return (
    <Div className="d-flex">
      <Sidebar />
      <div className="p-4 flex-grow-1">{children}</div>
    </Div>
  );
}

const Div = styled.div``;
