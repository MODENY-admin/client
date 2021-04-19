import data from "../mock_data/DRESS_DATA.json";
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
      <TableCell align="left">{row.dressName}</TableCell>
      <TableCell align="left">
        <DatePicker />
      </TableCell>
      <TableCell align="left">{row.cost}</TableCell>
      <TableCell align="left">{row.margin}</TableCell>
      <TableCell align="left">{row.quantity}</TableCell>
      <TableCell align="left">{row.openQuantity}</TableCell>
      <TableCell align="left">{row.note}</TableCell>
    </TableRow>
  );
};

const Dress = () => {
  return <CustomTable rows={rows.dress} data={data} getCells={getCells} />;
};

export default Dress;
