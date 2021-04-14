import React, { useState } from 'react'
import ContainerToDo, { Botao, DivForm, InputForm, LinhaTable } from './ToDoList.styles'

const ToDoList = () => {
    const [value, setValue] = useState('')
    const [toDo, setToDo] = useState([
        {
            name: 'Lucas Matos'
        }, 
        {
            name: 'Giovana Andrade'
        }, 
        {
            name: 'Wilton Júnior'
        }
    ])

    function deleta(indice){
        console.log(indice)
        toDo.splice(indice, 1)
        // console.log(teste)
        setToDo([...toDo])
        // setToDo(current => current.filter((toDo, i) => i !== indice))
    }

    return (
        <ContainerToDo>
            <DivForm>
                <form
                    onSubmit={Event => {
                        if(value){
                            Event.preventDefault();
                            setToDo([...toDo, {name: value}])
                            setValue('')
                        }
                        Event.preventDefault();
                    }}
                >
                    <InputForm 
                        type='text'
                        value={value}
                        onChange={Event => setValue(Event.target.value)}
                        placeholder='input'
                    />

                    <Botao
                        type='submit'
                    >
                        Adicionar
                    </Botao>
                </form>
            </DivForm>

            <div>
                <table>
                    <tbody>
                        {toDo.map((todo, index) => {
                            return(
                                <LinhaTable key={index}>
                                    <td>{todo.name}</td>
                                    <td><Botao type='button' onClick={() => deleta(index)}>excluir</Botao></td>
                                </LinhaTable>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </ContainerToDo>
    )
}

export default ToDoList