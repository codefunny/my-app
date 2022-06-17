class Memento {
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}

class CareTaker {
    constructor() {
        this.list = [];
    }
    add(memento) {
        this.list.push(memento);
    }
    get(index) {
        return this.list[index];
    }
}

class Editor {
    constructor(){
        this.content = null;
    }

    setContent(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }

    saveContentToMemento() {
        return new Memento(this.content);
    }

    getContentFromMemento(memento) {
        this.content = memento.getContent();
    }
}

export default class MementoTest {
    static main() {
        let editor = new Editor();
        let careTaker = new CareTaker();

        editor.setContent('1232');
        editor.setContent('1112222');
        careTaker.add(editor.saveContentToMemento());

        editor.setContent('33333');
        careTaker.add(editor.saveContentToMemento());

        editor.setContent('44444');
        console.log(editor.getContent());
        editor.getContentFromMemento(careTaker.get(1));
        console.log(editor.getContent());

        editor.getContentFromMemento(careTaker.get(0));
        console.log(editor.getContent());
    }
}
