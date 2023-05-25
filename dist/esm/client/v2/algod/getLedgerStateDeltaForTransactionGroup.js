import JSONRequest from '../jsonrequest';
export default class GetLedgerStateDeltaForTransactionGroup extends JSONRequest {
    id;
    constructor(c, intDecoding, id) {
        super(c, intDecoding);
        this.id = id;
        this.id = id;
    }
    // eslint-disable-next-line class-methods-use-this
    path() {
        return `/v2/deltas/txn/group/${this.id}`;
    }
}
//# sourceMappingURL=getLedgerStateDeltaForTransactionGroup.js.map