import data from "../mock_data/MAKEUP_DATA.json";
import { getTable } from "../common/utils";

const rows = [
  "고객명",
  "촬영일",
  "행사일",
  "고객 입금",
  "헤움 입금",
  "마진",
  "특이사항",
];

const Makeup = () => {
  return getTable(rows, data);
};

export default Makeup;
