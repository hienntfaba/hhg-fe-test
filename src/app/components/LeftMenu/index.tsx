/**
 *
 * LeftMenu
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { MenuItem } from '../MenuItem';

interface Props {
  menus: {
    title: string;
    url: string;
  }[];
}

export function LeftMenu(props: Props) {
  const { menus } = props;
  return (
    <Div className="px-5 d-flex flex-column">
      <ul className="list-unstyled">
        {menus.map((menu, index) => (
          <li key={index}>
            <MenuItem url={menu.url}>{menu.title}</MenuItem>
          </li>
        ))}
      </ul>
    </Div>
  );
}

const Div = styled.div``;
