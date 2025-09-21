import * as React from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Checkbox, TablePagination, Switch, FormControlLabel
} from "@mui/material";

const rows = [
  { name: "Donut", calories: 452, fat: 25, carbs: 51, protein: 4.9 },
  { name: "Eclair", calories: 262, fat: 16, carbs: 24, protein: 6 },
  { name: "Frozen yoghurt", calories: 159, fat: 6, carbs: 24, protein: 4 },
  { name: "Gingerbread", calories: 356, fat: 16, carbs: 49, protein: 3.9 },
  { name: "Honeycomb", calories: 408, fat: 3.2, carbs: 87, protein: 6.5 },
  { name: "Ice cream", calories: 207, fat: 9, carbs: 31, protein: 4.3 },
  { name: "KitKat", calories: 518, fat: 26, carbs: 65, protein: 7 },
];

export default function DessertTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [dense, setDense] = React.useState(false);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleDenseChange = (event) => setDense(event.target.checked);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table size={dense ? "small" : "medium"}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell>Calories</TableCell>
              <TableCell>Fat (g)</TableCell>
              <TableCell>Carbs (g)</TableCell>
              <TableCell>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.name}>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.fat}</TableCell>
                  <TableCell>{row.carbs}</TableCell>
                  <TableCell>{row.protein}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Dense Padding Toggle */}
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleDenseChange} />}
        label="Dense padding"
        sx={{ m: 2 }}
      />
    </Paper>
  );
}
