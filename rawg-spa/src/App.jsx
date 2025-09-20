import { Container, Paper, Typography, Divider } from "@mui/material";
import { GameProvider } from "./contexts/GameContext";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Loader from "./components/Loader";
import ErrorAlert from "./components/ErrorAlert";
import GameList from "./components/GameList";
import Pager from "./components/Pager";

function Content() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>RAWG Games Explorer</Typography>
        <SearchBar />
        <Filters />
        <Divider sx={{ my: 2 }} />
        <Loader />
        <ErrorAlert />
        <GameList />
        <Pager />
      </Paper>
    </Container>
  );
}

export default function App() {
  return (
    <GameProvider>
      <Content />
    </GameProvider>
  );
}
