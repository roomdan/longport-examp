import { Button } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useEffect, useState } from "react";
import "./principal.style.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData_action } from "../../redux/action/countries.action";
import CountryCard from "./components/cards/country.card";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Skeleton from "@mui/material/Skeleton";
import { Navigate } from "react-router-dom";
import { register_action } from "../../redux/action/register.reducer";
import Content_Controller from "./content-ui-controller/content.ui.controller";

const PrincipalPage = () => {
  const [vLeft, setVleft] = useState("-100%");
  const [word, setWord] = useState("");

  const { Get_Countries_Reducer, registerUser_REDUCER } = useSelector((e) => e);
  const [slices, setSlices] = useState({ a: 0, b: 75 });

  const dispatch = useDispatch();

  const data = Get_Countries_Reducer.data ? (
    Get_Countries_Reducer.data.response
      .slice(slices.a, slices.b)
      .filter((e) => e.name.toLowerCase().includes(word.toLowerCase()))
      .map((e) => <CountryCard key={e.flag} flag={e.flag} title={e.name} />)
  ) : (
    <div>
      <Skeleton variant="rectangular" width={250} height={118} />
      <Skeleton /> <Skeleton />
    </div>
  );

  useEffect(() => {
    dispatch(getData_action());
  }, []);

  const viewLeft = () => {
    if (vLeft === "-100%") {
      setVleft("0px");
    } else {
      setVleft("-100%");
    }
  };

  return registerUser_REDUCER ? (
    <div className="a-page">
      <header className="header-app">
        <div className="logo-page item">Football App</div>
        <div className="item"></div>
        <div className="app-info item">
          version 1.0.0.0
          <div className="logout-btn">
            <Button
              onClick={() => {
                dispatch(register_action(false));
              }}
              className="logout-btn"
            >
              <ExitToAppIcon />
            </Button>
          </div>
        </div>
      </header>
      <div className="page-content">
        <div style={{ left: vLeft }} className={`page-left`}>
          <div className="section-title">Lista de Paises</div>
          <div className="content-section">
            <div className="find-word">
              <label>Busca por Pais</label>
              <input
                placeholder="example: Spain"
                onChange={(e) => {
                  setWord(e.target.value);
                }}
              />
            </div>
            <section className="countries-list">{data}</section>
            <div className="countries-ctrl">
              <div className="item-ctrl">
                <Button
                  onClick={() => {
                    setSlices({
                      ...slices,
                      b: slices.b > 0 ? slices.b - 5 : 0,
                    });
                  }}
                >
                  <IndeterminateCheckBoxIcon />
                </Button>
                <input onChange={() => {}} value={slices.a + 1} />
                <input onChange={() => {}} value={slices.b} />
                <Button
                  onClick={() => {
                    setSlices({
                      ...slices,
                      b: slices.b >= 0 ? slices.b + 5 : 0,
                    });
                  }}
                >
                  <AddBoxIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="page-central">
          <Content_Controller />
        </div>
      </div>
      <div className="controll-view-btn">
        <Button onClick={viewLeft} className="action-btn">
          <ListIcon />
        </Button>
      </div>
    </div>
  ) : (
    <Navigate to={"/login"}></Navigate>
  );
};

export default PrincipalPage;
