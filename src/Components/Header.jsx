const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const authorFirstName = 'Asabeneh'
const authorLastName = 'Yetayeh'
const date = 'Nov 24, 2023'

const header = (
    <header>
      <div className='header-wrapper'
  >
       <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle} </h3>
      <p>Instructor: {authorFirstName} {authorLastName}</p>
      <small>Date:{date}</small>
      </div>
    </header>
  )
export const Header =()=>{
    return header
}