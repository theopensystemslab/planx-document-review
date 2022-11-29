import { expect, test } from "vitest";
import { renderToString } from "react-dom/server";
import DocumentReview from "../dist/DocumentReview";

import example from "./example.json";

test("renderToString (this tests build output so requires a fresh build)", () => {
  const input = {
    csv: [
      {
        question: "is it?",
        responses: "yes",
      },
    ],
    geojson: {
      type: "Feature",
    },
  };
  const html = renderToString(
    <DocumentReview csv={input.csv} geojson={input.geojson} />
  );
  expect(html).toEqual(getHTMLSnapshot());
});

function getHTMLSnapshot(): string {
  return `<div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-direction-xs-row-reverse css-1qhahch-MuiGrid-root"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-1idn90j-MuiGrid-root"><h1>Review Document</h1></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 css-1fyyp8j-MuiGrid-root"><h2>Boundary</h2><my-map showNorthArrow="true" showScale="true" hideResetControl="true" geojsonData="{&quot;type&quot;:&quot;Feature&quot;}"></my-map> </div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 css-1mz7wgq-MuiGrid-root"><h2>Data</h2><div class="css-ey7nea"><p class="css-1fylu8d">Is It</p><span>yes</span></div> </div></div>`
}
