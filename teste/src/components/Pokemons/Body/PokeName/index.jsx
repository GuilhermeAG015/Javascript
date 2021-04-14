import React from 'react'
import Visor, { TitleVisor } from './PokeName.style'

const PokeName = ({Name}) => {
    return (
    <Visor>
        <TitleVisor>{Name}</TitleVisor>
    </Visor>
    )
}

export default PokeName