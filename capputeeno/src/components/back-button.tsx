import styled from 'styled-components';
import { IconBack } from './icons/icon-back';
import router, { useRouter } from 'next/navigation';

export interface IBackButtonProps {
  navigate: string;
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: var(--secondary-text);
`;

export function BackButton({ navigate }: IBackButtonProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(navigate);
  };

  return (
    <Button onClick={handleNavigate}>
      <IconBack />
      Voltar
    </Button>
  );
}
