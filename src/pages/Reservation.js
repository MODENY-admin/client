import data from "../mock_data/RESERVATION_DATA.json";
import { rows } from "../common"

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { CustomTable } from "../UI/CustomTable";
import { DatePicker } from "../UI/Picker";
import { SimpleSelect } from "../UI/Select";

const getCells = (row) => {
  return (
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
      <TableCell align="left">
        <SimpleSelect />
      </TableCell>
      <TableCell align="left">
        <SimpleSelect />
      </TableCell>
      <TableCell align="left">{row.note}</TableCell>
    </TableRow>
  );
};

const Reservation = () => {
  return <CustomTable rows={rows.reservation} data={data} getCells={getCells} />;
};

export default Reservation;
