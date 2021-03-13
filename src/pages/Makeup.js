import data from "../mock_data/MAKEUP_DATA.json";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { CustomTable } from "../UI/CustomTable";
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

const getCells = (row) => {
  return (
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
  );
};

export const Makeup = () => {
  return <CustomTable rows={rows} data={data} getCells={getCells} />;
};

export default Makeup;
