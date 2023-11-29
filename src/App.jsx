
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Footer from './Components/Footer'
import { Header } from './Components/Header'
import Main from './Components/Main'
import UserCard from './Components/UserCard'
import Avatar from './Components/Avatar';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import CharacterCard from './Components/CharacterCard';





const skills = ['HTML', 'CSS', 'JS']
const skillsMap = skills.map(skill => <li>{skill}</li>)

const main = (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        {skillsMap}
      </ul>
    </div>
  </main>
)

const footer = (
  <footer>
    <div className='footer-wrapper'></div>
    <p>Copyright 2023</p>
  </footer>
)
// let urlImage = 'https://rickandmortyapi.com/api/character/avatar/542.jpeg'
let urlImage = 'https://rickandmortyapi.com/api/character/avatar/734.jpeg'
let nameCharacter = 'Johnathan'
function App() {
  return (
    <>
    <Nav/>
    <Hero/>
    <Main/>
    
    </>
  )
}


export default App
