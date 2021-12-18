import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import "./sesion.style.scss";
import { validateUser } from "../../services/validateusers";
import { useDispatch } from "react-redux";
import { register_action } from "../../redux/action/register.reducer";

const LoginPage = ({ render }) => {
  const [renderPage, setRenderPage] = useState(true);

  const sesionToken = JSON.parse(localStorage.getItem("accesToken"));
  const dispatch = useDispatch();

  useEffect(() => {
    if (sesionToken) {
      setRenderPage(false);
    } else {
      setRenderPage(true);
    }
  }, [sesionToken]);

  const [efect, setEfect] = useState({
    transform: "scale(.6)",
  });
  const [visible, setVisible] = useState({
    right: "-100%",
    bottom: "-100%",
    message: "Ingresa tus credenciales de acceso",
    background: "black",
  });

  const { handleSubmit, register } = useForm();
  const [login, setLogin] = useState({});
  const navigate = useNavigate();

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
        message: "Ingresa tus credenciales de acceso",
        background: "black",
      });
    } else {
      setVisible({
        right: "-100%",
        bottom: "-100%",
        message: "Ingresa tus credenciales de acceso",
        background: "black",
      });
    }
  };

  setTimeout(() => {
    if (visible.right !== "-100%" && visible.bottom !== "-100%") {
      setVisible({
        right: "-100%",
        bottom: "-100%",
        message: "Ingresa tus credenciales de acceso",
        background: "black",
      });
    }
  }, 8000);

  const validateAuth = () => {
    const { acces, token } = validateUser.userCredentials(login);
    if (acces) {
      dispatch(register_action(true));
      localStorage.setItem("accesToken", JSON.stringify(token));
      navigate("/onLive");
    } else {
      setVisible({
        right: "3rem",
        bottom: "50px",
        message: "Credenciales incorrectas, intenta nuevamente",
        background: "#ff00009c",
      });
    }
  };

  return true ? (
    <div className="login-page">
      <div
        style={{ transform: efect.transform, transition: "all .2s linear" }}
        className="login-card"
      >
        <div className="header">
          <Button
            onClick={() => {
              navigate("/");
            }}
            sx={{ textTransform: "capitalize" }}
            className="back"
          >
            Regresar
          </Button>
          <div className="title">
            <p>Iniciar</p>
            <p>sesion</p>
          </div>
          <Button
            onClick={viewHelp}
            sx={{ textTransform: "capitalize" }}
            className="back"
          >
            Ayuda
          </Button>
        </div>
        <form onChange={handleSubmit((e) => setLogin(e))} className="form">
          <div className="field">
            <label form="username">User Name</label>
            <input
              type={"text"}
              {...register("username")}
              placeholder="@example"
              id="username"
            />
          </div>
          <div className="field">
            <label form="password">Password</label>
            <input
              type={"password"}
              {...register("password")}
              placeholder="contraseña"
              id="password"
            />
          </div>
        </form>
        <div className="auth-message">
          <Link to={"/register"}>¿Registrarse?</Link>
        </div>
        <div className="btn-onsesion">
          <Button onClick={validateAuth} className="submit">
            Iniciar Sesion
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
  ) : (
    <Navigate to={"/onLive"} />
  );
};

export default LoginPage;
