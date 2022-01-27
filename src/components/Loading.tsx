import { Box, CircularProgress } from "@mui/material";

type Props = {};

const Loading = (props: Props) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
