import { useState } from 'react'
import './App.css'
import Profile from './Profile'
import Titulo from './Titulo'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='title'>
    <Titulo title= 'Meu Portfólio da Reprograma'/>
    </div>
    <Profile />
    <Card />
    
    <footer className='footer'>
    Desenvolvido por Mariana Rodrigues - Aluna da Reprograma
       </footer>
    </>
  )
}

export default App