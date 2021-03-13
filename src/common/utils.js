import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export const getTable = (rows, data) => {
  const cells = data
    .map((obj) => Object.keys(obj))
    .reduce((acc, cur) => {
      // handle error
      return cur;
    })
    .filter((cell) => cell !== "id");

  const getHead = (rows) => {
    return (
      <TableHead>
        <TableRow>
          <TableCell>번호</TableCell>
          {rows.map((row, index) => (
            <TableCell key={index} align="left">
              {row}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const getBody = (data) => {
    return (
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            {cells.map((cell, index) => (
              <TableCell key={index} align="left">
                {row[cell]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    );
  };
  return (
    <TableContainer>
      <Table aria-label="simple table">
        {getHead(rows)}
        {getBody(data)}
      </Table>
    </TableContainer>
  );
};
