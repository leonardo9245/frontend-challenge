import { useLocalStorage } from '@/hooks/useLocalStorage';
import { CartIcon } from './icons/cart-icon';
import { styled } from 'styled-components';

const CartCount = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  font-size: 12px;

  background-color: var(--delete-color);
  color: white;

  position: absolute;
  right: -10px;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
`;

export function CartControl() {
  const { value } = useLocalStorage('cart-items', []);
  return (
    <Container>
      <CartIcon color="" />
      {value.length > 0 ? <CartCount>{value.length}</CartCount> : ''}
    </Container>
  );
}
