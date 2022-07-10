import Text from './Text'
import Imagem from './Imagem'

function Cards() {
  return (
    <>
    <h1 className='skill'>4 Projetos feito na Reprograma</h1>
    <div className='card-container'>
    
    <div className='Card'>
    <Imagem link="https://media.giphy.com/media/K9usva8rnZy1TNj9Cy/giphy.gif"/>
    <Text texto= 'Projeto criado para homenagiar uma mulher maravilhosa'/>        
    </div>

    <div className='Card'>
    <Imagem link="https://media.giphy.com/media/hQ7n9dPBoq6YVZSIlA/giphy.gif"/>
    <Text texto= 'Primeiro projeto criado usando o react'/>        
    </div>

    <div className='Card'>
    <Imagem link="https://media.giphy.com/media/tAWLMGViV3zdYxj2Yx/giphy.gif"/>
    <Text texto= 'Projeto criado usando a API Ghibli'/>        
    </div>

    <div className='Card'>
    <Imagem link="https://media.giphy.com/media/6VYxTlMLjY1di3ysAn/giphy.gif"/>
    <Text texto= 'Projeto ViaCep'/>        
    </div>
    </div>
  </>
  )
}

export default Cards