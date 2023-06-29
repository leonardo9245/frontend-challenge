'use client';
import { BackButton } from '@/components/back-button';
import { CartItem } from '@/components/cart/cart-item';
import { DefaultPageLayout } from '@/components/default-page-layout';
import { Divider } from '@/components/divider';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ProductInCart } from '@/types/product';
import { FormatValue } from '@/utils/format-price';
import { styled } from 'styled-components';

export interface ICartPageProps {}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 32px;

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    flex-direction: row;
  }
`;

const CartListContainer = styled.div`
  h3 {
    margin-top: 24px;
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--text-dark-2);
    line-height: 150%;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    color: var(--text-dark-2);
    line-height: 150%;
    max-height: 50%;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
      font-weight: 600;
    }
  }
`;

const CartList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  min-height: 100%;
  max-height: 700px;
  min-width: 300px;
  padding: 16px 24px;

  h3 {
    font-weight: 600;
    font-size: 20px;
    color: var(--text-dark-2);
  }
`;

const TotalItem = styled.div<{ isBold: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-weight: ${props => (props.isBold ? '600' : '400')};
  font-size: 16px;
  line-height: 150%;

  margin-bottom: 12px;
`;

const ShopBtn = styled.button`
  color: #fff;
  border-radius: 4px;
  border: none;
  background: var(--success-color);
  padding: 12px;
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 40px;
`;

export default function CartPage(props: ICartPageProps) {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    'cart-items',
    []
  );

  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0
    );
  };

  const cartTotal = FormatValue(calculateTotal(value));
  const deliveryFee = 4000;
  const cartTotalWDelivery = FormatValue(calculateTotal(value) + deliveryFee);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map(item => {
      if (item.id !== id) return item;
      return { ...item, quantity: quantity };
    });
    updateLocalStorage(newValue);
  };

  const handleDeleteItem = (id: string) => {
    const newValue = value.filter(item => {
      if (item.id !== id) return item;
    });
    updateLocalStorage(newValue);
  };

  return (
    <DefaultPageLayout>
      <Container>
        <CartListContainer>
          <BackButton navigate="/" />
          <h3>Seu carrinho</h3>
          <p>
            Total {value.length} produtos
            <span>{cartTotal}</span>
          </p>
          <CartList>
            {value.map(item => (
              <CartItem
                product={item}
                key={item.id}
                handleUpdateQuantity={handleUpdateQuantity}
                handleDelete={handleDeleteItem}
              />
            ))}
          </CartList>
        </CartListContainer>
        <CartResultContainer>
          <h3>Resumo do pedido</h3>
          <TotalItem isBold={false}>
            <p>Subtotal de produtos</p>
            <p>{cartTotal}</p>
          </TotalItem>

          <TotalItem isBold={false}>
            <p>Entrega</p>
            <p>{FormatValue(deliveryFee)}</p>
          </TotalItem>

          <Divider />

          <TotalItem isBold={true}>
            <p>Total</p>
            <p>{cartTotalWDelivery}</p>
          </TotalItem>

          <ShopBtn>Finalizar compra</ShopBtn>
        </CartResultContainer>
      </Container>
    </DefaultPageLayout>
  );
}
