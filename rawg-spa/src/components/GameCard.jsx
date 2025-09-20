import { Card, CardContent, CardMedia, Typography, Chip, Stack } from "@mui/material";
export default function GameCard({ game }) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {game.background_image && (
        <CardMedia component="img" height="160" image={game.background_image} alt={game.name} loading="lazy" />
      )}
      <CardContent>
        <Typography variant="h6" noWrap gutterBottom>{game.name}</Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {game.genres?.slice(0,3).map(g => <Chip key={g.id} label={g.name} size="small" />)}
        </Stack>
        {game.released && <Typography variant="body2" sx={{ mt: 1 }}>Released: {game.released}</Typography>}
        {typeof game.rating === "number" && <Typography variant="body2">Rating: {game.rating}</Typography>}
      </CardContent>
    </Card>
  );
}
