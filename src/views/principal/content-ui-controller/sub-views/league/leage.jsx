import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLeages_action } from "../../../../../redux/action/leages.action";
import ChargingSkeleton from "../../../../../util/layouts/skeletons/onSkeleton";
import LeageCard from "../../../components/liga.card/liga.card";
import "./leage.style.scss";

const Leages = () => {
  const dispatch = useDispatch();
  const [slices, setSlices] = useState({ from: 0, to: 30 });

  const ViewMoreResults = () => {
    setSlices({ from: 0, to: slices.to + 9 });
  };

  const { getLeages_REDUCER } = useSelector((e) => e);

  useEffect(() => {
    dispatch(getLeages_action(""));
  }, []);

  const data = getLeages_REDUCER ? (
    getLeages_REDUCER.response
      .slice(slices.from, slices.to)
      .map((leage) => <LeageCard key={leage.id} obj={leage} />)
  ) : (
    <div className="page-leages">
      <ChargingSkeleton />
      <ChargingSkeleton />
      <ChargingSkeleton />
      <ChargingSkeleton />
      <ChargingSkeleton />
      <ChargingSkeleton />
    </div>
  );

  return (
    <div>
      <div className="page-leages">{data}</div>
      <div className="view-results">
        <button onClick={ViewMoreResults}>Mas Resultados</button>
      </div>
    </div>
  );
};

export default Leages;
