"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useRangeOpen;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _rcUtil = require("rc-util");
var _useEvent = _interopRequireDefault(require("rc-util/lib/hooks/useEvent"));
var _raf = _interopRequireDefault(require("rc-util/lib/raf"));
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * 1. Click input to show picker
 * 2. Calculate next open index
 *
 * If click `confirm`:
 * 3. Hide current picker
 * 4. Open next index picker if exist
 *
 * If not `changeOnBlur` and click outside:
 * 3. Hide picker
 *
 * If `changeOnBlur` and click outside:
 * 3. Hide current picker
 * 4. Open next index picker if exist
 */

/**
 * Auto control of open state
 */
function useRangeOpen(defaultOpen, open, activePickerIndex, changeOnBlur, needConfirmButton, startInputRef, endInputRef, startSelectedValue, endSelectedValue, disabled, onOpenChange) {
  var _React$useState = React.useState(false),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    firstTimeOpen = _React$useState2[0],
    setFirstTimeOpen = _React$useState2[1];
  var _useMergedState = (0, _rcUtil.useMergedState)(defaultOpen || false, {
      value: open
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    afferentOpen = _useMergedState2[0],
    setAfferentOpen = _useMergedState2[1];
  var _useMergedState3 = (0, _rcUtil.useMergedState)(defaultOpen || false, {
      value: open,
      onChange: function onChange(nextOpen) {
        onOpenChange === null || onOpenChange === void 0 || onOpenChange(nextOpen);
      }
    }),
    _useMergedState4 = (0, _slicedToArray2.default)(_useMergedState3, 2),
    mergedOpen = _useMergedState4[0],
    setMergedOpen = _useMergedState4[1];
  var _useMergedState5 = (0, _rcUtil.useMergedState)(0, {
      value: activePickerIndex
    }),
    _useMergedState6 = (0, _slicedToArray2.default)(_useMergedState5, 2),
    mergedActivePickerIndex = _useMergedState6[0],
    setMergedActivePickerIndex = _useMergedState6[1];
  var _React$useState3 = React.useState(null),
    _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
    nextActiveIndex = _React$useState4[0],
    setNextActiveIndex = _React$useState4[1];
  React.useEffect(function () {
    if (mergedOpen) {
      setFirstTimeOpen(true);
    }
  }, [mergedOpen]);
  var queryNextIndex = function queryNextIndex(index) {
    return index === 0 ? 1 : 0;
  };
  var triggerOpen = (0, _useEvent.default)(function (nextOpen, index, source) {
    if (index === false) {
      // Only when `nextOpen` is false and no need open to next index
      setMergedOpen(nextOpen);
    } else if (nextOpen) {
      setMergedActivePickerIndex(index);
      setMergedOpen(nextOpen);
      var nextIndex = queryNextIndex(index);

      // Record next open index
      if (!mergedOpen ||
      // Also set next index if next is empty
      ![startSelectedValue, endSelectedValue][nextIndex]) {
        setNextActiveIndex(nextIndex);
      } else {
        setFirstTimeOpen(false);
        if (nextActiveIndex !== null) {
          setNextActiveIndex(null);
        }
      }
    } else if (source === 'confirm' || source === 'blur' && changeOnBlur) {
      // dateTime mode does not need help getting the index
      var customNextActiveIndex = afferentOpen && !needConfirmButton ? queryNextIndex(index) : nextActiveIndex;
      if (customNextActiveIndex !== null) {
        setFirstTimeOpen(false);
        setMergedActivePickerIndex(customNextActiveIndex);
      }
      setNextActiveIndex(null);

      // Focus back
      if (customNextActiveIndex !== null && !disabled[customNextActiveIndex]) {
        (0, _raf.default)(function () {
          var _ref$current;
          var ref = [startInputRef, endInputRef][customNextActiveIndex];
          (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.focus();
        });
      } else {
        setMergedOpen(false);
      }
    } else {
      setMergedOpen(false);
      setAfferentOpen(false);
    }
  });
  return [mergedOpen, mergedActivePickerIndex, firstTimeOpen, triggerOpen];
}