/// <reference types="react" />
import type { SharedComponentToken, SharedInputToken } from '../../input/style';
import type { FullToken, GetDefaultToken } from '../../theme/internal';
import type { FormatComponentToken } from '../../theme/util/genComponentStyleHook';
export interface ComponentToken extends SharedComponentToken {
    /**
     * @desc 输入框宽度
     * @descEN Width of input
     */
    controlWidth: number;
    /**
     * @desc 操作按钮宽度
     * @descEN Width of control button
     */
    handleWidth: number;
    /**
     * @desc 操作按钮图标大小
     * @descEN Icon size of control button
     */
    handleFontSize: number;
    /**
     * Default `auto`. Set `true` will always show the handle
     * @desc 操作按钮可见性
     * @descEN Handle visible
     */
    handleVisible: 'auto' | true;
    /**
     * @desc 操作按钮背景色
     * @descEN Background color of handle
     */
    handleBg: string;
    /**
     * @desc 操作按钮激活背景色
     * @descEN Active background color of handle
     */
    handleActiveBg: string;
    /**
     * @desc 操作按钮悬浮颜色
     * @descEN Hover color of handle
     */
    handleHoverColor: string;
    /**
     * @desc 操作按钮边框颜色
     * @descEN Border color of handle
     */
    handleBorderColor: string;
}
type InputNumberToken = FullToken<'InputNumber'> & SharedInputToken;
export declare const genRadiusStyle: ({ componentCls, borderRadiusSM, borderRadiusLG }: InputNumberToken, size: 'lg' | 'sm') => {
    [x: string]: {
        [x: string]: {
            borderStartEndRadius: number;
            borderEndEndRadius: number;
        } | {
            borderStartEndRadius: number;
            borderEndEndRadius?: undefined;
        } | {
            borderEndEndRadius: number;
            borderStartEndRadius?: undefined;
        };
    };
};
export declare const prepareComponentToken: GetDefaultToken<'InputNumber'>;
export declare const formatComponentToken: FormatComponentToken<'InputNumber'>;
declare const _default: (prefixCls: string, rootCls?: string) => readonly [(node: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, string];
export default _default;
