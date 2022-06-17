export default class ObjectDemo {
    static main() {
        this.assignTest();
        this.defineTest();
    }

    static assignTest() {
        //assin 是浅拷贝
        const obj1 = Object.assign({},{
            a: 1, b: 2
        });

        console.log('obj1 '+ JSON.stringify(obj1));

        //深拷贝
        const obj2 = {a: 0, b: {c:0}};
        const obj3 = Object.assign({},obj2);
        //这里如果obj3.b.c = 3,会同时影响obj2和obj3

        const obj4 = JSON.parse(JSON.stringify(obj2));
        obj4.b.c = 4;
        console.log('obj2 '+JSON.stringify(obj2));
    }

    static defineTest() {
        const obj1 = {};
        Object.defineProperty(obj1,'property1',{
            configurable: true,  //表示能否通过delete删除属性从而重新定义属性，能否修改属性
            enumerable: true,  //表示能否通过for-in循环返回属性
            value: 42,
            writable: true //可写
        });

        obj1.property1 = 77;

        console.log('obj1'+obj1.property1);

        let nameValue = "";
        Object.defineProperty(obj1,"name",{
            get() {
                // return nameValue;
                return this._name;
            },
            set(newValue) {
                // nameValue = newValue;
                this._name = newValue;
                this.property1 = 90;
            },
            enumerable : true,
            configurable : true
        })

        obj1.name = "hello";
        console.log('define obj1 '+ JSON.stringify(obj1));
    }
}