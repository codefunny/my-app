import Stack from "./stack";

console.log('//-----------stack test -----------//');
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.items);




function dec2bin(dec) {
    const stack = new Stack();

    while(dec > 0) {
        stack.push(dec%2);
        dec = Math.floor(dec/2);
    }

    let binaryString = '';
    while(!stack.isEmpty()) {
        binaryString += stack.pop();
    }
    return binaryString;
}

console.log(dec2bin(100));