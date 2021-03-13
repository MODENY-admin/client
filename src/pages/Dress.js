import data from "../mock_data/DRESS_DATA.json";
import { getTable } from "../common/utils";

const rows = [
  "드레스",
  "등록일",
  "원가",
  "마진",
  "보유 수량",
  "오픈 수량",
  "특이사항",
];

const Dress = () => {
  return getTable(rows, data);
};

export default Dress;
