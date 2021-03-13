import data from '../mock_data/RESERVATION_DATA.json'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

const Reservation = () => {
  console.log('data', data)
  
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell align="left">방문일</TableCell>
            <TableCell align="left">이름</TableCell>
            <TableCell align="left">연락처</TableCell>
            <TableCell align="left">유형</TableCell>
            <TableCell align="left">드레스</TableCell>
            <TableCell align="left">사이즈</TableCell>
            <TableCell align="left">행사일</TableCell>
            <TableCell align="left">픽업일</TableCell>
            <TableCell align="left">반납일</TableCell>
            <TableCell align="left">결제</TableCell>
            <TableCell align="left">보증금</TableCell>
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
  )
}

export default Reservation;