import { Container } from "./styles";
import entry from "../../assets/entry.svg";
import out from "../../assets/out.svg";
import total from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entry} alt="entradas" />
        </header>
        <strong>R$ {summary.deposits}</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={out} alt="saidas" />
        </header>
        <strong>- R$ {summary.withdraws}</strong>
      </div>

      <div className="hightlight-background">
        <header>
          <p>Entradas</p>
          <img src={total} alt="total" />
        </header>
        <strong>R$ {summary.total}</strong>
      </div>
    </Container>
  );
}
