import { useState } from "react";
import { Grid, Pagination, Box } from "@mui/material";
import UserCard from "./UserCard";
import ErrorCard from "./ErrorCard";
import Loading from "./Loading";
import Search from "./Search";
import useUsers from "../hooks/useUsers";

const UserDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const { users, totalPages, loading, error } = useUsers(
    searchQuery,
    usersPerPage,
    currentPage
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  if (error) {
    return <ErrorCard error={error} />;
  }

  return (
    <div>
      <Search
        searchQuery={searchQuery}
        onSearchQueryChange={(value) => setSearchQuery(value)}
      />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Grid container spacing={3}>
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </Grid>
          <Box display="flex" justifyContent="center" mt={3}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </div>
      )}
    </div>
  );
};

export default UserDirectory;
