import Queue from "./queue";

class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

export default class PriorityQueue extends Queue {
    constructor() {
        super();
    }

    enqueue(element,priority) {
        const queueElement = new QueueElement(element,priority);
        if(this.isEmpty()) {
            this.items.push(queueElement);
        } else {
            let added = false;

            for(let i = 0; i < this.items.length; i++) {
                if(queueElement.priority < this.items[i].priority) {
                    this.items.splice(i,0,queueElement);
                    added = true;
                    break;
                }
            }

            if(!added) {
                this.items.push(queueElement);
            }
        }
    }

    dequeue() {
        return super.dequeue();
    }

    front() {
        return super.front();
    }

    isEmpty() {
        return super.isEmpty();
    }

    size() {
        return super.size();
    }

    toString() {
        let result = '';
        for (let item of this.items) {
            result += item.element + '-' + item.priority + ' ';
        }
        return result;
    }
}