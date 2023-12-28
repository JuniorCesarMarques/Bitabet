import { Link } from "react-router-dom";
import { useState } from "react";
import './Login.css'
import Logo from "../Logo/Logo";



const Login = () => {

    const [email, setEmail] = useState();

    return ( 
            <div className='login_container_form'>
            <Link className="link" to="/">
            <span class="material-symbols-outlined close_icon">
            close
            </span>
            </Link>
            <Logo />
            <p className="text_form">Faça login em sua conta</p>
            <form className="login_form">
            <input className="login_inputs"
            type="email" 
            name="email" 
            id="email"
            placeholder='Email'
            onChange={() => setEmail(email)}
            value={email} />
            <input className="login_inputs"
            placeholder='Senha' 
            type="password" 
            name="password" 
            id="password" />
             <input 
            className='create_account_button' 
            type='submit' 
            value='Começar!'/>

            <p className="create_account_text">Não tem uma conta? <Link className="link" to="/create-account">Cadastre-se</Link></p>
        </form>
        </div>
     );
}
 
export default Login;