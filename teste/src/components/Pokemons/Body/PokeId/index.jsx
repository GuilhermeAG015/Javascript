import React from 'react'
import VisorId, { VisorIdTitle } from './PokeId.styles'

const PokeId = ({ indice }) => {
    return (
        <VisorId>
            <VisorIdTitle>
                {indice}
            </VisorIdTitle>
        </VisorId>
    )
}

export default PokeId