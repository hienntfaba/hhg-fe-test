/**
 *
 * Sidebar
 *
 */
import { ROUTES } from 'constants/routes';
import * as React from 'react';
import styled from 'styled-components/macro';
import { LeftMenu } from '../LeftMenu';

const MENUS = [
  {
    url: ROUTES.COUNTER,
    title: 'Counter',
  },
  {
    url: ROUTES.EMPLOYEE,
    title: 'Employee',
  },
];

interface Props {}

export function Sidebar(props: Props) {
  return (
    <Div className="vh-100 w-25 d-flex flex-column sticky-top">
      <Logo src="/logo192.png" alt="logo" className="w-25 py-5 mx-auto" />
      <LeftMenu menus={MENUS} />
    </Div>
  );
}

const Div = styled.div`
  background: ${props => props.theme.colors.primaryBlue};
`;

const Logo = styled.img`
  height: auto;
`;
