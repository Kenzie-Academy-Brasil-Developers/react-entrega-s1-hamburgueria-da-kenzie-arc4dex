import './style.css'

function Card({ produto, enviarCarrinho}){

  return(
    <div className="containerCard">
      <figure className='containerImg'>
        <img src={produto.img} alt={produto.name} className='imgProduto'/>
      </figure>
      <section className="infoProduto">
        <h2 className='nomeProduto'>{produto.name}</h2>
        <h3 className='categoriaProduto'>{produto.category}</h3>
        <span className='precoProduto'>{produto.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}</span>
        <button className="btn btnAdicionar" onClick={ () =>{
          enviarCarrinho( produto )
          }}>Adicionar</button>
      </section>
    </div>
  )
}

export default Card