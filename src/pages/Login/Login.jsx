import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import "./Login.css";
import Logo from "../../componets/Double/Logo/Logo";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    const isLogged = await auth.signin(email, password);
    if (isLogged) {
      navigate("/");
    } else {
      alert("erro");
    }
  };

  return (
    <div className="login_container_form">
      <Link className="link" to="/">
        <span class="material-symbols-outlined close_icon">close</span>
      </Link>
      <Logo />
      <p className="text_form">Faça login em sua conta</p>
      <form className="login_form">
        <input
          className="login_inputs"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="login_inputs"
          placeholder="Senha"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          type="button"
          className="create_account_button"
        >
          Começar
        </button>

        <p className="create_account_text">
          Não tem uma conta?{" "}
          <Link className="link" to="/create-account">
            Cadastre-se
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
