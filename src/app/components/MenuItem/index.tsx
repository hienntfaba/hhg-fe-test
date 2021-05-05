/**
 *
 * MenuItem
 *
 */
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

interface Props {
  children: string;
  url: string;
}

export function MenuItem(props: Props) {
  const { children, url } = props;
  return <StyledNavLink to={url}>{children}</StyledNavLink>;
}

const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  opacity: 0.6;
  transition: 0.15s;
  padding: ${props => props.theme.space.xs};
  display: block;
  &:hover {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    opacity: 0.8;
  }
  &:active,
  &.active {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    opacity: 1;
  }
`;
