const OptionsMenu = ({ setIsLoggedIn, display }) => {
    return ( 
        <div className={display}>
        <div className='options'>
          <span className='material-symbols-outlined'>
            person
          </span>
          <h1>Conta</h1>
        </div>
        <div className='options'>
        <span className="material-symbols-outlined">
          add_box
          </span>
          <h1>Depositar</h1>
        </div>
        <div className='options'>
        <span className="material-symbols-outlined">
           payments
            </span>
          <h1>Sacar</h1>
        </div>
        <div className='options'>
        <span className="material-symbols-outlined">
          person_add
          </span>
          <h1>Indique um amigo</h1>
        </div>
        <div onClick={() => setIsLoggedIn(false)} className='options'>
        <span className="material-symbols-outlined">
          logout
          </span> 
            <h1>Sair</h1>
        </div>
      </div>
     );
}
 
export default OptionsMenu;