
import EmptyCart from '../cartEmpty'
import MiniCard from '../MiniCard'
import './style.css'

function Cart({ currentSale, itemDeleted, setCurrentSale }){

  return (
    <div className='containerCarrinho'>
      <div className='tituloCarrinho'>
        <h3>Carrinho de compras</h3>
      </div>
      <div className='containerProdutos'>
        {currentSale < 1 ? <EmptyCart/> : <ul className='listaCarrinho'> <MiniCard currentSale = { currentSale }  itemDeleted = { itemDeleted } setCurrentSale= { setCurrentSale }  /></ul>}
      </div>
    </div>
  )
}

export default Cart

