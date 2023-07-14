import * as XLSX from "xlsx";
import Stream from "stream";

type InputData = {
  sheetName: string;
  data: any[];
};

const streamData = (data: InputData[]): Stream => {
  const wb = XLSX.utils.book_new(); // create workbook
  data.map((d) => {
    const ws = XLSX.utils.json_to_sheet(d.data); // convert data to sheet
    XLSX.utils.book_append_sheet(wb, ws, d.sheetName); // add sheet to workbook
  });
  return XLSX.write(wb, { type: "buffer", bookType: "xlsx" }); // write workbook buffer
};

export default streamData;
