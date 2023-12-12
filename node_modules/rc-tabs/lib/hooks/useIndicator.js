"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _raf = _interopRequireDefault(require("rc-util/lib/raf"));
var _react = require("react");
var useIndicator = function useIndicator(_ref) {
  var activeTabOffset = _ref.activeTabOffset,
    horizontal = _ref.horizontal,
    rtl = _ref.rtl,
    indicatorSize = _ref.indicatorSize;
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    inkStyle = _useState2[0],
    setInkStyle = _useState2[1];
  var inkBarRafRef = (0, _react.useRef)();
  var getLength = function getLength(origin) {
    if (typeof indicatorSize === 'function') {
      return indicatorSize(origin);
    }
    if (typeof indicatorSize === 'number') {
      return indicatorSize;
    }
    return origin;
  };

  // Delay set ink style to avoid remove tab blink
  function cleanInkBarRaf() {
    _raf.default.cancel(inkBarRafRef.current);
  }
  (0, _react.useEffect)(function () {
    var newInkStyle = {};
    if (activeTabOffset) {
      if (horizontal) {
        if (rtl) {
          newInkStyle.right = activeTabOffset.right + activeTabOffset.width / 2;
          newInkStyle.transform = 'translateX(50%)';
        } else {
          newInkStyle.left = activeTabOffset.left + activeTabOffset.width / 2;
          newInkStyle.transform = 'translateX(-50%)';
        }
        newInkStyle.width = getLength(activeTabOffset.width);
      } else {
        newInkStyle.top = activeTabOffset.top + activeTabOffset.height / 2;
        newInkStyle.transform = 'translateY(-50%)';
        newInkStyle.height = getLength(activeTabOffset.height);
      }
    }
    cleanInkBarRaf();
    inkBarRafRef.current = (0, _raf.default)(function () {
      setInkStyle(newInkStyle);
    });
    return cleanInkBarRaf;
  }, [activeTabOffset, horizontal, rtl, indicatorSize]);
  return {
    style: inkStyle
  };
};
var _default = exports.default = useIndicator;