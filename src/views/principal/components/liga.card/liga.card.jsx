import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { changeContent } from "../../../../redux/action/content.action";

import "./liga.card.style.scss";
import { setSeason_action } from "../../../../redux/action/seasons.action";

export default function LeageCard({ obj }) {
  const dispatch = useDispatch();

  const teamsGo = () => {
    dispatch(
      setSeason_action({
        seasons: obj.seasons,
        idLegae: obj.id,
        leageName: obj.name,
        country: obj.country.name,
      })
    );
    dispatch(changeContent("seasons"));
  };

  return (
    <Card
      sx={{ maxWidth: 220, minWidth: 220, margin: "0.8rem", maxHeight: 300 }}
    >
      <CardMedia component="img" height="150" image={obj.logo} alt={obj.name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {obj.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {obj.country.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <button className="view-teams" onClick={teamsGo}>
          Ver Temporadas
        </button>
      </CardActions>
    </Card>
  );
}
