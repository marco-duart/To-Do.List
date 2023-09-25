import { styled } from 'styled-components'
import { Link } from 'react-router-dom';

export const ContainerLoginStyle = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    padding-top: 30px;
`

export const LoginStyle = styled.div`
    width: 567px;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
    background-color: #3A72F8;
`

export const TitleLoginStyle = styled.div`
    margin-top: 50px;
    font-size: 48px;
    font-weight: 700;
    color: #FFFFFF;
`

export const SubtitleLoginStyle = styled.div`
    font-size: 32px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 15px;
`

export const SectionLoginStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const LabelLoginStyle = styled.label`
    font-size: 24px;
    color: #FFFFFF;
`

export const InputLoginStyle = styled.input`
    border: none;
    box-sizing: border-box;
    width: 438px;
    height: 59px;
    border-radius: 25px;
    padding: 1rem;
    font-size: 24px;
`

export const ButtonLoginStyle = styled.button`
    border: none;
    width: 209px;
    height: 59px;
    border-radius: 25px;
    font-size: 24px;
    color: #FFFFFF;
    font-weight: 700;
    background-color: #0A2668;
    cursor: pointer;
    margin-bottom: 20px;
`

export const StyledLink = styled(Link)`
    font-size: 24px;
    color: #FFFFFF;
`

export const SmallLoginStyle = styled.small`
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
`