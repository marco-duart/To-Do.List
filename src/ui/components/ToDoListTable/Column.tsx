import { useContext } from "react";
import { CardContext } from "../../../data/contexts/CardContext";
import * as S from "../../styles/Column";
import Card from "./Card";

type Props = {
  column: string;
};

const Column = ({ column }: Props) => {
  const context = useContext(CardContext);
  if (!context) {
    //TRATAR EM CASO DE NULL
    return null;
  }
  const { cards } = context;

  //SEPARANDO OS CARDS ESPECÍFICOS DA COLUNA
  const columnCards: IData[] = cards.filter(
    (card: IData) => card.column === column
  );
  return (
    <S.ColumnStyle>
      {column === "TODO" && <S.TitleColumnStyle>To Do</S.TitleColumnStyle>}
      {column === "DONE" && <S.TitleColumnStyle>Done</S.TitleColumnStyle>}
      {columnCards.map((card: IData) => (
        <div key={card.id}>
          <Card card={card} column={column}/>
        </div>
      ))}
    </S.ColumnStyle>
  );
};

export default Column;
