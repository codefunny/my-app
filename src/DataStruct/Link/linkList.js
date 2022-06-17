export class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export class LinkList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (this.length === 0) {
            this.head = newNode;
        } else {
            let currentNode = this.head;

            while(currentNode.next !== null) {
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
        }

        this.length++;
    }

    insert(postion,data) {
        if (postion < 0 || postion > this.length) return false;

        const newNode = new Node(data);
        if (postion === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let currentNode = this.head;
            let prevNode = null;
            let index = 0;

            while (index++ < postion) {
                prevNode = currentNode;
                currentNode = currentNode.next;
            }

            newNode.next = currentNode;
            prevNode.next = newNode;
        }
        this.length++;
        return true;
    }

    getData(postion) {
        if (postion < 0 || postion > this.length) return null;

        let currentNode = this.head;
        let index = 0;

        while (index++ < postion) {
            currentNode = currentNode.next;
        }

        return currentNode.data;
    }

    indexOf(data) {
        let currentNode = this.head;
        let index = 0;

        while(currentNode) {
            if(currentNode.data === data) {
                return index;
            }
            currentNode = currentNode.next;
            index++;
        }

        return -1;
    }

    removeAt(position) {
        if (postion < 0 || postion > this.length) return null;

        let currentNode = this.head;
        if (position === 0) {
            this.head = this.head.next;
        } else {
            let prevNode = null;
            let index = 0;

            while(index++ < position) {
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            prevNode.next = currentNode.next;
        }

        this.length--;
        return currentNode;
    }

    ifEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    toString() {
        let currentNode = this.head;
        let result = '';
    
        // 遍历所有的节点，拼接为字符串，直到节点为 null
        while (currentNode) {
          result += currentNode.data + ' ';
          currentNode = currentNode.next;
        }
    
        return result;
    }
}