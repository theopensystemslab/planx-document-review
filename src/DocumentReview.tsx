import * as React from "react";
import Map from "./Map";
import DataTable from "./DataTable";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function DocumentReview(props: any) {
  return (
    <div>
      <p>Payload:</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}
