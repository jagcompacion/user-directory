import { useEffect, useState, useMemo } from "react";
import { Grid, TextField } from "@mui/material";
import { Search } from "lucide-react";
import axios from "axios";
import UserCard from "./UserCard";
import ErrorCard from "./ErrorCard";
import User from "../types/user";

const UserDirectory = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState<string | null>(null);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (err) {
      setError("Failed to fetch users");
      console.error(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, users]);

  if (error) {
    return <ErrorCard error={error} />;
  }

  return (
    <div>
      <TextField
        fullWidth
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <Search size={20} style={{ marginRight: 8, color: "#9e9e9e" }} />
          ),
        }}
        sx={{ mb: 3 }}
      />
      <Grid container spacing={3}>
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Grid>
    </div>
  );
};

export default UserDirectory;
