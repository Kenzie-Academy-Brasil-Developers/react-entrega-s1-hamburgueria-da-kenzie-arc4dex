import { useEffect, useState } from 'react'
import './style.css'

function TotalMoney( { currentSale, setCurrentSale } ){

  const [ valueCart, setValueCart ] = useState(0)

  const valorTotal = currentSale.reduce((a, b) => {

    return (a + (b.price * b.quantidade))

  }, 0)


  useEffect(() => {

  }, [currentSale])


  return(
    <div className="secaoTotal">
      <section className='secaoDinheiro'>
        <p className="total">Total</p>
        <p className="valorTotal">R$ {valorTotal.toFixed(2)} </p>
      </section>
      <button onClick = { () => setCurrentSale([])} className='btnRemoverTodos'>Remover Todos</button>
    </div>
  )
}

export default TotalMoney