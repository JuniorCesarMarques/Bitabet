import './CreateAccount.css'
import Logo from '../../componets/Double/Logo/Logo';
import { Link } from "react-router-dom"
import { HeaderContext } from '../../contexts/HeaderContext';
import { useEffect, useState, useContext } from 'react';

const CreateAccount = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [labelName, setLabelName] = useState("label_not_focus");
    const [labelEmail, setLabelEmail] = useState("label_not_focus");
    const [labelPassword, setLabelPassword] = useState("label_not_focus");
    const [labelConfirmPassword, setLabelConfirmPassword] = useState("label_not_focus");


    const [user, setUser] = useState([{}]);
    const {users, setUsers} = useContext(HeaderContext);

    const [display, setDisplay] = useState("none");
    const [inputStyle, setInputStyle] = useState({border: "none"});
    const [alertMessage, setAlertMessage] = useState("");


    useEffect(() => {
        setUser({
            name: name,
            email: email,
            date: date,
            password: password,
            confirmPassword: confirmPassword
        })
    }, [name, email, date, password, confirmPassword])


    const handleSubmitButton = (e) => {
        e.preventDefault()

        let passwordsMatch = password === confirmPassword;
        let passwordLengthValid = password.length >= 8;

        if(!passwordsMatch) {
            setDisplay("block");
            setAlertMessage("As senhas não coincidem!")
            setInputStyle({border: "1px solid red"});

            setTimeout(() => {
                setDisplay("none");
                setAlertMessage("");
                setInputStyle({border: "none"});
                setConfirmPassword("")
            }, 2000);
        }else if(!passwordLengthValid) {
            setDisplay("block");
            setAlertMessage("A senha deve conter 8 ou mais dígitos");
            setInputStyle({border: "1px solid red"});
            setTimeout(() => {
                setDisplay("none");
                setAlertMessage("");
                setInputStyle({border: "none"});
                setPassword("")
                setConfirmPassword("")
            }, 2000);  
        }else {
            setUsers([...users, user]);
        }
        
    }

    useEffect(() => {

        console.log(users)

    }, [users])

    return ( 
        <div className='create_account_container_form'>
            <Link className="link" to="/">
                <span className="material-symbols-outlined close_icon">
                close
                </span>
            </Link>
            <Logo />
            <p className='text_create_account_form'>Cadastre-se na bitabet</p>
            <form 
            onSubmit={handleSubmitButton} className='create_account_form'>
            <div className="container_input">
                <label className={labelName} htmlFor="name">Nome</label>
                <input
                onFocus={() => setLabelName("label_on_focus")}
                onBlur={() => name.length === 0 ? setLabelName("label_not_focus") : {}}
                required
                className='create_account_input'
                type="text"
                name='name'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="container_input">
                <label 
                className={labelEmail} 
                htmlFor="email">Email</label>
                <input
                onFocus={() => setLabelEmail("label_on_focus")}
                onBlur={() => email.length === 0 ? setLabelEmail("label_not_focus") : {}}
                className='create_account_input'
                type="email"
                name="email"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="container_input">
                <label 
                htmlFor="date" 
                className={"label_on_focus"}>Data de nascimento</label>
                <input 
                className='create_account_input'
                type="date"
                name="date"
                id="date"
                value={date}
                required
                onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="container_input">
                <label 
                htmlFor="password" 
                className={labelPassword}>Senha</label>

                <input
                onFocus={() => setLabelPassword("label_on_focus")}
                onBlur={() => password.length === 0 ? setLabelPassword("label_not_focus") : {}}
                className='create_account_input'
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='password'
                required />
            </div>
            <div className="container_input">
                <label 
                htmlFor="confirm-password" 
                className={labelConfirmPassword}>Confirmar senha</label>
                <input
                onFocus={() => setLabelConfirmPassword("label_on_focus")}
                onBlur={() => confirmPassword.length === 0 ? setLabelConfirmPassword("label_not_focus") : {}}
                style={inputStyle}
                className='create_account_input'
                type="password"
                name="confirm-password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete='confirm-password'
                required />
            </div>
            <p className='login_text' style={{display: display}}>{alertMessage}</p>

            <input 
            className='create_account_button' 
            type='submit' 
            value='Começar!'/>
            <p className="login_text">Já tem uma conta?
            <Link className='link' to="/login"> Entrar</Link></p>
        </form>
        </div>
     );
}
 
export default CreateAccount;