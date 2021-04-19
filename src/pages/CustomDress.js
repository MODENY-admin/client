import data from "../mock_data/CUSTOMDRESS_DATA.json";
import { rows } from "../common";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { CustomTable } from "../UI/CustomTable";
import { DatePicker } from "../UI/Picker";

const getCells = (row) => {
  return (
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
  );
};

const CustomDress = () => {
  return (
    <CustomTable rows={rows.customDress} data={data} getCells={getCells} />
  );
};

export default CustomDress;
