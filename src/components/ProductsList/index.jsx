
import Card from "../Card"
import './style.css'

function ProductsList({products, enviarCarrinho, notify}){

  return(
    <ul>
      {products.map((produto) => 
        <li key={produto.id}>
          <Card enviarCarrinho = { enviarCarrinho } produto = { produto }/> 
        </li>
      )}
    </ul>
  )
}

export default ProductsList