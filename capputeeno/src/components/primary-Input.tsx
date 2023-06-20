import { styled } from 'styled-components';
import { SearchIcon } from './icons/search-icon';
import { ChangeEvent, InputHTMLAttributes } from 'react';
import { useFilter } from '@/hooks/useFilter';

export const PrimaryInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  background-color: var(--bg-secondary);
  padding: 8px 10px;

  font-family: inherit;
  font-weight: 400;
  font-size: 10px;

  color: var(--text-dark);

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 14px;
    line-height: 22px;
    padding: 10px 16px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 200px;

  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
      right: 20px;
    }
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    width: 352px;
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

export function PrimaryInputWSearchIcon(props: InputProps) {
  const { setSearch } = useFilter();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <InputContainer>
      <PrimaryInput onChange={event => handleSearch(event)} {...props} />
      <SearchIcon />
    </InputContainer>
  );
}
