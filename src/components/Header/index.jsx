import { useEffect, useState } from 'react'
import LogoBurguer from '../../img/logoKenzieBurguer.svg'

import './style.css'

function Header({ filtrar }){

  const [ valorInput, setValorInput ] = useState('')

  useEffect(() => {
    filtrar(valorInput)
  }, [valorInput])

  return(
    <header className="header">
      <img src={LogoBurguer} alt="Logo marca hamburgueria Kenzie" className="imgLogo"/>
      <section className="secaoHeader">
        <input type="text" placeholder="Digitar Pesquisa" className='inputPesquisar' onChange={ (event) => setValorInput(event.target.value.toLowerCase().trim())}/>
        <button className="btnPesquisar" onClick={ () => filtrar(valorInput) }>Pesquisar</button>
      </section>
    </header>
  )
}

export default Header