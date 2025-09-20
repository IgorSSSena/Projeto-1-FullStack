import { Grid, Typography } from "@mui/material";
import GameCard from "./GameCard";
import { useGames } from "../contexts/GameContext";

export default function GameList() {
  const { state } = useGames();
  if (!state.loading && !state.error && state.results.length === 0) {
    return <Typography>Use the buttons above to search.</Typography>;
  }
  return (
    <Grid container spacing={2}>
      {state.results.map((g) => (
        <Grid key={g.id} item xs={12} sm={6} md={4} lg={3}>
          <GameCard game={g} />
        </Grid>
      ))}
    </Grid>
  );
}
