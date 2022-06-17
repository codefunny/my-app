
export default class PromiseDemo {

    static test1(value) {
        const promise = new Promise(function(resolve,reject) {
            if (value > 100) {
                resolve(value);
            } else {
                reject(new Error('value is ' + value));
            }
        })

        promise.then((value) => {
            console.log(value);
        }).catch( error => {
            console.log('error'+ error);
        });
    }
    static main() {
        this.test1(120)
        this.test1(90)
    }
}