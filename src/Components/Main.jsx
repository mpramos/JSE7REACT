import React from 'react'
import './Main.css'
import CardCharacter from './CardCharacter'

const Main = () => {
  let nombre = "Character One"
  let edad = 38
  let estado =['Alive','Humanoid'] 
  let character = {
    firstName:'Oscar',
    secondName:'Gutierrez'
  }


  return (
    <>
    <section className='main-container'>
      <CardCharacter name={nombre} age={edad} status={estado} character={character}/>
      
    </section>
    </>
  )
}

export default Main