import React from 'react';
import ContainerApp from './App.styles';
import Body from './components/Pokemons/Body';
import HeaderPoke from './components/Pokemons/Header';

function App() {
  return (
    <ContainerApp>
      <HeaderPoke />
      <Body />
    </ContainerApp>
  );
}

export default App;
