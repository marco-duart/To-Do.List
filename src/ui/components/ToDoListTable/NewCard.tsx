import { useContext } from "react";
import { CardContext } from "../../../data/contexts/CardContext";
import { useState } from "react";
import { EditColumnStyle, TitleColumnStyle } from "../../styles/Column";
import * as S from "../../styles/Card";
import { GetCards, PostCard } from "../../../data/services/card";
import newIco from "../../../assets/image/new.png";

const NewCard = () => {
  //VALORES TEMPORÁRIOS PARA CARD
  const [cardForm, setCardForm] = useState({
    title: {
      value: "",
      valid: true,
    },
    description: {
      value: "",
      valid: true,
    },
    category: {
      value: "",
      valid: true,
    },
    priority: {
      value: "",
      valid: true,
    },
  });
  const context = useContext(CardContext);
  if (!context) {
    return null;
  }
  const { setCards } = context;

  //SALVAR A EDIÇÃO ENVIANDO PARA A API E RENDERIZANDO NOVAMENTE
  const handleSaveClick = async () => {
    if (!cardForm.title.value || !cardForm.description.value) {
      setCardForm({
        title: {
          ...cardForm.title,
          valid: cardForm.title.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
        description: {
          ...cardForm.description,
          valid: cardForm.description.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
        category: {
          ...cardForm.category,
          valid: cardForm.category.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
        priority: {
          ...cardForm.priority,
          valid: cardForm.priority.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
      });
      return;
    }
    await PostCard(
      cardForm.title.value,
      cardForm.description.value,
      cardForm.category.value,
      cardForm.priority.value
    );
    const NewCards = await GetCards();
    if (NewCards) {
      //LIMPANDO OS CAMPOS APÓS GERAR NOVO CARD
      setCardForm({
        title: {
          value: "",
          valid: true,
        },
        description: {
          value: "",
          valid: true,
        },
        category: {
          value: "",
          valid: true,
        },
        priority: {
          value: "",
          valid: true,
        },
      });
      setCards(NewCards);
    }
  };

  return (
    <EditColumnStyle>
      <TitleColumnStyle>NEW</TitleColumnStyle>
      <S.EditCardStyle>
        <div>
          <S.LabelCardStyle htmlFor="inputTitle">Title: </S.LabelCardStyle>
          <S.TitleInputCardStyle
            type="text"
            value={cardForm.title.value}
            onChange={(element) =>
              setCardForm({
                ...cardForm,
                title: { value: element.target.value, valid: true },
              })
            }
          />
        </div>
        <div>
          <S.LabelCardStyle htmlFor="inputTitle">Description: </S.LabelCardStyle>
          <S.DescriptionInputCardStyle
            value={cardForm.description.value}
            onChange={(element) =>
              setCardForm({
                ...cardForm,
                description: { value: element.target.value, valid: true },
              })
            }
          />
        </div>
        <div>
          <S.InfoSectionCardStyle>
            <S.SmallLabelCardStyle>Category: </S.SmallLabelCardStyle>
            <S.CategoryImputCardStyle
              type="text"
              value={cardForm.category.value}
              onChange={(element) =>
                setCardForm({
                  ...cardForm,
                  category: { value: element.target.value, valid: true },
                })
              }
            />
          </S.InfoSectionCardStyle>
          </div>
          <div>
          <S.InfoSectionCardStyle>
            <S.SmallLabelCardStyle>Priority: </S.SmallLabelCardStyle>
            <S.PriorityInputContainer>
              <input
                type="radio"
                id="baixa"
                name="priority"
                value="baixa"
                checked={cardForm.priority.value === "baixa"}
                onChange={(element) =>
                  setCardForm({
                    ...cardForm,
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
                checked={cardForm.priority.value === "media"}
                onChange={(element) =>
                  setCardForm({
                    ...cardForm,
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
                checked={cardForm.priority.value === "alta"}
                onChange={(element) =>
                  setCardForm({
                    ...cardForm,
                    priority: { value: element.target.value, valid: true },
                  })
                }
              />
              <label htmlFor="alta">ALTA</label>
            </S.PriorityInputContainer>
          </S.InfoSectionCardStyle>
        </div>

        {(!cardForm.title.valid ||
          !cardForm.description.valid ||
          !cardForm.category.valid ||
          !cardForm.priority.valid) && <small>Preencha todos os campos!</small>}
        <S.IcoSectionCardStyle>
          <S.RightIconImg
            src={newIco}
            alt="save"
            onClick={() => handleSaveClick()}
          />
        </S.IcoSectionCardStyle>
      </S.EditCardStyle>
    </EditColumnStyle>
  );
};

export default NewCard;
