import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" onClick={refreshPage} />
        <button type="submit" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
