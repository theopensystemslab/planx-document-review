import { expect, test } from "vitest";
import { checkFileProps, checkAnswerProps } from "./DocumentReview";

test("checkFileProps", () => {
  expect(
    checkFileProps([
      {
        filename: "abc.jpg",
        tags: ["one", "two"],
      },
      {
        filename: "abc.jpg",
        tags: ["one", "two"],
      },
    ])
  ).toBe(true);

  expect(
    checkFileProps([
      {
        filename: "abc.jpg",
        tags: [],
      },
    ])
  ).toBe(true);

  expect(
    checkFileProps([
      {
        filename: "abc.jpg",
      },
    ])
  ).toBe(false);
});

test("checkAnswerProps", () => {
  expect(
    checkAnswerProps([
      {
        question: "is it?",
        responses: "yes",
      },
    ])
  ).toBe(true);

  expect(
    checkAnswerProps([
      {
        question: "really?",
      },
    ])
  ).toBe(false);
});
