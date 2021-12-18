import axios from "axios";
import types from "../type/types";

export const getStatistics_action = (league, season, teamId) => (payload) => {
  let url = "https://v3.football.api-sports.io/teams/statistics".concat(
    "?league=",
    league ? league : "",
    "&",
    "season=",
    season ? season : "",
    "&",
    "team=",
    teamId ? teamId : ""
  );
  const key = "5bcd9467bcc713c610c34da3105133ac";

  const get = async () => {
    const data = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": key,
      },
    });
    payload(statistics_action(data.data));
  };
  get();
};
const statistics_action = (payload) => ({
  type: types.statics,
  payload,
});
