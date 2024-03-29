import type { QuestionAnswer } from "./DocumentReview";

export function checkAnswerProps(props: QuestionAnswer[]): boolean {
  return (
    props &&
    props.every((entry: object) => {
      return (
        Object.hasOwn(entry, "question") && Object.hasOwn(entry, "responses")
      );
    })
  );
}

export function safeDecodeURI(data: string): string {
  try {
    return decodeURI(data)
  } catch (error) {
    return data
  };
};