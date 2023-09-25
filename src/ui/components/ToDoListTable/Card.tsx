import { useContext, useState } from "react";
import { CardContext } from "../../../data/contexts/CardContext";
import * as S from "../../styles/Card";
import {
  DeleteCard,
  PutCard,
  ChangeColumn,
  GetCards,
} from "../../../data/services/card";
import editIco from "../../../assets/image/edit.png";
import prevIco from "../../../assets/image/previous.png";
import nextIco from "../../../assets/image/next.png";
import deleteIco from "../../../assets/image/delete.png";
import saveIco from "../../../assets/image/save.png";
import cancelIco from "../../../assets/image/cancel.png";
import openEyeIco from "../../../assets/image/eye.png"
import crossEyeIco from "../../../assets/image/crossed-eye.png"

//TIPO ESPECÍFICO PARA ESSA PROP
type Props = {
  card: IData;
  column: string;
};

const Card = ({ card, column }: Props) => {
  const [editCard, setEditCard] = useState({
    title: {
      value: card.title,
      valid: true,
    },
    description: {
      value: card.description,
      valid: true,
    },
    category: {
      value: card.category,
      valid: true,
    },
    priority: {
      value: card.priority,
      valid: true,
    },
  });
  const [isCardOpen, setIsCardOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); //MODAL PARA CONFIRMAÇÃO DE EXCLUSÃO
  const [isEditing, setIsEditing] = useState<boolean>(false); //CONFIRMAR SE ESTÁ EDITANDO
  const context = useContext(CardContext); //CONTEXTO

  //UM IFZINHO PRA "OBRIGAR" O CONTEXTO A "SER" DE UM TIPO
  if (!context) {
    console.log("Num ta vindo nada");
    return null;
  }
  const { setCards } = context;

  //FUNÇÕES DE ABRIR E FECHAR MODAL
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //DELETAR O CARD
  const handleDelete = async (id: number) => {
    await DeleteCard(id);
    const NewCards = await GetCards();
    if (NewCards) {
      setCards(NewCards);
    }
  };

  //MUDAR A COLUNA
  const handleChangeColumn = async (id: number, column: string) => {
    if (column === "TODO") {
      await ChangeColumn(
        id,
        card.title,
        card.description,
        card.category,
        card.priority,
        "DONE"
      );
    }
    if (column === "DONE") {
      await ChangeColumn(
        id,
        card.title,
        card.description,
        card.category,
        card.priority,
        "TODO"
      );
    }
    const NewCards = await GetCards();
    if (NewCards) {
      setCards(NewCards);
    }
  };

  //MUDAR PARA A RENDERIZAÇÃO DE ESTILO DE EDIÇÃO
  const handleEditClick = () => {
    setIsEditing(true);
  };

  //SALVAR A EDIÇÃO ENVIANDO PARA A API E RENDERIZANDO NOVAMENTE
  const handleSaveClick = async (
    id: number,
    title: string,
    description: string,
    category: string,
    priority: string,
    column: string
  ) => {
    if (
      !editCard.title.value ||
      !editCard.description.value ||
      !editCard.category.value ||
      !editCard.priority.value
    ) {
      setEditCard({
        title: {
          ...editCard.title,
          valid: editCard.title.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
        description: {
          ...editCard.description,
          valid: editCard.description.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
        category: {
          ...editCard.category,
          valid: editCard.category.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
        priority: {
          ...editCard.priority,
          valid: editCard.priority.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
      });
      return;
    }
    await PutCard(id, title, description, category, priority, column);
    const NewCards = await GetCards();
    if (NewCards) {
      setCards(NewCards);
    }
    setIsEditing(false);
  };

  //CANCELAR A EDIÇÃO, RETORNA OS VALORES PADRÕES
  const handleCancelClick = () => {
    setEditCard({
      title: {
        value: card.title,
        valid: true,
      },
      description: {
        value: card.description,
        valid: true,
      },
      category: {
        value: card.category,
        valid: true,
      },
      priority: {
        value: card.priority,
        valid: true,
      },
    });
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <S.EditCardStyle>
          <div>
          <S.LabelCardStyle htmlFor="inputTitle">Title: </S.LabelCardStyle>
          <S.TitleInputCardStyle
            id="inputTitle"
            type="text"
            value={editCard.title.value}
            onChange={(element) =>
              setEditCard({
                ...editCard,
                title: { value: element.target.value, valid: true },
              })
            }
          />
          </div>
          <div>
          <S.LabelCardStyle htmlFor="inputDescription">Description: </S.LabelCardStyle>
          <S.DescriptionInputCardStyle
            id="inputDescription"
            value={editCard.description.value}
            onChange={(element) =>
              setEditCard({
                ...editCard,
                description: { value: element.target.value, valid: true },
              })
            }
          />
          </div>
          <S.InfoSectionCardStyle>
            <S.SmallLabelCardStyle htmlFor="inputCategory">Category: </S.SmallLabelCardStyle>
            <S.CategoryImputCardStyle
              id="inputCategory"
              type="text"
              value={editCard.category.value}
              onChange={(element) =>
                setEditCard({
                  ...editCard,
                  category: { value: element.target.value, valid: true },
                })
              }
            />
          </S.InfoSectionCardStyle>
          <S.InfoSectionCardStyle>
          <S.SmallLabelCardStyle>Priority: </S.SmallLabelCardStyle>
            <S.PriorityInputContainer>
              <input
                type="radio"
                id="baixa"
                name="priority"
                value="baixa"
                checked={editCard.priority.value === "baixa"}
                onChange={(element) =>
                  setEditCard({
                    ...editCard,
                    priority: { value: element.target.value, valid: true },
                  })
                }
              />
              <label htmlFor="baixa">BAIXA</label>
              <input
                type="radio"
                id="media"
                name="priority"
                value="media"
                checked={editCard.priority.value === "media"}
                onChange={(element) =>
                  setEditCard({
                    ...editCard,
                    priority: { value: element.target.value, valid: true },
                  })
                }
              />
              <label htmlFor="media">MÉDIA</label>
              <input
                type="radio"
                id="alta"
                name="priority"
                value="alta"
                checked={editCard.priority.value === "alta"}
                onChange={(element) =>
                  setEditCard({
                    ...editCard,
                    priority: { value: element.target.value, valid: true },
                  })
                }
              />
              <label htmlFor="alta">ALTA</label>
            </S.PriorityInputContainer>
          </S.InfoSectionCardStyle>
          {(!editCard.title.valid ||
            !editCard.description.valid ||
            !editCard.category.valid ||
            !editCard.priority.valid) && (
            <small>Preencha todos os campos!</small>
          )}
          <S.IcoSectionCardStyle>
            <S.MidIconImg
              src={cancelIco}
              alt="cancel"
              onClick={() => handleCancelClick()}
            />
            <S.RightIconImg
              src={saveIco}
              alt="save"
              onClick={() =>
                handleSaveClick(
                  card.id,
                  editCard.title.value,
                  editCard.description.value,
                  editCard.category.value,
                  editCard.priority.value,
                  card.column
                )
              }
            />
          </S.IcoSectionCardStyle>
        </S.EditCardStyle>
      ) : (
        <S.CardStyle>
          <S.SectionCardStyle>
            <S.IDLeftStyle>{card.id}</S.IDLeftStyle>
            <S.TitleCardStyle>{card.title}</S.TitleCardStyle>
            {isCardOpen ? <S.TopIconImg src={crossEyeIco} onClick={() => setIsCardOpen(!isCardOpen)} /> : <S.TopIconImg src={openEyeIco} onClick={() => setIsCardOpen(!isCardOpen)} />}
          </S.SectionCardStyle>
          {isCardOpen && (
            <S.DescriptionCardStyle>{card.description}</S.DescriptionCardStyle>
          )}
          <S.InfoSectionCardStyle>
            <S.CategoryCardStyle>
            <strong>Category:</strong> {card.category}
            </S.CategoryCardStyle>
            <S.PriorityCardStyle><strong>Priority:</strong> {card.priority}</S.PriorityCardStyle>
          </S.InfoSectionCardStyle>
          <S.IcoSectionCardStyle>
            {card.column === "TODO" && (
              <S.LeftIconImg
                src={editIco}
                alt="edit"
                onClick={() => handleEditClick()}
              />
            )}
            <S.MidIconImg
              src={deleteIco}
              alt="delete"
              onClick={() => openModal()}
            />
            {column === "TODO" && (
              <S.RightIconImg
                src={nextIco}
                alt="done"
                onClick={() => handleChangeColumn(card.id, column)}
              />
            )}
            {column === "DONE" && (
              <S.RightIconImg
                src={prevIco}
                alt="todo"
                onClick={() => handleChangeColumn(card.id, column)}
              />
            )}
          </S.IcoSectionCardStyle>
        </S.CardStyle>
      )}
      <S.StyledModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmação de Exclusão"
      >
        <S.TitleCardStyle>DESEJA REALMENTE EXCLUIR ESTE CARD?</S.TitleCardStyle>
        <S.SectionCardStyle>
          <S.NegateButton onClick={() => closeModal()}>NÃO</S.NegateButton>
          <S.AcceptButton onClick={() => handleDelete(card.id)}>
            SIM
          </S.AcceptButton>
        </S.SectionCardStyle>
      </S.StyledModal>
    </>
  );
};

export default Card;
