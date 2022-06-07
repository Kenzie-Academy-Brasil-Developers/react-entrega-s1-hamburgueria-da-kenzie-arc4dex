import ThemeBtn from '../Button'
import './style.css'

function MiniCard( { currentSale, itemDeleted, setCurrentSale } ){

  return(

    <li className="produtosCarrinho">
      {currentSale.map((produto, index) => (
      <div key={produto.id} className='containerProdutoCarrinho'>
        <div className="infoCompra">
          <figure className='containerImgProdutoCarrinho'>
            <img src={produto.img} alt={produto.name} className = 'imgProdutoCarrinho' />
          </figure>
          <section>
            <h2 className="compraNomeCarrinho">{produto.name}</h2>
            <h3 className="compraCategoriaCarrinho">{produto.category}</h3>
          </section>
        </div>
        <section>
          <button className="btnRemover" onClick={ () => itemDeleted( index ) }>Remover</button>
          <ThemeBtn produto = { produto } currentSale = { currentSale } setCurrentSale = { setCurrentSale }/>
        </section>
      </div>
      ))}
    </li>

    
  )
}

export default MiniCard