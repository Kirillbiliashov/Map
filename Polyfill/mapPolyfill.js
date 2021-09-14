class Dictionary {
    constructor() {
        this.keys = [];
        this.values = [];
    }
    set(key, value) {
        this.keys.push(key);
        this.values.push(value)
    }
    get(key) {
        const i = this.keys.indexOf(key);
        if (i !== -1) return this.values[i];
        return null;
    }
    delete(key) {
        const i = this.keys.indexOf(key);
        if (i !== - 1) this.values.splice(i, 1);
    }
    clear() {
        this.keys = [];
        this.values = [];
    }
    has(key) {
        return this.keys.indexOf(key) !== -1 ? true : false
    }
    get size() {
        return this.keys.length
    }
    [Symbol.iterator]() {
      return {
           keys: this.keys,
           values: this.values,
           i: 0,
          next() {
              console.log('i is: ' + this.i)
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
