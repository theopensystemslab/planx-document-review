import * as React from "react";
type DocumentReviewProps = React.PropsWithChildren<{
    geojson: object;
    csv: QuestionAnswers;
    files: FileInfo[];
}>;
export default function DocumentReview(props: DocumentReviewProps): React.ReactElement<DocumentReviewProps, any>;
type QuestionAnswers = React.PropsWithChildren<{
    question: string;
    responses: any[];
}[]>;
type FileInfo = {
    filename: string;
    tags: string[];
};
export {};
