import { useLocalStorage } from '@/hooks/useLocalStorage';
import { CartIcon } from './icons/cart-icon';
import { styled } from 'styled-components';
import { useRouter } from 'next/navigation';

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
  margin-right: 20px;
  cursor: pointer;
`;

export function CartControl() {
  const router = useRouter();
  const { value } = useLocalStorage('cart-items', []);

  const handleCartPage = () => {
    router.push('/cart');
  };
  return (
    <Container onClick={handleCartPage}>
      <CartIcon color="" />
      {value.length > 0 ? <CartCount>{value.length}</CartCount> : ''}
    </Container>
  );
}
