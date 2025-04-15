import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import User from "../types/user";

const useUsers = (
  searchQuery: string,
  usersPerPage: number,
  currentPage: number
) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, users]);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * usersPerPage;
    return filteredUsers.slice(startIndex, startIndex + usersPerPage);
  }, [currentPage, filteredUsers, usersPerPage]);

  return { users: paginatedUsers, totalPages, loading, error };
};

export default useUsers;
