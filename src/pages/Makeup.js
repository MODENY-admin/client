import data from "../mock_data/MAKEUP_DATA.json";

import { BasicTable } from "../UI/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { DatePicker } from "../UI/Picker";
import { SimpleSelect } from "../UI/Select";

const rows = [
  "고객명",
  "촬영일",
  "행사일",
  "고객 입금",
  "헤움 입금",
  "마진",
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
          <TableCell align="left">{row.customer}</TableCell>
          <TableCell align="left">
            <DatePicker />
          </TableCell>
          <TableCell align="left">
            <DatePicker />
          </TableCell>
          <TableCell align="left">
            <SimpleSelect />
          </TableCell>
          <TableCell align="left">
            <SimpleSelect />
          </TableCell>
          <TableCell align="left">{row.margin}</TableCell>
          <TableCell align="left">{row.note}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export const Makeup = () => {
  return <BasicTable rows={rows} data={data} tableBody={body(data)} />;
};

export default Makeup;
