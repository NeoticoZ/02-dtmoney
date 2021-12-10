import { Container, Content } from './styles'
import logoImg from '../../assets/logo.svg';

interface HeaderProps {
  onOpenNewTransationModal: () => void
}

export function Header({onOpenNewTransationModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <button onClick={onOpenNewTransationModal} type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}