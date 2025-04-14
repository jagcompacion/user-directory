import { Box, Card, Typography } from "@mui/material";
const Error = ({ error }: { error: string }) => {
  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", padding: 3 }}>
      <Card sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {error}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Please try again later or contact support if the problem persists.
        </Typography>
      </Card>
    </Box>
  );
};

export default Error;
