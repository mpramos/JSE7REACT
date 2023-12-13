import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Main from './Components/Main'
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import PruebaBoton from './Components/PruebaBoton';

import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home';
import { Blog } from './Components/Blog';
import Profile from './Components/Profile';
import MenuMe from './Components/MenuMe';
import { useEffect, useState } from 'react';

  
  function App() {
    const [count, setCount] = useState(0)
    const [characters,setCharacters] = useState([])

    let mostrarMensaje = () => alert('Hola')
    useEffect(()=>{
      const fetchCharacters = async ()=>{
        try {
          const respuesta = await fetch('https://rickandmortyapi.com/api/character')
          const data = await respuesta.json()
          setCharacters(data.results)
        }
        catch (error){
          console.error('Error en la peticion', error)
        }
      }
      fetchCharacters()
    },[])
    return (
      <>  
      <HashRouter>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>Add One</button>
        <MenuMe/>
        <Routes>
          <Route path='/'   element={<Home/>}> </Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='*' element={<p>NOT FOUND</p>}></Route>
        </Routes>
          <div >
            {characters.map(character=>(
              <div>
              <h3>{character.name}</h3>
              <img src={character.image}/>
              </div>
            ))}
          </div>

        <Nav />
        <Hero />
        <Main />
        <PruebaBoton text='click' onClick={mostrarMensaje} />

      </HashRouter>
    </>
  )
}


export default App
