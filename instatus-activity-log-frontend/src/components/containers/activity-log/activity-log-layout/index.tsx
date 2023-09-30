import { RectangularSkeleton } from "@/components/skeleton/rectangular-skeleton";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useActivityLogContext } from "@/contexts/activity-log/activity-log.context";
import { useActivityLogHooks } from "@/hooks/activity-log.hooks";
import { ActivityData } from "../activity-data";
import debounce from "lodash.debounce";
import { useEffect, useMemo, useState } from "react";

export const ActivityLogLayout = () => {
  const { fetchResults } = useActivityLogHooks();
  const { data, isLoading, page, setPage } = useActivityLogContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 500);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  }, [debouncedResults]);

  useEffect(() => {
    setPage(1);
    fetchResults(1, searchTerm);
  }, [searchTerm]);

  const renderSearchBox = () => (
    <TextField
      inputProps={{
        style: {
          padding: 10,
        },
      }}
      onChange={debouncedResults}
      sx={{ borderColor: "#E0E0DF", mb: 2 }}
      fullWidth
      placeholder="Search name, email or action..."
    />
  );

  const renderTitleTypography = (text: string, size = 4) => (
    <Grid item lg={size} xs={size}>
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
      {[...Array(3)].map((_, index) => (
        <RectangularSkeleton key={index} />
      ))}
    </Grid>
  );

  const renderTitles = () => (
    <Grid container spacing={2}>
      {renderTitleTypography("Actor")}
      {renderTitleTypography("Action")}
      {renderTitleTypography("Date", 3)}
    </Grid>
  );

  const renderLoadMoreButton = () => (
    <Box bgcolor="#F5F5F5" p={2} justifyContent="center" display="flex">
      <Button
        className="text-[#475569] font-semibold"
        onClick={() => fetchResults(page, searchTerm)}
      >
        Load More
      </Button>
    </Box>
  );

  const renderLoadingState = () => (
    <>
      {[...Array(5)].map((_, index) => (
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
          {!isLoading && (!data || data.length === 0) && (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              minHeight={"80px"}
            >
              <Box textAlign={"center"}>
                <Typography fontSize={15} mb={3}>
                  Start by creating a new event
                </Typography>
                <Typography fontSize={14}>It looks so lonely here</Typography>
              </Box>
            </Box>
          )}
          {data?.length > 0 && <ActivityData activityData={data} />}
          {isLoading && renderLoadingState()}
        </Box>
        {renderLoadMoreButton()}
      </Box>
    </Box>
  );
};
