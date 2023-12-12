import type React from 'react';
import type { TabOffset } from '../interface';
export type GetIndicatorSize = number | ((origin: number) => number);
export type UseIndicator = (options: {
    activeTabOffset: TabOffset;
    horizontal: boolean;
    rtl: boolean;
    indicatorSize: GetIndicatorSize;
}) => {
    style: React.CSSProperties;
};
declare const useIndicator: UseIndicator;
export default useIndicator;
