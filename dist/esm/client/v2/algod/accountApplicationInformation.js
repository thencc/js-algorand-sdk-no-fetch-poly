import JSONRequest from '../jsonrequest';
export default class AccountApplicationInformation extends JSONRequest {
    account;
    applicationID;
    constructor(c, intDecoding, account, applicationID) {
        super(c, intDecoding);
        this.account = account;
        this.applicationID = applicationID;
        this.account = account;
        this.applicationID = applicationID;
    }
    path() {
        return `/v2/accounts/${this.account}/applications/${this.applicationID}`;
    }
}
//# sourceMappingURL=accountApplicationInformation.js.map