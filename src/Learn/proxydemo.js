
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}

export default class ProxyDemo {
    static main() {

        let person = new Person('aaron',22);

        let proxy = new Proxy(person,{
            get: (target, property) => {
                console.log('get '+property);
                return target[property];
            },
            set: function(obj,prop,value) {
                if (prop === 'age') {
                    if (value > 150) {
                        console.log('not validate');
                        // throw new RangeError('The age seems invalid');
                        return true;
                    }
                }
                return Reflect.set(obj,prop,value);
            }
        });

        console.log(proxy.name);
        console.log(proxy.age);
        proxy.age = 100;
        console.log(proxy.age);

        proxy.age = 200
        console.log(proxy.age);
    }
}
