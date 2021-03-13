import data from "../mock_data/VEIL_DATA.json";
import { getTable } from "../common/utils";

const rows = ["베일", "보유 수량", "오픈 수량", "특이사항"];

const Veil = () => {
  return getTable(rows, data);
};

export default Veil;
