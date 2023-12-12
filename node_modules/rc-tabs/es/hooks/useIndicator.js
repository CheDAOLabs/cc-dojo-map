import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import raf from "rc-util/es/raf";
import { useEffect, useRef, useState } from 'react';
var useIndicator = function useIndicator(_ref) {
  var activeTabOffset = _ref.activeTabOffset,
    horizontal = _ref.horizontal,
    rtl = _ref.rtl,
    indicatorSize = _ref.indicatorSize;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    inkStyle = _useState2[0],
    setInkStyle = _useState2[1];
  var inkBarRafRef = useRef();
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
    raf.cancel(inkBarRafRef.current);
  }
  useEffect(function () {
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
    inkBarRafRef.current = raf(function () {
      setInkStyle(newInkStyle);
    });
    return cleanInkBarRaf;
  }, [activeTabOffset, horizontal, rtl, indicatorSize]);
  return {
    style: inkStyle
  };
};
export default useIndicator;