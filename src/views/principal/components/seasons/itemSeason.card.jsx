import { useDispatch } from "react-redux";
import { changeContent } from "../../../../redux/action/content.action";
import { getTeams_action } from "../../../../redux/action/teams.action";
import "./itemSeason.style.scss";

const ItemSeason = ({ leageId, name, obj }) => {
  const dispatch = useDispatch();

  const teamsGo = () => {
    dispatch(getTeams_action(leageId, obj.season));
    dispatch(changeContent("teams"));
  };

  return (
    <div className="card-season">
      <div className="head-season-card">
        <p>{name}</p>
        <p>{obj.current ? "Activo" : "Inactivo"}</p>
      </div>
      <div className="body-season-card">
        <span className="inf-item">
          <p>Fecha Inicio:</p>
          {obj.start}
        </span>
        <span className="inf-item">
          <p>Fecha Cierre:</p>
          {obj.end}
        </span>
        <span className="inf-item">
          <p>Temporada:</p>
          {obj.season}
        </span>
        <button onClick={teamsGo} className="team-go">
          Ver Equipo
        </button>
      </div>
    </div>
  );
};

export default ItemSeason;
