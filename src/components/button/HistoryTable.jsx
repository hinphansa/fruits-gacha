import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const HistoryTable = React.memo(({ history }) => {
  return (
    <StyledTableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Rarity</TableCell>
            <TableCell align="center">Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history &&
            history.map((row, index) => (
              <TableRow key={`fruit-${index}`}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="center">{row.rarity}</TableCell>
                <TableCell align="center">
                  {Intl.DateTimeFormat("en-GB", {
                    dateStyle: "short",
                    timeStyle: "long",
                  }).format(row.timestamp)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
});

const StyledTableContainer = styled(TableContainer)`
  max-width: 500px;
  max-height: 500px;

  th {
    :nth-child(1) {
      min-width: 80px;
    }
    :nth-child(2) {
      min-width: 40px;
    }
    :nth-child(3) {
      min-width: 250px;
    }
  }
`;

export { HistoryTable };
