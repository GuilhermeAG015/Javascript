import styled from 'styled-components'

const BodyStyle = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const ContainerCatch = styled.div `
    width: 1500px;
    height: 315px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    background-color: #B80303;
    border: 0;

    border-radius: 25px;
`

export const ColumnComponents = styled.div `
    height: 80%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const CaptureButtonStyle = styled.button `
    max-height: 62px;
    height: 100%;
    width: 250px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: linear-gradient(#492CFF, #301E9B);

    border: 2px solid #000C78;
    border-radius: 20px;

    cursor: pointer;
`

export const TitleButton = styled.span `
    color: white;
    font-size: 24px;
    font-weight: 500;

    margin: 15px 0;

    &:hover{
        text-decoration: underline;
    }
`

export const ListContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const TitleList = styled.div `
    font-size: 30px;
    font-weight: 500;
    text-decoration: underline;

    color: #000;

    margin-top: 15px;
`

export const CardListContainer = styled.div `
    display: inline-grid;
    grid-template-columns: auto auto auto auto auto auto auto;

    grid-gap: 30px 30px;

    margin-top: 20px;
`

export const CardStyle = styled.div `
    width: 175px;
    height: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid #000;
    border-radius: 10px;

    background-color: #c7c7c7;
`

export const DivInfos = styled.div `
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const DivButton = styled.div `
    height: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    width: 100%
`

export const DeleteButton = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 10px 15px 0 0;

    background-color: #e44;

    border: 1px solid #900;

    color: #e6e6e6;
    cursor: pointer;

    width: 24px;
    height: 24px;

    font-size: 16px;
    font-weight: 600;

    &:hover {
        color: #fff
    }
`

export const ImgCard = styled.img `
    background-color: #fff;
`

export const NomePokemon = styled.span `
    font-size: 24px;
    font-weight: 500;
    color: black;
`

export const IdPokemon = styled.span `
    font-size: 16px;
    font-weight: 500;
    color: black;
`

export default BodyStyle