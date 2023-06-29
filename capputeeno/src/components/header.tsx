'use client';
import { styled } from 'styled-components';

import { Saira_Stencil_One } from 'next/font/google';
import { PrimaryInputWSearchIcon } from './primary-Input';
import { CartControl } from './cart-control';
import { useFilter } from '@/hooks/useFilter';

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
});

const TagHeader = styled.header`
  position: fixed;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 10px;
  background-color: #fff;

  z-index: 998;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;
  }
`;
const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  text-decoration: none;

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`;

export default function Header() {
  const { search } = useFilter();
  return (
    <TagHeader>
      <Logo className={sairaStencil.className} href="/">
        Capputeeno
      </Logo>
      <div>
        <PrimaryInputWSearchIcon
          value={search}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </div>
    </TagHeader>
  );
}
