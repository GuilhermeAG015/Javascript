import React, { useEffect, useState } from 'react'
import AdventureInfo from './AdventureInfo'
import BodyStyle, { 
    CaptureButtonStyle, 
    CardListContainer, 
    ColumnComponents, 
    ContainerCatch, 
    ListContainer, 
    TitleButton, 
    TitleList,
    CardStyle,
    ImgCard,
    NomePokemon,
    DeleteButton,
    DivButton,
    DivInfos,
    IdPokemon} from './Body.style'

import PokeId from './PokeId'
import PokeImage from './PokeImage'
import PokeName from './PokeName'

const UrlBase = 'https://pokeapi.co/api/v2/pokemon/';
const UrlImagem = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const Tipoimagem = '.png';

const Body = () => {
    const [poke, setPoke] = useState([])
    const [id, setId] = useState()
    const [nome, setNome] = useState()
    const [image, setImage] = useState()
    let indice
    let data
    
    const IdPoke = () => {
        const min = Math.ceil(1)
        const max = Math.floor(151)

        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    
    useEffect(async () =>{
        indice = IdPoke()
        setId(indice)
        await fetch(UrlBase + indice)
        .then(async res => {
            data = await res.json()
            setNome(data.name)
            setImage(UrlImagem + indice + Tipoimagem)
        })        
    },[])
 
    const Consulta = async () => {
        indice = IdPoke()
        setId(indice)
        await fetch(UrlBase + indice)
        .then(async res => {
            data = await res.json()
            setNome(data.name)
            setImage(UrlImagem + indice + Tipoimagem)
            setPoke([...poke, {nome: data.name, id: indice, Img: UrlImagem + indice + Tipoimagem}])
        })

    }

    function deleta (index) {
        poke.splice(index, 1)
        setPoke([...poke])
    }
    
    return (
        <BodyStyle>
            <ContainerCatch>
                <ColumnComponents>
                   <PokeImage Imagem={image}/>
                   <PokeId indice={id}/> 
                </ColumnComponents>
                
                <PokeName Name={nome}/>

                <ColumnComponents>
                    <AdventureInfo />
                    <CaptureButtonStyle
                        type = 'button'
                        onClick={Consulta}
                    >
                        <TitleButton>Capturar</TitleButton>
                    </CaptureButtonStyle>
                </ColumnComponents>
            </ContainerCatch>
            
            <ListContainer>
                <TitleList>Pokedex</TitleList>
                <CardListContainer>
                    {poke.map((pokedex, index) => (
                        <CardStyle key={index}>
                            <DivButton>
                                <DeleteButton onClick={() => deleta(index)} >X</DeleteButton>
                            </DivButton>
                            <DivInfos>
                                <ImgCard 
                                    src={pokedex.Img}
                                />
                                <NomePokemon>{pokedex.nome}</NomePokemon>
                                <IdPokemon>{pokedex.id}</IdPokemon>
                            </DivInfos>
                        </CardStyle>
                    ))}
                </CardListContainer>
            </ListContainer>
        </BodyStyle>
    )
}

export default Body