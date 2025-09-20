import { useState } from "react";
import { Box, TextField, Button, MenuItem, Stack } from "@mui/material";
import { useGames } from "../contexts/GameContext";

const ORDER_OPTS = [
  { v: "-rating", label: "Top rated" },
  { v: "-metacritic", label: "Metacritic" },
  { v: "-released", label: "Recently released" },
  { v: "name", label: "Name (A–Z)" },
];

export default function SearchBar() {
  const { state, dispatch, searchByText } = useGames();
  const [local, setLocal] = useState(state.searchText);

  return (
    <Box
      component="form"
      onSubmit={(e) => { e.preventDefault(); dispatch({ type: "SET_SEARCH_TEXT", payload: local }); searchByText(); }}
      sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}
    >
      <TextField
        label="Search by name"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        sx={{ minWidth: 280, flex: 1 }}
      />
      <TextField
        select
        label="Ordering"
        value={state.ordering}
        onChange={(e) => dispatch({ type: "SET_ORDERING", payload: e.target.value })}
        sx={{ minWidth: 220 }}
      >
        {ORDER_OPTS.map(o => <MenuItem key={o.v} value={o.v}>{o.label}</MenuItem>)}
      </TextField>
      <Button type="submit" variant="contained">Search</Button>
    </Box>
  );
}
