import { Container } from "./styles";
import entry from "../../assets/entry.svg";
import out from "../../assets/out.svg";
import total from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entry} alt="entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={out} alt="saidas" />
        </header>
        <strong> - R$500,00</strong>
      </div>

      <div className="hightlight-background">
        <header>
          <p>Entradas</p>
          <img src={total} alt="total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
