import { useState } from 'react'
import './App.css'
import { Player } from '@lottiefiles/react-lottie-player'

function App() {

  return (
    <>
      <div>
        <p>Meu nome é Fabrício, tenho 24 anos, meus conhecimentos são: javascript, react native, react.</p>
        <h3>Informações pessoais</h3>
        <p>Telefone: (48)988081574</p>
        <p>Github: <a href="https://github.com/FabricioSantos22">Link</a></p>
        <h3>Meus projetos</h3>
        <a href="https://rick-morty-tau-ten.vercel.app/" >Rick Morty Api
        </a>
        <Player
        src="https://assets-v2.lottiefiles.com/a/ab10e652-1164-11ee-810c-67dc86fca422/YVBHnaAQCc.json" loop autoplay speed={1} 
        style={{ height: "300px", width: "300px"}}
      />
      </div>
    </>
  )
}

export default App
