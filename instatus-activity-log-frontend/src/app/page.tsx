import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems={"center"}
    >
      <Box textAlign={"center"}>
        <Typography fontSize={14} mb={3}>
          Instatus Activity Log task
        </Typography>
        <Link href={"/activity-log"}>
          Click here to go to the activity page
        </Link>
      </Box>
    </Box>
  );
}
