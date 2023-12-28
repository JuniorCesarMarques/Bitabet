import './App.css'
import { useContext, useState } from 'react'
import OptionsMenu from './componets/Double/Options_menu/OptionsMenu'
import Logo from './componets/Double/Logo/Logo'
import { HeaderContext } from './contexts/HeaderContext'
import { Link } from 'react-router-dom'

function App() {


  const {display, setDisplay} = useContext(HeaderContext);

  //Animation states
  const {animationValue} = useContext(HeaderContext);
  const {operator} = useContext(HeaderContext);
  const {condition} = useContext(HeaderContext);
  const {animation, setAnimation} = useContext(HeaderContext);

  const {totalValue} = useContext(HeaderContext);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
        <header className='main_header'>
          <Logo />

        {isLoggedIn ? (
          <div className='container_logged_in'>
          <div id='total_value_container'>
              {condition && 
              <div 
              style={animation}
              className='animation_value'>{operator}{animationValue}</div>}
              <div>R$</div>
              <div id='total_value'>{totalValue.toFixed(2)}</div>
              <span className="material-symbols-outlined" id="money_icon">
              paid
              </span>
          </div>
              <div className='deposit_button'>Depositar</div>
              <div id='person_container'>
              <span
              onClick={showMenu} 
              className="material-symbols-outlined user_icon">
              person
              <OptionsMenu setIsLoggedIn={setIsLoggedIn} display={display}/>
              </span>
          </div>
          </div>
        ): (
          <div className='container_logged_out'>
            <Link className='login' to='/login'><h1>Entrar</h1></Link>
            <Link className='link' to='/create-account'>
              <div className="create_account_button_header">Cadastre-se</div>
            </Link>
          </div>
        )}
        </header>
    </div>
  )
}

export default App
