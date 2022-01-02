'use strict'

class Dictionary {
    constructor() {
        this.keys = [];
        this.values = [];
    }
    set(key, value) {
        this.keys.push(key);
        this.values.push(value);
    }
    get(key) {
        const i = this.keys.indexOf(key);
        return i !== -1 ? this.values[i] : null;
    }
    delete(key) {
        const i = this.keys.indexOf(key);
        if (i !== - 1) {
            this.values.splice(i, 1);
            this.keys.splice(i, 1);
        }
    }
    clear() {
        this.keys = [];
        this.values = [];
    }
    has(key) {
        return this.keys.indexOf(key) !== -1;
    }
    get size() {
        return this.keys.length;
    }
    [Symbol.iterator]() {
        return {
            keys: this.keys,
            values: this.values,
            i: 0,
            next() {
                return this.i < this.keys.length ? {
                    done: false,
                    value: this.values[this.i++]
                } : {
                    done: true
                }
            }
        }
    }
}