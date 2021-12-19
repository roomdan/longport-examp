import axios from "axios";
import types from "../type/types.js";

const url = "https://v3.football.api-sports.io/countries";
const key = "5bcd9467bcc713c610c34da3105133ac";

export const getData_action = () => (payload) => {
  const getData = async () => {
    const get = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": key,
      },
    });
    console.log(get);
    payload(countries_action(get));
  };

  getData();
};

const countries_action = (payload) => ({
  type: types.countries,
  payload,
});
