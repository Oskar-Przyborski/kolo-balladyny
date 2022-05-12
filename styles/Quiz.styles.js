import styled from 'styled-components'
const cardColor = '#fff'
const selectedCardColor = '#fa8c70'
export const KartaLiteryStyled = styled.div`
    border-radius:0.5em;
    background-color: ${props => props.isSelected ? selectedCardColor : cardColor};
    transition: background-color 0.1s ease-out;
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
    padding: 0.5em 0.5em;
    margin: 0.3em;
    font-weight: bold;
    font-size: 2em;
    width: 2.2em;
    height: 2.5em;
`
export const KeyboardStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width:50%;
    margin-top:200px;
    button{
        margin:0.5em;
        padding:0.3em 0.5em;
        border-radius:0.5em;
        border:1px solid #444;
    }
`
export const NextHasloBtnStyled = styled.div`
    margin-top:200px;
`