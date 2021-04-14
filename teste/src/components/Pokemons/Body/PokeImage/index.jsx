import React from 'react'
import PokeImgStyle from './PokeImage.style'
import Img from './Charizard.png'

const PokeImage = ({Imagem}) => {
    return (
    <PokeImgStyle 
        src={Imagem}
    />
    )
}

export default PokeImage