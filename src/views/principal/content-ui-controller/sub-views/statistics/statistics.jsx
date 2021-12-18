import StatisticsTable from "../../../components/statistics/statistics";
import "./statistics.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeContent } from "../../../../../redux/action/content.action";
import example from "./example.response.json";

const Statistics = () => {
  const dispatch = useDispatch();
  const { getStatistics_REDUCER } = useSelector((e) => e);

  const goBack = () => {
    dispatch(changeContent("teams"));
  };

  return (
    <div className="a-page-statistics">
      <div className="head-statistics">
        <h2>Reporte Estadistico</h2>
        <button onClick={goBack}>Regresar</button>
      </div>
      <div className="content-statistics">
        <StatisticsTable
          data={
            getStatistics_REDUCER.response ? getStatistics_REDUCER : example
          }
        />
      </div>
    </div>
  );
};

export default Statistics;
