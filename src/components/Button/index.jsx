import { useState } from 'react'
import './style.css'

function ThemeBtn( { produto, currentSale, setCurrentSale } ){

  const [ qntItens, setQntItens ] = useState(produto.quantidade)

  function btnAdd(){

   const produtoCarrinho = currentSale.filter((element) => {
      if(element.name === produto.name){
        
        produto.quantidade += 1 
        setQntItens(qntItens + 1)
        
      }
    })
  }

  function btnSub(){
    const produtoCarrinho = currentSale.filter((element) => {
      if(produto.quantidade > 1){

        produto.quantidade -= 1
        setQntItens(qntItens - 1)

        return element
      }
    })

    setCurrentSale(produtoCarrinho)
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