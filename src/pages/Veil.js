import data from "../mock_data/VEIL_DATA.json";
import { rows } from "../common";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { CustomTable } from "../UI/CustomTable";

const getCells = (row) => {
  return (
    <TableRow key={row.id}>
      <TableCell component="th" scope="row">
        {row.id}
      </TableCell>
      <TableCell align="left">{row.veil}</TableCell>
      <TableCell align="left">{row.quantity}</TableCell>
      <TableCell align="left">{row.openQuantity}</TableCell>
      <TableCell align="left">{row.note}</TableCell>
    </TableRow>
  );
};

const Veil = () => {
  return <CustomTable rows={rows.veil} data={data} getCells={getCells} />;
};

export default Veil;
