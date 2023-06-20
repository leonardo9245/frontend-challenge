'use client';
import { DefaultPageLayout } from '@/components/default-page-layout';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`;

export default function Product() {
  return (
    <DefaultPageLayout>
      <Container>
        <button>Voltar</button>
        <section>info do produto</section>
      </Container>
    </DefaultPageLayout>
  );
}
