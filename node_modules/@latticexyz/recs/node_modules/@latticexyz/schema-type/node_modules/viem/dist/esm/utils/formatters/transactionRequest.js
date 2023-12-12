import { numberToHex } from '../encoding/toHex.js';
import { defineFormatter } from './formatter.js';
export function formatTransactionRequest(transactionRequest) {
    return {
        ...transactionRequest,
        gas: typeof transactionRequest.gas !== 'undefined'
            ? numberToHex(transactionRequest.gas)
            : undefined,
        gasPrice: typeof transactionRequest.gasPrice !== 'undefined'
            ? numberToHex(transactionRequest.gasPrice)
            : undefined,
        maxFeePerGas: typeof transactionRequest.maxFeePerGas !== 'undefined'
            ? numberToHex(transactionRequest.maxFeePerGas)
            : undefined,
        maxPriorityFeePerGas: typeof transactionRequest.maxPriorityFeePerGas !== 'undefined'
            ? numberToHex(transactionRequest.maxPriorityFeePerGas)
            : undefined,
        nonce: typeof transactionRequest.nonce !== 'undefined'
            ? numberToHex(transactionRequest.nonce)
            : undefined,
        value: typeof transactionRequest.value !== 'undefined'
            ? numberToHex(transactionRequest.value)
            : undefined,
    };
}
export const defineTransactionRequest = /*#__PURE__*/ defineFormatter('transactionRequest', formatTransactionRequest);
//# sourceMappingURL=transactionRequest.js.map