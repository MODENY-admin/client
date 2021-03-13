import data from "../mock_data/RESERVATION_DATA.json";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Paper from '@material-ui/core/Paper';

const rows = [
  "방문일",
  "이름",
  "연락처",
  "유형",
  "드레스",
  "사이즈",
  "행사일",
  "픽업일",
  "반납일",
  "결제",
  "보증금",
];

const Reservation = () => {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            {rows.map((row) => (
              <TableCell align="left">{row}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.visitDate}</TableCell>
              <TableCell align="left">{row.customer}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left">{row.dressName}</TableCell>
              <TableCell align="left">{row.size}</TableCell>
              <TableCell align="left">{row.eventDate}</TableCell>
              <TableCell align="left">{row.pickupDate}</TableCell>
              <TableCell align="left">{row.returnDate}</TableCell>
              <TableCell align="left">{row.payment}</TableCell>
              <TableCell align="left">{row.deposit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Reservation;
