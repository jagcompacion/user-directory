import { CircularProgress, Box } from "@mui/material";

const Loading = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress />
    </Box>
  );
};

export default Loading;
