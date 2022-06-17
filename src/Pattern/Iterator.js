class Iterator {
    constructor(container) {
        this.list = container.list;
        this.index = 0;
    }

    next() {
        if (this.hasNext1()) {
            return this.list[this.index++];
        }
        return null;
    }

    hasNext1() {
        if (this.index >= this.list.length) {
            return false;
        }
        return true;
    }
}

class Container {
    constructor(list) {
        this.list = list;
    }
    getInterator() {
        return new Iterator(this);
    }
}

export default class InteratorTest {
    static main() {
        let container = new Container([1,2,3,4,5,6]);
        let interator = container.getInterator();
        while (interator.hasNext1()) {
            console.log(interator.next());
        }
    }
}

