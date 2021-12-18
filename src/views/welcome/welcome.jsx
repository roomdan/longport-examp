import React from "react";
import "./welcome.style.scss";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const [opacity, setOpacity] = React.useState("100%");

  const navigate = useNavigate();

  const initApp = () => {
    setOpacity("0%");
    setTimeout(() => {
      navigate("/login");
    }, 300);
  };

  return (
    <div className="welcome">
      <div className="presentation">
        <button
          style={{ opacity: opacity, transition: "all .5s" }}
          onClick={initApp}
        >
          ¿Estas listo?
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
