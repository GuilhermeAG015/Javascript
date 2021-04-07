import styled from 'styled-components'

const ContainerToDo = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const DivForm = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const InputForm = styled.input `
    width: 280px;
    font-size: 16px;
`

export const Botao = styled.button `
    font-size: 16px;
    
    border-radius: 5px;

    border: 0;
    color: white;
    background-color: darkgray;
    height: 25px;

    margin-left: 2px;

    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

export const LinhaTable = styled.tr `
    width: 280px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 5px;

    border-bottom: 1px solid #726e6e;
`

export default ContainerToDo