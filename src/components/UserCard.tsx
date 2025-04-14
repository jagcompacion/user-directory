import { Typography, Card, CardContent, Box, Chip } from "@mui/material";
import { Mail, Phone, LocateOffIcon as LocationOn } from "lucide-react";
import User from "../types/user";

type UserProps = {
  user: User;
};

const UserCard = ({ user }: UserProps) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" component="div">
            {user.name}
          </Typography>
          <Chip label={user.company.name} size="small" sx={{ mt: 0.5 }} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Mail size={16} style={{ marginRight: 8 }} />
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Phone size={16} style={{ marginRight: 8 }} />
          <Typography variant="body2" color="text.secondary">
            {user.phone}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LocationOn size={16} style={{ marginRight: 8 }} />
          <Typography variant="body2" color="text.secondary">
            {user.address.city}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
