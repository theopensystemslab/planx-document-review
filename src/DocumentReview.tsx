/* eslint @typescript-eslint/no-explicit-any: "off" */
import * as React from "react";
import Map from "./Map";
import Answer from "./Answer";
import Grid from "@mui/material/Grid";
import { Global, css } from "@emotion/react";

export default function DocumentReview(props: {
  geojson: object;
  csv: object;
  files: object;
}) {
  return (
    <>
      <Styles />
      <Grid
        container
        spacing={2}
        direction="row-reverse"
        sx={{
          justifyContent: "center",
          minWidth: "650px",
          maxWidth: "1400px",
          padding: "0 1em",
          margin: "auto",
        }}
      >
        <Grid item xs={12}>
          <h1>Review Document</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <h2>Boundary</h2>
          <MapView geojson={props.geojson} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ paddingTop: 0 }}>
          <h2>Data</h2>
          <AnswerView csv={props.csv} />
        </Grid>
        <Grid item xs={12}>
          <h2>Files</h2>
          <FileView files={props.files} />
        </Grid>
      </Grid>
    </>
  );
}

function Styles() {
  return (
    <Global
      styles={css`
        body {
          font-family: "Inter", arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-size: 18px;
          font-size: 1.125rem;
        }
        h1 {
          font-size: 1.2em;
        }
      `}
    />
  );
}

function MapView(props: { geojson: object }) {
  return props.geojson ? (
    <Map boundary={props.geojson} />
  ) : (
    <p>Boundary map not available</p>
  );
}

function AnswerView(props: { csv: { question: string; responses: any[] }[] }) {
  return checkAnswerProps(props) ? (
    props.csv.map((entry, index) => (
      <Answer key={index} title={entry.question} details={entry.responses} />
    ))
  ) : (
    <p>Data not available</p>
  );
}

function checkAnswerProps(props: {
  csv: { question: string; responses: any[] }[];
}): boolean {
  return (
    props.csv &&
    props.csv.every((entry) => {
      return (
        Object.hasOwn(entry, "question") && Object.hasOwn(entry, "responses")
      );
    })
  );
}

function FileView(props: {
  files: { filename: string; tags: string[] }[];
}): React.Component {
  const { files } = props;
  return checkFileProps(files) ? (
    files.map((f) => (
      <Answer key={f.filename} title={f.tags.join(" ")} details={f.filename} />
    ))
  ) : (
    <p>No attached files</p>
  );
}

function checkFileProps(
  files: { filename: string; tags: string[] }[]
): boolean {
  return (
    !!files.length &&
    files.every((f) => {
      return Object.hasOwn(f, "filename") && Object.hasOwn(f, "tags");
    })
  );
}
