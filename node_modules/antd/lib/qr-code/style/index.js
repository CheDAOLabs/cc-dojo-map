"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareComponentToken = exports.default = void 0;
var _cssinjs = require("@ant-design/cssinjs");
var _style = require("../../style");
var _internal = require("../../theme/internal");
const genQRCodeStyle = token => {
  const {
    componentCls,
    lineWidth,
    lineType,
    colorSplit
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: token.paddingSM,
      backgroundColor: token.colorWhite,
      borderRadius: token.borderRadiusLG,
      border: `${(0, _cssinjs.unit)(lineWidth)} ${lineType} ${colorSplit}`,
      position: 'relative',
      overflow: 'hidden',
      [`& > ${componentCls}-mask`]: {
        position: 'absolute',
        insetBlockStart: 0,
        insetInlineStart: 0,
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        color: token.colorText,
        lineHeight: token.lineHeight,
        background: token.QRCodeMaskBackgroundColor,
        textAlign: 'center',
        [`& > ${componentCls}-expired`]: {
          color: token.QRCodeExpiredTextColor
        }
      },
      '> canvas': {
        alignSelf: 'stretch',
        flex: 'auto',
        minWidth: 0
      },
      '&-icon': {
        marginBlockEnd: token.marginXS,
        fontSize: token.controlHeight
      }
    }),
    [`${componentCls}-borderless`]: {
      borderColor: 'transparent'
    }
  };
};
const prepareComponentToken = () => ({});
exports.prepareComponentToken = prepareComponentToken;
var _default = exports.default = (0, _internal.genStyleHooks)('QRCode', token => {
  const mergedToken = (0, _internal.mergeToken)(token, {
    QRCodeExpiredTextColor: 'rgba(0, 0, 0, 0.88)',
    QRCodeMaskBackgroundColor: 'rgba(255, 255, 255, 0.96)'
  });
  return genQRCodeStyle(mergedToken);
}, prepareComponentToken);