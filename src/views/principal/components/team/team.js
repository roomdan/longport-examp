import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { changeContent } from "../../../../redux/action/content.action";
import "./team.style.scss";
import { getStatistics_action } from "../../../../redux/action/statistics.action";
import { paramsStatistics_action } from "../../../../redux/action/params.statistics.action";

export default function TeamCard({ obj, id }) {
  const dispatch = useDispatch();
  const { paramsStatisitics_REDUCER } = useSelector((e) => e);

  React.useEffect(() => {
    dispatch(
      paramsStatistics_action({ ...paramsStatisitics_REDUCER, team: id })
    );
  }, []);

  const viewStatistics = () => {
    dispatch(
      getStatistics_action(
        paramsStatisitics_REDUCER.legague,
        paramsStatisitics_REDUCER.season,
        paramsStatisitics_REDUCER.team
      )
    );
    dispatch(changeContent("statistics"));
  };

  return (
    <Card
      sx={{
        maxWidth: 220,
        minWidth: 220,
        margin: "0.8rem",
        maxHeight: 300,
        background: "#eeeeee",
        padding: "0.5rem",
      }}
    >
      <CardMedia component="img" height="150" image={obj.logo} alt={obj.name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {obj.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {obj.country}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <button className="view-statistics" onClick={viewStatistics}>
          Estadisticas
        </button>
      </CardActions>
    </Card>
  );
}
