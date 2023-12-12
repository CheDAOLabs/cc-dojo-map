import { useToken } from '../../theme/internal';
const useCSSVarCls = prefixCls => {
  const [,,,, cssVar] = useToken();
  return cssVar ? `${prefixCls}-css-var` : '';
};
export default useCSSVarCls;