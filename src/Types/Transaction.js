import Immutable from './Immutable';
import CustomDate from './CustomDate'; /* eslint-disable-line no-unused-vars */
import Monetary from './Monetary'; /* eslint-disable-line no-unused-vars */

/**
 * A class for transaction objects
 */
export default class Transaction extends Immutable {
    /** @returns {String} */
    get action() {
        return this._data.action;
    }

    /** @returns {Monetary} */
    get amount() {
        return this._data.amount;
    }

    /** @returns {Number} */
    get transactionId() {
        return this._data.transactionId;
    }

    /** @returns {CustomDate} */
    get time() {
        return this._data.time;
    }
}