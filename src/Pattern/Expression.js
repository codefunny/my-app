class TerminalExpression {
    constructor(data) {
        this.data = data;
    }
    interpret(context) {
        if (context.indexOf(this.data) > -1) {
            return true;
        }
        return false;
    }
}

class OrExpression {
    constructor(expr1,expr2) {
        this.expr1 = expr1;
        this.expr2 = expr2;
    }
    interpret(context) {
        return this.expr1.interpret(context) || this.expr2.interpret(context);
    }
}

class AndExpression {
    constructor(expr1,expr2) {
        this.expr1 = expr1;
        this.expr2 = expr2;
    }
    interpret(context) {
        return this.expr1.interpret(context) && this.expr2.interpret(context);
    }
}

export default class InterpreterPatternDemo {
    static getMaleExpression() {
        const robert = new TerminalExpression('小明');
        const john = new TerminalExpression('小龙');
        return new OrExpression(robert,john);
    }

    static getMarriedExpression() {
        const julie = new TerminalExpression('张三');
        const married = new TerminalExpression('小红');
        return new AndExpression(julie,married);
    }

    static main(args) {
        const isMale = this.getMaleExpression();
        const isMarriedWomen = this.getMarriedExpression();

        console.log(`小龙is ${isMale.interpret("小龙")}`);
        console.log(`小红is ${isMarriedWomen.interpret("张三 小红")}`);
    }
}
