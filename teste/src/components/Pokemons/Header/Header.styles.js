import styled from 'styled-components'

const ContainerHeader = styled.div `
    width: 100%;
    max-height: 90px;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DivTitle = styled.div `
    max-width: 550px;
    width: 100%;
    max-height: 66px;
    height: 100%;

    margin: 12px;

    background-color: #93EA8B;

    border: 3px solid #00CA14;
    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    line-height: 53px;
    font-family: Georgia, 'Times New Roman', Times, serif;
`

export const HeaderTitle = styled.span `
    font-size: 35px;
    font-size: 500;
    color: black;

    text-decoration: underline;
`

export default ContainerHeader