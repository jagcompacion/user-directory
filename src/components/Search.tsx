import { Search as SearchIcon } from "lucide-react";
import { TextField } from "@mui/material";
import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";

type SearchProps = {
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
};

const Search = ({ searchQuery, onSearchQueryChange }: SearchProps) => {
  const [text, setText] = useState(searchQuery);
  const [value] = useDebounce(text, 500);

  useEffect(() => {
    onSearchQueryChange(value);
  }, [value, onSearchQueryChange]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <TextField
      fullWidth
      placeholder="Search users..."
      value={text}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <SearchIcon size={20} style={{ marginRight: 8, color: "#9e9e9e" }} />
        ),
      }}
      sx={{ mb: 3 }}
    />
  );
};

export default Search;
