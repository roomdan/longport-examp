import axios from "axios";
import types from "../type/types";

export const getLeages_action = (param) => (payload) => {
  let url = "https://v3.football.api-sports.io/leagues".concat(
    "?country=",
    param ? param : ""
  );
  const key = "5bcd9467bcc713c610c34da3105133ac  ";

  const get = async () => {
    const data = await axios.get(
      param ? url : "https://v3.football.api-sports.io/leagues",
      {
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": key,
        },
      }
    );
    payload(leages_action(data.data));
  };
  get();
  //   payload(leages_action(get()));
};
const leages_action = (payload) => ({
  type: types.leages,
  payload,
});
