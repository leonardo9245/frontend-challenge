import { ProductInCart } from '@/types/product';
import { FormatValue } from '@/utils/format-price';
import { ChangeEvent } from 'react';
import { styled } from 'styled-components';
import { DeleteIcon } from '../icons/delete-icon';

export interface ICartItemProps {
  product: ProductInCart;
  handleUpdateQuantity(id: string, quantity: number): void;
  handleDelete(id: string): void;
}

const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 210px;
  max-width: 736px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;

  svg {
    position: absolute;
    top: 16px;
    right: 24px;
    cursor: pointer;
  }

  img {
    max-height: 100%;
    width: 250px;
  }

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    padding: 16px 24px;

    h4 {
      font-weight: 300;
      font-size: 20px;
      line-height: 150%;
      color: var(--text-dark-2);
    }

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
      color: var(--text-dark-2);
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      span {
        font-weight: 600;
        font-size: 16px;
        color: var(--shapes-dark);
      }
    }
  }
`;

const SelectQuantity = styled.select`
  padding: 8px;
  border-radius: 8px;
  border: 1.5px solid #a8a8b3;
  background-color: var(--bg-secondary);
  color: var(--text-dark);
  font-weight: 400;
  font-size: 16px;
`;

export function CartItem({
  product,
  handleUpdateQuantity,
  handleDelete
}: ICartItemProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id, Number(e.target.value));
  };

  return (
    <Item>
      <button onClick={() => handleDelete(product.id)} aria-label="Deletar">
        <DeleteIcon />
      </button>
      <figure>
        <img src={product.image_url} />
      </figure>
      <div>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div>
          <SelectQuantity
            value={product.quantity}
            onChange={e => handleChange(e)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </SelectQuantity>
          <span>{FormatValue(product.price_in_cents)}</span>
        </div>
      </div>
    </Item>
  );
}
