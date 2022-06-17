export default class Dictionary {
    constructor() {
        this.items = {};
    }

    has(key) {
        return this.items.hasOwnProperty(key);
    }

    set(key, value) {
        this.items[key] = value;
    }

    remove(key) {
        if (this.has(key)) {
            delete this.items[key];
        }

        return false;
    }

    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    keys() {
        return Object.keys(this.items);
    }

    values() {
        return Object.values(this.items);
    }

    size() {
        return this.keys().length;
    }

    clear() {
        this.items = {};
    }
}