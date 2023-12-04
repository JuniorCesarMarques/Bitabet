import './App.css'
import { useContext, useEffect, useState } from 'react'
import { HeaderContext } from './contexts/HeaderContext'

function App() {


  const {display, setDisplay} = useContext(HeaderContext);
  const {totalValue} = useContext(HeaderContext);

  const showMenu = (event) => {
    event.stopPropagation();
    if(display === "menu") {
      setDisplay("menu_hidden")
    }else {
      setDisplay("menu")
    }
      
  }


  return (
    <div onClick={() => setDisplay("menu_hidden")} className='App'>
        <header>
        <div id='logo'>Bitabet</div>
        <div id='user_container'>
        <div id='total_value_container'>
            <div>R$</div>
            <div id='total_value'>{totalValue.toFixed(2)}</div>
            <span className="material-symbols-outlined" id="money_icon">
            paid
            </span>
        </div>
            <div id='deposit_button'>Depositar</div>
            <div id='person_container'>
            <span
            onClick={showMenu} 
            className="material-symbols-outlined user_icon">
            person
            <div className={display}>
              <div className='options'>
                <span className='material-symbols-outlined'>
                  person
                </span>
                <h1>Conta</h1>
              </div>
              <div className='options'>
              <span class="material-symbols-outlined">
                add_box
                </span>
                <h1>Depositar</h1>
              </div>
              <div className='options'>
              <span class="material-symbols-outlined">
                 payments
                  </span>
                <h1>Sacar</h1>
              </div>
              <div className='options'>
              <span class="material-symbols-outlined">
                person_add
                </span>
                <h1>Indique um amigo</h1>
              </div>
              <div className='options'>
              <span class="material-symbols-outlined">
                logout
                </span> 
                <h1>Sair</h1>
              </div>
            </div>
            </span>
        </div>
        </div>
        </header>
    </div>
  )
}

export default App
