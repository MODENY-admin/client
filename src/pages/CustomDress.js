import data from "../mock_data/CUSTOMDRESS_DATA.json";
import { getTable } from "../common/utils";

const rows = [
  "고객명",
  "드레스",
  "사이즈",
  "제작 완료일",
  "고객 픽업일",
  "특이사항",
];

const CustomDress = () => {
  return getTable(rows, data);
};

export default CustomDress;
