import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box
} from "@mui/material";

export default function App() {
  // simple progress
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => (old >= 100 ? 0 : old + 20));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const characters = [
    { name: "SpongeBob", role: "Cook", place: "Pineapple House" },
    { name: "Patrick", role: "Best Friend", place: "Rock" },
    { name: "Squidward", role: "Cashier", place: "Easter Island Head" },
  ];

  return (
    <Box>
      {/* AppBar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            SpongeBob Site
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Progress */}
      <Box sx={{ m: 2 }}>
        <Typography>Loading Krabby Patties...</Typography>
        <LinearProgress variant="determinate" value={progress} />
      </Box>

      {/* Card */}
      <Card sx={{ maxWidth: 300, m: 2 }}>
        <CardMedia
          component="img"
          height="140"
          image="./img/spongbob.webp"
          alt="SpongeBob"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            SpongeBob SquarePants
          </Typography>
          <Typography variant="body2">
            A happy sea sponge who works at the Krusty Krab.
          </Typography>
        </CardContent>
      </Card>

      {/* Table */}
      <TableContainer component={Paper} sx={{ maxWidth: 500, m: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Place</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {characters.map((c) => (
              <TableRow key={c.name}>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.role}</TableCell>
                <TableCell>{c.place}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

