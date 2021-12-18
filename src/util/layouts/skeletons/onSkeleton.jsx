import { Skeleton } from "@mui/material";

const ChargingSkeleton = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ margin: "0.5rem" }}>
        <Skeleton variant="rectangular" width={250} height={118} />
        <Skeleton /> <Skeleton />
      </div>
      <div style={{ margin: "0.5rem" }}>
        <Skeleton variant="rectangular" width={250} height={118} />
        <Skeleton /> <Skeleton />
      </div>
      <div style={{ margin: "0.5rem" }}>
        <Skeleton variant="rectangular" width={250} height={118} />
        <Skeleton /> <Skeleton />
      </div>
      <div style={{ margin: "0.5rem" }}>
        <Skeleton variant="rectangular" width={250} height={118} />
        <Skeleton /> <Skeleton />
      </div>
      <div style={{ margin: "0.5rem" }}>
        <Skeleton variant="rectangular" width={250} height={118} />
        <Skeleton /> <Skeleton />
      </div>
      <div style={{ margin: "0.5rem" }}>
        <Skeleton variant="rectangular" width={250} height={118} />
        <Skeleton /> <Skeleton />
      </div>
    </div>
  );
};

export default ChargingSkeleton;
