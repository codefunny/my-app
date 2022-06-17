export default class ArrayDemo {
    static main() {
        const fruits = ['Apple', 'Banana'];

        fruits.push('orange');

        fruits.unshift('strawberry');

        const index = fruits.indexOf('Apple');

        const has = fruits.includes('orange');

        const removeItems = fruits.splice(index,1);
        console.log('removedItems ' + removeItems);

        const shallowCopy = fruits.slice();
    }
}