import { useDispatch, useSelector } from "react-redux";
import { changeContent } from "../../../../../redux/action/content.action";
import ItemSeason from "../../../components/seasons/itemSeason.card";
import "./seasons.style.scss";

const SeasonsList = () => {
  const { seasons_REDUCER } = useSelector((e) => e);
  const dispatch = useDispatch();

  const items = seasons_REDUCER.seasons.map((e) => {
    return (
      <ItemSeason
        key={seasons_REDUCER.idLegae + seasons_REDUCER.leageName + e.start}
        name={seasons_REDUCER.leageName}
        obj={e}
        leageId={seasons_REDUCER.idLegae}
      />
    );
  });

  return (
    <div className="a-page-seasons">
      <div className="title-seasons">
        <h2>+ Detalle Temporadas</h2>
        <div className="subtt">{seasons_REDUCER.leageName}</div>
        <button
          onClick={() => {
            dispatch(changeContent("leages"));
          }}
          className="back-leages"
        >
          regresar
        </button>
      </div>
      <div className="content-season">{items}</div>
    </div>
  );
};

export default SeasonsList;
