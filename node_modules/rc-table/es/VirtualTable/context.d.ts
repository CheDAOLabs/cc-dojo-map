import type { TableSticky } from '../interface';
export interface StaticContextProps {
    scrollY: number;
    listItemHeight: number;
    sticky: boolean | TableSticky;
}
export declare const StaticContext: import("@rc-component/context").SelectorContext<StaticContextProps>;
export interface GridContextProps {
    columnsOffset: number[];
}
export declare const GridContext: import("@rc-component/context").SelectorContext<GridContextProps>;
