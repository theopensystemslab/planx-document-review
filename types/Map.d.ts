/// <reference types="react" />
import "@opensystemslab/map";
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "my-map": MapProps;
        }
        interface MapProps {
            showNorthArrow: boolean;
        }
    }
}
export default function Map(): JSX.Element;
