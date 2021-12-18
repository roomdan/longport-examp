import "./register.style.scss";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { registerUser } from "../../services/registerusers";

const RegisterPage = ({ render }) => {
  const [efect, setEfect] = useState({
    transform: "scale(.6)",
  });
  const [visible, setVisible] = useState({
    right: "-100%",
    bottom: "-100%",
    message: "",
    background: "black",
  });

  const { handleSubmit, register } = useForm();
  const [login, setLogin] = useState({});
  const navigate = useNavigate();
  const [succesCreate, setSucceesCreate] = useState(false);

  useEffect(() => {
    if (render) {
      setTimeout(() => {
        setEfect({
          transform: "scale(1)",
        });
      }, 10);
    }
  }, [render]);

  const viewHelp = () => {
    if (visible.right === "-100%" && visible.bottom === "-100%") {
      setVisible({
        right: "3rem",
        bottom: "50px",
        message: "Ingresa tus datos, se guardaran en localStorage",
        background: "#6400e9",
      });
    } else {
      setVisible({
        right: "-100%",
        bottom: "-100%",
        message: "",
        background: "#6400e9",
      });
    }
  };

  setTimeout(() => {
    if (visible.right !== "-100%" && visible.bottom !== "-100%") {
      setVisible({
        right: "-100%",
        bottom: "-100%",
        message: "",
        background: "blue",
      });
    }
  }, 8000);

  const createUser = () => {
    registerUser.saveUser(login, setVisible, (e) => {
      setSucceesCreate(e.created);
    });
  };

  return succesCreate ? (
    <div className="register-page">
      <div className="register-create">
        <span className="circle">
          <HowToRegIcon className="register-icon" />
        </span>
        <div className="title">
          <h2>Tu registro se creo satisfactoriamente.</h2>
          <Button
            onClick={() => {
              navigate("/login");
            }}
          >
            Inicia Sesion
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <div className="register-page">
      <div
        style={{ transform: efect.transform, transition: "all .2s linear" }}
        className="login-card"
      >
        <div className="header">
          <Button
            onClick={() => {
              navigate("/login");
            }}
            className="back"
          >
            Salir
          </Button>
          <div className="title">
            <p>Registrar</p>
            <p>Cuenta</p>
          </div>
          <Button onClick={viewHelp} sx={{ textTransform: "capitalize" }}>
            Opciones
          </Button>
        </div>
        <form onChange={handleSubmit((e) => setLogin(e))} className="form">
          <div style={{ marginTop: "1rem" }} className="field">
            <label form="full-name">Nombres Completos</label>
            <input
              type={"text"}
              {...register("fullName")}
              placeholder="nombres completos"
              id="full-name"
            />
          </div>
          <div className="field">
            <label form="email">Correo Electrónico</label>
            <input
              type={"email"}
              {...register("email")}
              placeholder="alguien@example.es"
              id="email"
            />
          </div>
          <div className="field">
            <label form="phone">Celular</label>
            <input
              type={"tel"}
              {...register("phone")}
              placeholder="celular"
              id="phone"
            />
          </div>
          <div className="field">
            <label form="phone">Nacionalidad</label>
            <input
              type={"text"}
              {...register("nationality")}
              placeholder="nacionalidad"
              id="nationality"
            />
          </div>
        </form>
      </div>
      <div
        style={{ transform: efect.transform, transition: "all .2s linear" }}
        className="login-card"
      >
        <form onChange={handleSubmit((e) => setLogin(e))} className="form">
          <div className="field">
            <label form="username">Usuario</label>
            <input
              type={"text"}
              {...register("username")}
              placeholder="@example"
              id="username"
            />
          </div>
          <div className="field">
            <label form="password">Contraseña</label>
            <input
              type={"password"}
              {...register("password")}
              placeholder="contraseña"
              id="password"
            />
          </div>
        </form>
        <div className="auth-message">
          <Link to={"/login"}>O inicia Sesion</Link>
        </div>
        <div className="btn-onsesion">
          <Button onClick={createUser} className="submit">
            Registrarse
          </Button>
        </div>
      </div>
      <div
        style={{
          bottom: visible.bottom,
          background: visible.background,
          transition: "all .4s linear",
        }}
        className="help-view"
      >
        {visible.message}
      </div>
    </div>
  );
};

export default RegisterPage;
