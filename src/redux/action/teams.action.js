import axios from "axios";
import types from "../type/types";

export const getTeams_action = (param, paramB) => (payload) => {
  let url = "https://v3.football.api-sports.io/teams".concat(
    "?league=",
    param ? param : "",
    "&",
    "season=",
    paramB ? paramB : ""
  );
  const key = "5bcd9467bcc713c610c34da3105133ac";

  const get = async () => {
    const data = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": key,
      },
    });
    payload(teams_action(data.data));
  };
  get();
};
const teams_action = (payload) => ({
  type: types.teams,
  payload,
});
