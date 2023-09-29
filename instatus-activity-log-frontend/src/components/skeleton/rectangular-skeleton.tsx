import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

export const RectangularSkeleton = ({
  lg = 4,
  xs = 4,
  md = 4,
  maxWidth = "100%",
}) => {
  return (
    <Grid item lg={lg} xs={xs} md={md}>
      <Skeleton
        sx={{ maxWidth: maxWidth }}
        className="rounded-sm h-10"
      ></Skeleton>
    </Grid>
  );
};
