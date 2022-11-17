import * as React from "react";
import Map from "./Map";
import DataTable from "./DataTable";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function DocumentReview(props: any) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2} alignItems="center" sx={{ padding: "1em" }}>
        <h1>Document Review ...</h1>
        <h2>Application id ...</h2>
        <Map />
        <br />
        <DataTable />
      </Stack>
    </Box>
  );
}
