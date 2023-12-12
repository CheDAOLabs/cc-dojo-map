import * as React from 'react';
import type { PickType } from 'rc-cascader/lib/Panel';
import type { CascaderProps } from '.';
export type PanelPickType = Exclude<PickType, 'checkable'> | 'multiple' | 'rootClassName';
export type CascaderPanelProps = Pick<CascaderProps, PanelPickType>;
export default function CascaderPanel(props: CascaderPanelProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
