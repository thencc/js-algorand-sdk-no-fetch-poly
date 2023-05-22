import { ABIType } from './abi_type';
import { ABITransactionType } from './transaction';
import { ABIReferenceType } from './reference';
export interface ABIMethodArgParams {
    type: string;
    name?: string;
    desc?: string;
}
export interface ABIMethodReturnParams {
    type: string;
    desc?: string;
}
export interface ABIMethodParams {
    name: string;
    desc?: string;
    args: ABIMethodArgParams[];
    returns: ABIMethodReturnParams;
}
export type ABIArgumentType = ABIType | ABITransactionType | ABIReferenceType;
export type ABIReturnType = ABIType | 'void';
export declare class ABIMethod {
    readonly name: string;
    readonly description?: string;
    readonly args: Array<{
        type: ABIArgumentType;
        name?: string;
        description?: string;
    }>;
    readonly returns: {
        type: ABIReturnType;
        description?: string;
    };
    constructor(params: ABIMethodParams);
    getSignature(): string;
    getSelector(): Uint8Array;
    txnCount(): number;
    toJSON(): ABIMethodParams;
    static fromSignature(signature: string): ABIMethod;
}
export declare function getMethodByName(methods: ABIMethod[], name: string): ABIMethod;
