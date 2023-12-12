"use client";

import * as React from 'react';
import classNames from 'classnames';
import { Panel } from 'rc-cascader';
import DefaultRenderEmpty from '../config-provider/defaultRenderEmpty';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useBase from './hooks/useBase';
import useCheckable from './hooks/useCheckable';
import useColumnIcons from './hooks/useColumnIcons';
import useStyle from './style';
import usePanelStyle from './style/panel';
export default function CascaderPanel(props) {
  const {
    prefixCls: customizePrefixCls,
    className,
    multiple,
    rootClassName,
    notFoundContent,
    direction,
    expandIcon
  } = props;
  const [prefixCls, cascaderPrefixCls, mergedDirection, renderEmpty] = useBase(customizePrefixCls, direction);
  const rootCls = useCSSVarCls(cascaderPrefixCls);
  const [wrapCSSVar, hashId] = useStyle(cascaderPrefixCls, rootCls);
  usePanelStyle(cascaderPrefixCls);
  const isRtl = mergedDirection === 'rtl';
  // ===================== Icon ======================
  const [mergedExpandIcon, loadingIcon] = useColumnIcons(prefixCls, isRtl, expandIcon);
  // ===================== Empty =====================
  const mergedNotFoundContent = notFoundContent || (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Cascader')) || ( /*#__PURE__*/React.createElement(DefaultRenderEmpty, {
    componentName: "Cascader"
  }));
  // =================== Multiple ====================
  const checkable = useCheckable(cascaderPrefixCls, multiple);
  // ==================== Render =====================
  return wrapCSSVar( /*#__PURE__*/React.createElement(Panel, Object.assign({}, props, {
    checkable: checkable,
    prefixCls: cascaderPrefixCls,
    className: classNames(className, hashId, rootClassName, rootCls),
    notFoundContent: mergedNotFoundContent,
    direction: mergedDirection,
    expandIcon: mergedExpandIcon,
    loadingIcon: loadingIcon
  })));
}