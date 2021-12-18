//views

import { useSelector } from "react-redux";
import Leages from "./sub-views/league/leage";
import SeasonsList from "./sub-views/seasons/seasons";
import TeamsSection from "./sub-views/teams/teams";

const Content_Controller = () => {
  const { ControlleView_REDUCER } = useSelector((e) => e);

  const data = (active) => {
    switch (active) {
      case "teams":
        return <TeamsSection />;
      case "seasons":
        return <SeasonsList />;
      case "statistics":
        return <div>equipo</div>;
      default:
        return <Leages />;
    }
  };

  return <>{data(ControlleView_REDUCER)}</>;
};

export default Content_Controller;
