import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, local, visitante) {
  return { name, local, visitante };
}

export default function StatisticsTable({ data }) {
  const rows = [
    createData(
      "Goles",
      data.response.goals.for.total.home,
      data.response.goals.for.total.away
    ),
    createData(
      "Jugados",
      data.response.fixtures.played.home,
      data.response.fixtures.played.away
    ),
    createData(
      "Ganados",
      data.response.fixtures.wins.home,
      data.response.fixtures.wins.away
    ),
    createData(
      "Perdidos",
      data.response.fixtures.loses.home,
      data.response.fixtures.loses.away
    ),
  ];
  return data ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Estadistica</TableCell>
            <TableCell align="right">Local</TableCell>
            <TableCell align="right">Visitante</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell sx={{ fontWeight: "600" }} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.local}</TableCell>
              <TableCell align="right">{row.visitante}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    ""
  );
}
