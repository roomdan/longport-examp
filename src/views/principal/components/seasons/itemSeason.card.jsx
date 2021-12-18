import { useDispatch, useSelector } from "react-redux";
import { changeContent } from "../../../../redux/action/content.action";
import { paramsStatistics_action } from "../../../../redux/action/params.statistics.action";
import { getTeams_action } from "../../../../redux/action/teams.action";
import "./itemSeason.style.scss";

const ItemSeason = ({ leageId, name, obj }) => {
  const dispatch = useDispatch();

  const { paramsStatisitics_REDUCER } = useSelector((e) => e);

  const teamsGo = () => {
    dispatch(getTeams_action(leageId, obj.year));
    dispatch(changeContent("teams"));
    dispatch(
      paramsStatistics_action({
        ...paramsStatisitics_REDUCER,
        season: obj.year,
        legague: leageId,
      })
    );
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
          {obj.year}
        </span>
        <button onClick={teamsGo} className="team-go">
          Ver Equipo
        </button>
      </div>
    </div>
  );
};

export default ItemSeason;
