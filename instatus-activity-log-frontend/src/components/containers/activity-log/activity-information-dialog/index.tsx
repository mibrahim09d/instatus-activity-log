import { RectangularSkeleton } from "@/components/skeleton/rectangular-skeleton";
import { ActivityLogDataType } from "@/types/activity-log-data.type";
import { formatShortDate } from "@/utils/utils";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export interface ActivityInformationDialogProps {
  activity: ActivityLogDataType;
}
export const ActivityInformationDialog = ({
  activity,
}: ActivityInformationDialogProps) => {
  const renderTitle = (title: string) => (
    <Grid item lg={12}>
      <Typography fontSize={16} fontWeight={500} color="#929292">
        {title}
      </Typography>
    </Grid>
  );
  const renderItem = (key: string, value: string) => (
    <>
      <Grid item lg={4} xs={4}>
        <Typography fontSize={14} fontWeight={400} color="#929292">
          {key}
        </Typography>
      </Grid>
      <Grid item lg={8} xs={8}>
        <Typography fontSize={14} fontWeight={400}>
          {value}
        </Typography>
      </Grid>
    </>
  );
  const renderActor = () => (
    <Grid lg={4} xs={12}>
      <Grid container spacing={2}>
        {renderTitle("Actor")}
        {renderItem("Name", activity.actor_name)}
        {renderItem("Email", activity.target_name)}
        {renderItem("ID", activity.target_id)}
      </Grid>
    </Grid>
  );
  const renderAction = () => (
    <Grid lg={4} xs={12}>
      <Grid container spacing={2}>
        {renderTitle("Action")}
        {renderItem("Name", activity.action?.name)}
        {renderItem("Object", activity.action?.object)}
        {renderItem("ID", activity?.action?.id)}
      </Grid>
    </Grid>
  );
  const renderDate = () => (
    <Grid lg={4} xs={12}>
      <Grid container spacing={2}>
        {renderTitle("Date")}
        {renderItem("Readable", formatShortDate(activity.occurred_at))}
      </Grid>
    </Grid>
  );
  const renderMetadata = () => (
    <Grid lg={4} xs={12} mt={5}>
      <Grid container spacing={2}>
        {renderTitle("Metadata")}
        <RectangularSkeleton lg={12} xs={12} maxWidth="50%" />
        <RectangularSkeleton lg={12} xs={12} maxWidth="50%" />
      </Grid>
    </Grid>
  );
  const renderTarget = () => (
    <Grid lg={4} xs={12} mt={5}>
      <Grid container spacing={2}>
        {renderTitle("Target")}
        <RectangularSkeleton lg={12} xs={12} maxWidth="50%" />
        <RectangularSkeleton lg={12} xs={12} maxWidth="50%" />
      </Grid>
    </Grid>
  );
  return (
    <Box
      sx={{
        width: "110%",
        margin: "0 0 0 -5%",
        boxShadow: "0px 2px 5px 0px #0000000A",
        backgroundColor: "#FFFFFF",
        border: "1px solid #DFDFDF",
        borderRadius: "12px",
      }}
      p={5}
    >
      <Grid container spacing={2}>
        {renderActor()}
        {renderAction()}
        {renderDate()}
        {renderMetadata()}
        {renderTarget()}
      </Grid>
    </Box>
  );
};
