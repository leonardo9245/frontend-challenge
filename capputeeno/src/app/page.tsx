'use client';
import { FilterBar } from '@/components/filter-bar';
import { ProductsList } from '@/components/products-list';
import { styled } from 'styled-components';

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 10px;
  min-heigth: 100vh;
  background-color: var(--bg-primary);

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 130px 160px;
  }
`;

export default function Home() {
  return (
    <PageWrapper>
      <FilterBar />
      <ProductsList />
    </PageWrapper>
  );
}
