import data from "../mock_data/CUSTOMDRESS_DATA.json";

import { BasicTable } from "../UI/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import { DatePicker } from "../UI/Picker";

const rows = [
  "고객명",
  "드레스",
  "사이즈",
  "제작 완료일",
  "고객 픽업일",
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
          <TableCell align="left">{row.dress}</TableCell>
          <TableCell align="left">{row.size}</TableCell>
          <TableCell align="left">
            <DatePicker />
          </TableCell>
          <TableCell align="left">
            <DatePicker />
          </TableCell>
          <TableCell align="left">{row.note}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

const CustomDress = () => {
  return <BasicTable rows={rows} data={data} tableBody={body(data)} />;
};

export default CustomDress;
