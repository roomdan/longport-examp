import { useDispatch } from "react-redux";
import { getLeages_action } from "../../../../redux/action/leages.action";
import "./contry.card.style.scss";

export default function CountryCard({ flag, title }) {
  const dispatch = useDispatch();

  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => {
        dispatch(getLeages_action(title));
      }}
      className="card-country"
    >
      <img className="flag" src={flag} alt={title} />
      <div className="card-title">{title}</div>
    </div>
  );
}
