import * as S from "../../styles/Header"


const Header = () => {
    return (
        <S.HeaderStyle>
            <S.TitleHeaderStyle>Teste IBC</S.TitleHeaderStyle>
            <S.SectionHeaderStyle>
                <S.StyledLink to="/">Tasks</S.StyledLink>
                <S.StyledLink to="/new">New</S.StyledLink>
            </S.SectionHeaderStyle>
        </S.HeaderStyle>
    )
}

export default Header