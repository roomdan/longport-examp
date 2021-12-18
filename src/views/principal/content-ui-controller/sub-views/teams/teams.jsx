import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeContent } from "../../../../../redux/action/content.action";
import "./teams.style.scss";
import CharginSkeleton from "../../../../../util/layouts/skeletons/onSkeleton";
import { useState } from "react";
import TeamCard from "../../../components/team/team";

const TeamsSection = () => {
  const dispatch = useDispatch();
  const { getTeams_REDUCER } = useSelector((e) => e);

  const [slices, setSlices] = useState({ a: 0, b: 10 });
  const [word, setWord] = useState("");

  console.log(getTeams_REDUCER);

  const data = getTeams_REDUCER.response ? (
    getTeams_REDUCER.response
      .slice(slices.a, slices.b)
      .filter((e) => e.name.toLowerCase().includes(word.toLowerCase()))
      .map((e) => <TeamCard key={e.logo} obj={e} />)
  ) : (
    <div className="a-page-teams">
      <CharginSkeleton />
      <CharginSkeleton />
    </div>
  );

  return (
    <div className="a-page-teams">
      <div className="head-teams">
        <h2>Detalles Equipo</h2>
        <button
          onClick={() => {
            dispatch(changeContent("seasons"));
          }}
        >
          Regresar
        </button>
      </div>
      <div className="content-teams">{data}</div>
      <div className="bottom-bar">
        <input
          placeholder="buscar equipo"
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default TeamsSection;
