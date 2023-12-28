import "./CreateAccount.css";
import Logo from "../../componets/Double/Logo/Logo";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../contexts/HeaderContext";
import { useEffect, useState, useContext } from "react";
import { AuthContext, SignUpType } from "../../contexts/AuthContext";
import React from "react";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdayDate, setbirthdayDate] = useState(new Date());
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [labelName, setLabelName] = useState("label_not_focus");
  const [labelEmail, setLabelEmail] = useState("label_not_focus");
  const [labelPassword, setLabelPassword] = useState("label_not_focus");
  const [labelConfirmPassword, setLabelConfirmPassword] =
    useState("label_not_focus");

  const auth = useContext(AuthContext);
  const [user, setUser] = useState<SignUpType>();
  const { users, setUsers } = useContext(HeaderContext);

  const [display, setDisplay] = useState("none");
  const [inputStyle, setInputStyle] = useState({ border: "none" });
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    setUser({
      name,
      email,
      birthdayDate,
      password,
      passwordConfirmation,
    });
  }, [name, email, birthdayDate, password, passwordConfirmation]);

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    let passwordsMatch = password === passwordConfirmation;
    let passwordLengthValid = password.length >= 8;

    if (!passwordsMatch) {
      setDisplay("block");
      setAlertMessage("As senhas não coincidem!");
      setInputStyle({ border: "1px solid red" });

      setTimeout(() => {
        setDisplay("none");
        setAlertMessage("");
        setInputStyle({ border: "none" });
        setPasswordConfirmation("");
      }, 2000);
    } else if (!passwordLengthValid) {
      setDisplay("block");
      setAlertMessage("A senha deve conter 8 ou mais dígitos");
      setInputStyle({ border: "1px solid red" });
      setTimeout(() => {
        setDisplay("none");
        setAlertMessage("");
        setInputStyle({ border: "none" });
        setPassword("");
        setPasswordConfirmation("");
      }, 2000);
    } else {
      console.log("user", user);
      await auth.signup(user!!);
    }
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className="create_account_container_form">
      <Link className="link" to="/">
        <span className="material-symbols-outlined close_icon">close</span>
      </Link>
      <Logo />
      <p className="text_create_account_form">Cadastre-se na bitabet</p>
      <form onSubmit={handleSubmitButton} className="create_account_form">
        <div className="container_input">
          <label className={labelName} htmlFor="name">
            Nome
          </label>
          <input
            onFocus={() => setLabelName("label_on_focus")}
            onBlur={() =>
              name.length === 0 ? setLabelName("label_not_focus") : {}
            }
            required
            className="create_account_input"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="container_input">
          <label className={labelEmail} htmlFor="email">
            Email
          </label>
          <input
            onFocus={() => setLabelEmail("label_on_focus")}
            onBlur={() =>
              email.length === 0 ? setLabelEmail("label_not_focus") : {}
            }
            className="create_account_input"
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="container_input">
          <label htmlFor="date" className={"label_on_focus"}>
            Data de nascimento
          </label>
          <input
            className="create_account_input"
            type="date"
            name="date"
            id="date"
            value={birthdayDate.toLocaleDateString("en-CA")}
            required
            onChange={(e) => setbirthdayDate(new Date(e.target.value))}
          />
        </div>
        <div className="container_input">
          <label htmlFor="password" className={labelPassword}>
            Senha
          </label>

          <input
            onFocus={() => setLabelPassword("label_on_focus")}
            onBlur={() =>
              password.length === 0 ? setLabelPassword("label_not_focus") : {}
            }
            className="create_account_input"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="password"
            required
          />
        </div>
        <div className="container_input">
          <label htmlFor="confirm-password" className={labelConfirmPassword}>
            Confirmar senha
          </label>
          <input
            onFocus={() => setLabelConfirmPassword("label_on_focus")}
            onBlur={() =>
              passwordConfirmation.length === 0
                ? setLabelConfirmPassword("label_not_focus")
                : {}
            }
            style={inputStyle}
            className="create_account_input"
            type="password"
            name="confirm-password"
            id="confirm-password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="confirm-password"
            required
          />
        </div>
        <p className="login_text" style={{ display: display }}>
          {alertMessage}
        </p>

        <input
          className="create_account_button"
          type="button"
          value="Começar!"
          onClick={handleSubmitButton}
        />
        <p className="login_text">
          Já tem uma conta?
          <Link className="link" to="/login">
            {" "}
            Entrar
          </Link>
        </p>
      </form>
    </div>
  );
};

export default CreateAccount;
