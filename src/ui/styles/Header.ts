import { styled } from 'styled-components'
import { Link } from 'react-router-dom';

export const HeaderStyle = styled.div`
    box-sizing: border-box;
    height: 76px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3A72F8;
    padding: 20px;
`

export const SectionHeaderStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const TitleHeaderStyle = styled.div`
    font-size: 32px;
    font-weight: 700;
    color: #FFFFFF;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 24px;
    font-weight: 700;
    color: #FFFFFF;
    cursor: pointer;
`