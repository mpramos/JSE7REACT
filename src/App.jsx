
import './App.css'
import Footer from './Components/Footer'
import { Header } from './Components/Header'
import Main from './Components/Main'





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

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}


export default App
