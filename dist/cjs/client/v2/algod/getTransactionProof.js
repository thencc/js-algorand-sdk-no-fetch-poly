"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonrequest_1 = __importDefault(require("../jsonrequest"));
class GetTransactionProof extends jsonrequest_1.default {
    constructor(c, intDecoding, round, txID) {
        super(c, intDecoding);
        this.round = round;
        this.txID = txID;
        this.round = round;
        this.txID = txID;
    }
    path() {
        return `/v2/blocks/${this.round}/transactions/${this.txID}/proof`;
    }
    /**
     * Exclude assets and application data from results
     * The type of hash function used to create the proof, must be one of: "sha512_256", "sha256"
     *
     * #### Example
     * ```typescript
     * const hashType = "sha256";
     * const round = 123456;
     * const txId = "abc123;
     * const txProof = await algodClient.getTransactionProof(round, txId)
     *        .hashType(hashType)
     *        .do();
     * ```
     *
     * @param hashType
     * @category query
     */
    hashType(hashType) {
        this.query.hashtype = hashType;
        return this;
    }
}
exports.default = GetTransactionProof;
//# sourceMappingURL=getTransactionProof.js.map