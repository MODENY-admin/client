import data from "../mock_data/RESERVATION_DATA.json";

import { BasicTable } from "../UI/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import { DatePicker } from "../UI/Picker";

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
  "특이사항",
];

const body = (data) => {
  return (
    <TableBody>
      {data.map((row) => (
        <TableRow key={row.id}>
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell align="left">
            <DatePicker />
          </TableCell>
          <TableCell align="left">{row.customer}</TableCell>
          <TableCell align="left">{row.phone}</TableCell>
          <TableCell align="left">{row.type}</TableCell>
          <TableCell align="left">{row.dressName}</TableCell>
          <TableCell align="left">{row.size}</TableCell>
          <TableCell align="left">
            <DatePicker />
          </TableCell>
          <TableCell align="left">
            <DatePicker />
          </TableCell>
          <TableCell align="left">
            <DatePicker />
          </TableCell>
          <TableCell align="left">{row.payment}</TableCell>
          <TableCell align="left">{row.deposit}</TableCell>
          <TableCell align="left">{row.note}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

const Reservation = () => {
  return <BasicTable rows={rows} data={data} tableBody={body(data)} />;
};

export default Reservation;
