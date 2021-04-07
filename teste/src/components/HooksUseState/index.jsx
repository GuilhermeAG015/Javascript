import React, { useState } from 'react'
import Container, { Botao } from './Botao.styles'

const ExercicioHooks = () => {
    const [count, setCount] = useState(0)
    
    return (
        <Container>
            <p>You Clicked {count} times</p>
            <Botao
                onClick={() => setCount(count + 1)}
            >
                Click Here
            </Botao>
        </Container>
    )
}

export default ExercicioHooks