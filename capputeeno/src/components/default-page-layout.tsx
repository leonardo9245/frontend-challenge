'use client';

import { styled } from 'styled-components';

export const DefaultPageLayout = styled.div`
  padding: 80px 10px;
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 130px 160px;
  }
`;
