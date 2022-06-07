import { useState } from 'react'
import './style.css'

function ThemeBtn( { produto, currentSale, setCurrentSale } ){

  const [ qntItens, setQntItens ] = useState(produto.quantidade)

  function btnAdd(){

   currentSale.filter((element) => {
      if(element.name === produto.name){
        
        produto.quantidade += 1 
        setQntItens(qntItens + 1)

        return  setCurrentSale([...currentSale])
      }
    })
  }

  function btnSub(){
    currentSale.filter((element) => {
      if(produto.quantidade > 1){

        produto.quantidade -= 1
        setQntItens(qntItens - 1)

        return setCurrentSale([...currentSale])
      }
    })
  }

  return(
    <div className='containerBtn'>
      <button onClick={ btnAdd } className='btnQuantidade' >+</button>
      <p className='qntTotalProduto'>{ produto.quantidade }</p>
      <button onClick={ btnSub } className='btnQuantidade'>-</button>
    </div>
  )
}

export default ThemeBtn