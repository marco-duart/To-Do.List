import { styled } from "styled-components";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -119px;
  margin-left: -265px;
  width: 530px;
  height: 238px;
  display: grid;
  place-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const NegateButton = styled.button`
  border: none;
  position: absolute;
  left: 50px;
  bottom: 0px;
  width: 184px;
  height: 59px;
  border-radius: 25px;
  color: #3a72f8;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`;

export const AcceptButton = styled.button`
  border: 1px solid #0a2668;
  position: absolute;
  right: 50px;
  bottom: 0px;
  width: 184px;
  height: 59px;
  border-radius: 25px;
  background-color: #0a2668;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`;

export const SectionCardStyle = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const InfoSectionCardStyle = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
`;

export const CardStyle = styled.div`
  width: 500px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 25px;
  background-color: #f8f8f8;
  box-shadow: 2px 4px 3px 0px #00000047;
  padding: 10px;
`;

export const EditCardStyle = styled.div`
  width: 500px;
  min-height: 100px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 25px;
  background-color: #f8f8f8;
  box-shadow: 2px 4px 3px 0px #00000047;
  padding: 10px;
`;

export const IDLeftStyle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  white-space: nowrap; 
  max-width: 400px;
  height: 25px;
  background-color: #575757;
  color: #ffffff;
  padding: 5px;
  border-radius: 8px;
  top: -25px;
  left: -10px;
`;

export const TitleCardStyle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #575757;
`;

export const TitleInputCardStyle = styled.input`
  padding: 0 10px;
  width: 260px;
  height: 35px;
  font-size: 20px;
  border: 1px solid #575757;
  border-radius: 25px;
  font-weight: 700;
  color: #575757;
`;

export const DescriptionCardStyle = styled.div`
  font-size: 16px;
  color: #575757;
`;

export const LabelCardStyle = styled.label`
  font-size: 20px;
  font-weight: 700;
  color: #575757;
`;

export const SmallLabelCardStyle = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: #575757;
`;

export const DescriptionInputCardStyle = styled.textarea`
  padding: 10px;
  width: 470px;
  max-height: 90px;
  font-size: 16px;
  border: 1px solid #575757;
  border-radius: 15px;
  color: #575757;
`;

export const CategoryCardStyle = styled.div`
  font-size: 16px;
  color: #575757;
`;

export const CategoryImputCardStyle = styled.input`
  padding: 0 10px;
  width: 100px;
  height: 25px;
  font-size: 16px;
  border: 1px solid #575757;
  border-radius: 25px;
  color: #575757;
`;

export const PriorityCardStyle = styled.div`
  font-size: 16px;
  color: #575757;
`;

export const PriorityInputContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  input[type="radio"] {
    display: none;
  }
  label {
    padding: 4px 4px;
    font-size: 14px;
    border: 1px solid #575757;
    border-radius: 25px;
    color: #575757;
    cursor: pointer;
  }
  input[type="radio"]:checked + label {
    background-color: #575757;
    color: white;
  }
`;

export const IcoSectionCardStyle = styled.div`
  width: 100%;
  position: relative;
`;

export const TopIconImg = styled.img`
  width: 19px;
  height: 19px;
  position: absolute;
  right: 20px;
  top: 0;
  cursor: pointer;
`;

export const RightIconImg = styled.img`
  width: 19px;
  height: 19px;
  position: absolute;
  right: 20px;
  bottom: -5px;
  cursor: pointer;
`;

export const LeftIconImg = styled.img`
  width: 19px;
  height: 19px;
  position: absolute;
  right: 80px;
  bottom: -5px;
  cursor: pointer;
`;

export const MidIconImg = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 50px;
  bottom: -5px;
  cursor: pointer;
`;