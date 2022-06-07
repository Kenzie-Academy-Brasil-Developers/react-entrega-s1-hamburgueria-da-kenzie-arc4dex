import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import TotalMoney from './components/TotalMoney';


function App() {

  const URLBase = 'https://hamburgueria-kenzie-json-serve.herokuapp.com/products'

  const [ products, setProducts ] = useState([])

  const [ filterProducts, setFilterProducts ] = useState([])

  const [currentSale, setCurrentSale ] = useState([])


  useEffect(() => {
    fetch(URLBase)
    .then((res) => res.json())
    .then((json) => {
      setProducts(json)
      setFilterProducts(json)
    })
  }, [])

 
  function filtrar(valorInput){
    const produtoFiltrado = products.filter((produto) => {
      return produto.name.toLowerCase().includes(valorInput) || produto.category.toLowerCase().includes(valorInput)
    })
    setProducts(valorInput === '' ? filterProducts : produtoFiltrado)
  }

  function enviarCarrinho( produto ) { 
    
    if(produto !== undefined && currentSale.includes(produto)){
      
      toast.error('Esse produto já foi adicionado')

    } else {
      Object.assign(produto, {quantidade: 1})
      setCurrentSale([...currentSale, produto])
    }
  }

  function itemDeleted( index ){

    const listaNova = [...currentSale]

    listaNova.splice(index, 1)

    setCurrentSale(listaNova)
  }

  return (
    <div className="App">
      <Header products={products} setListProducts={setProducts} filtrar = { filtrar }/>
      <main className='secaoPrincipal'>
        <ul>
          <ProductsList products={ products } enviarCarrinho = { enviarCarrinho }/>
        </ul>
          <aside>
            <Cart currentSale = { currentSale } setCurrentSale = { setCurrentSale } itemDeleted = { itemDeleted }/>
            <TotalMoney currentSale = { currentSale } setCurrentSale = { setCurrentSale } />
          </aside>
      </main>
      <ToastContainer/>
    </div>
    
  );
}

export default App;
