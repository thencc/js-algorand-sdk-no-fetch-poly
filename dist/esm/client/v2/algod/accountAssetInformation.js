import JSONRequest from '../jsonrequest';
export default class AccountAssetInformation extends JSONRequest {
    account;
    assetID;
    constructor(c, intDecoding, account, assetID) {
        super(c, intDecoding);
        this.account = account;
        this.assetID = assetID;
        this.account = account;
        this.assetID = assetID;
    }
    path() {
        return `/v2/accounts/${this.account}/assets/${this.assetID}`;
    }
}
//# sourceMappingURL=accountAssetInformation.js.map