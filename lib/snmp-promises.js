const snmp = require('snmp-native');

exports.Session = class Session {
    constructor(options) {
        this._session = new snmp.Session(options);
    }

    get(options) {
        return new Promise((resolve, reject) => {
            this._session.get(options, (error, varbinds) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(varbinds);
                }
            });
        });
    }

    getNext(options) {
        return new Promise((resolve, reject) => {
            this._session.getNext(options, (error, varbinds) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(varbinds);
                }
            });
        });
    }

    getAll(options) {
        return new Promise((resolve, reject) => {
            this._session.getAll(options, (error, varbinds) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(varbinds);
                }
            });
        });
    }

    getSubtree(options) {
        return new Promise((resolve, reject) => {
            this._session.getSubtree(options, (error, varbinds) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(varbinds);
                }
            });
        });
    }

    set(options) {
        return new Promise((resolve, reject) => {
            this._session.set(options, (error, varbinds) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(varbinds);
                }
            });
        });
    }

    async close() {
        this._session.close();
    }

}