import { RectangularSkeleton } from "@/components/skeleton/rectangular-skeleton";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useActivityLogContext } from "@/contexts/activity-log/activity-log.context";
import { useActivityLogHooks } from "@/hooks/activity-log.hooks";
import { ActivityData } from "../activity-data";

export const ActivityLogLayout = () => {
  const { loadMoreData } = useActivityLogHooks();

  const { data, isLoading } = useActivityLogContext();

  const renderSearchBox = () => (
    <TextField
      inputProps={{
        style: {
          padding: 10,
        },
      }}
      sx={{ borderColor: "#E0E0DF", mb: 2 }}
      fullWidth
      placeholder="Search name, email or action..."
    />
  );

  const renderTitleTypography = (text: string) => (
    <Grid item lg={4} xs={4}>
      <Typography
        variant="h5"
        textTransform="uppercase"
        fontWeight={600}
        fontSize="14px"
        color="#616161"
        lineHeight="16px"
      >
        {text}
      </Typography>
    </Grid>
  );

  const renderInternalTable = () => (
    <Grid container spacing={2}>
      <Grid item lg={4} xs={4}>
        <RectangularSkeleton />
      </Grid>
      <Grid item lg={4} xs={4}>
        <RectangularSkeleton />
      </Grid>
      <Grid item lg={4} xs={4}>
        <RectangularSkeleton />
      </Grid>
    </Grid>
  );

  const renderTitles = () => (
    <Grid container spacing={2}>
      {renderTitleTypography("Actor")}
      {renderTitleTypography("Action")}
      {renderTitleTypography("Date")}
    </Grid>
  );

  const renderLoadMoreButton = () => (
    <Box bgcolor="#F5F5F5" p={2} justifyContent="center" display="flex">
      <Button className="text-[#475569] font-semibold" onClick={loadMoreData}>
        Load More
      </Button>
    </Box>
  );

  const renderLoadingState = () => (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <Box key={index}>{renderInternalTable()}</Box>
      ))}
    </>
  );

  return (
    <Box
      borderRadius="10px"
      border="1px solid #F0F0F0"
      className="overflow-visible"
    >
      <Box className="relative">
        <Box bgcolor="#F5F5F5" p={2}>
          {renderSearchBox()}
          {renderTitles()}
        </Box>
        <Box p={2}>
          {data?.length > 0 && <ActivityData activityData={data} />}
          {isLoading && renderLoadingState()}
        </Box>
        {renderLoadMoreButton()}
      </Box>
    </Box>
  );
};
