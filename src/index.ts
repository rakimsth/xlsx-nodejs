import express, { Express, Request, Response } from "express";
import streamData from "./services/xlsx";

const app: Express = express();
const port = 3000;

app.get("/", async (req: Request, res: Response) => {
  const filters = req.query;
  // Do DB Operations using filters and get the data in the following structure
  const data = [
    {
      sheetName: "Sheet A",
      data: [
        { id: "1", name: "Rumsan" },
        { id: "2", name: "Association" },
      ],
    },
    {
      sheetName: "Sheet B",
      data: [
        { id: "1", name: "Raktim" },
        { id: "2", name: "Shrestha" },
      ],
    },
  ];
  const stream = streamData(data);
  res.setHeader("Content-Disposition", 'attachment; filename="Wires.xlsx"');
  res.status(200).end(stream);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
