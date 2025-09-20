import { Stack, TextField, MenuItem, Button } from "@mui/material";
import { useGames } from "../contexts/GameContext";

export default function Filters() {
  const { state, dispatch, searchAll, searchByGenre, searchByPlatform } = useGames();

  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2 }}>
      <TextField
        select label="Genre" value={state.genreId}
        onChange={(e) => dispatch({ type: "SET_GENRE", payload: e.target.value })}
        sx={{ minWidth: 220 }}
      >
        <MenuItem value="">(Any)</MenuItem>
        {state.genres.map(g => <MenuItem key={g.id} value={String(g.id)}>{g.name}</MenuItem>)}
      </TextField>

      <TextField
        select label="Platform" value={state.platformId}
        onChange={(e) => dispatch({ type: "SET_PLATFORM", payload: e.target.value })}
        sx={{ minWidth: 220 }}
      >
        <MenuItem value="">(Any)</MenuItem>
        {state.platforms.map(p => <MenuItem key={p.id} value={String(p.id)}>{p.name}</MenuItem>)}
      </TextField>

      {/* The three required search types */}
      <Button onClick={searchAll} variant="outlined">All games</Button>
      <Button onClick={searchByGenre} variant="outlined">By genre</Button>
      <Button onClick={searchByPlatform} variant="outlined">By platform</Button>
    </Stack>
  );
}
