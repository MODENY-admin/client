import data from "../mock_data/RESERVATION_DATA.json";
import { getTable } from "../common/utils";

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
  return getTable(rows, data);
};

export default Reservation;
