import './App.css'

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='App'>
      <header>
        <div id='logo'>Bitabet</div>
        <div id='user_container'>
          <div id='total_value_container'>
            <div>R$</div>
            <div id='total_value'>100</div>
            <div>,00</div>
            <span className="material-symbols-outlined" id="money_icon">
             paid
            </span>
          </div>
          <div id='deposit_button'>Depositar</div>
          <div id='person_container'>
            <span id="user" className="material-symbols-outlined">
              person
            </span>
          </div>
        </div>
    </header>
      <Outlet />
    </div>
  )
}

export default App
