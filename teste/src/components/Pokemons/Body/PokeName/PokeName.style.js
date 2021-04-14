import styled from 'styled-components'

const Visor = styled.div `
    max-width: 235px;
    width: 100%;
    max-height: 145px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #93EA8B;

    border: 3px solid #00CA14;
    border-radius: 20px;
`

export const TitleVisor = styled.span `
    color: black;
    font-size: 24px;
    font-weight: 500;

    margin: 30px 0;
`

export default Visor