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
  // Progress state
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => (old >= 100 ? 0 : old + 10));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  // Table data
  const characters = [
    { name: "Harry Potter", house: "Gryffindor", role: "Student" },
    { name: "Hermione Granger", house: "Gryffindor", role: "Student" },
    { name: "Ron Weasley", house: "Gryffindor", role: "Student" },
  ];

  return (
    <Box>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Harry Potter Fan Site
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Progress */}
      <Box sx={{ m: 2 }}>
        <Typography>Loading spells...</Typography>
        <LinearProgress variant="determinate" value={progress} />
      </Box>

      {/* Card */}
      <Card sx={{ maxWidth: 300, m: 2 }}>
        <CardMedia
          component="img"
          height="160"
          image="https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"
          alt="Harry Potter"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Harry Potter
          </Typography>
          <Typography variant="body2">
            The Boy Who Lived. Famous wizard, member of Gryffindor house.
          </Typography>
        </CardContent>
      </Card>

      {/* Table */}
      <TableContainer component={Paper} sx={{ maxWidth: 500, m: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>House</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {characters.map((c) => (
              <TableRow key={c.name}>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.house}</TableCell>
                <TableCell>{c.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
