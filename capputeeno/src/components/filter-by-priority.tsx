import { styled } from 'styled-components';
import { ArrowIcon } from './icons/arrow-icon';
import { useState } from 'react';
import { useFilter } from '@/hooks/useFilter';
import { PriorityTypes } from '@/types/priority-type';

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
      font-size: 14px;
    }

    svg {
      margin-left: 10px;

      @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        margin-left: 16px;
      }
    }
  }
`;

const PriorityFilter = styled.ul`
  position: absolute;
  width: 150px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 999;

  padding: 12px 16px;

  list-style: none;
  font-size: 12px;

  top: 100%;
  right: 1%;

  @media (min-width: 768px) {
    width: 220px;
    top: 100%;

    font-size: 14px;
  }

  li {
    color: var(--text-dark);
    font-weight: 400;
    line-height: 22px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`;

export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  const handleOpen = () => setIsOpen(prev => !prev);
  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value);
    setIsOpen(false);
  };
  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>
            Novidades
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICES)}>
            Preço: Menor - maior
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>
            Mais vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  );
}
