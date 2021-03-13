import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export const BasicTable = ({ rows, data, tableBody }) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {rows.map((row, index) => (
              <TableCell key={index} aglin="left">
                {row}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {tableBody}
      </Table>
    </TableContainer>
  );
};
