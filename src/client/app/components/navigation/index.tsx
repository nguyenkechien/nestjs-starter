import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useAppSelector } from '../../../redux/hooks';

export const Navigation = () => {
  const counter = useAppSelector((state) => state.counter.value);
  return (
    <div className="header">
      <div className="container">
        <div className="header-logo">My Logo</div>
        <StyledNavigation>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/orders">Orders</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </StyledNavigation>
        <div>State In Store: {counter}</div>
      </div>
    </div>
  );
};

const StyledNavigation = styled('ul')`
  list-style: none;
  display: flex;
  justify-items: center;
  align-items: center;
  li {
    padding: 15px 0;
    a {
      padding: 0 15px;
    }
  }
`;
