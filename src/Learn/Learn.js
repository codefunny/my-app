import ProxyDemo from "./proxydemo";
import PromiseDemo from "./promisedemo";
import FetchDemo from "./fetchdemo";
import ObjectDemo from "./objectdemo";
import ArrayDemo from "./arraydemo";

export default function LearnDemo() {

    const onProxyTest = () => {
        ProxyDemo.main();
    }

    const onPromiseDemo = () => {
        PromiseDemo.main();
    }

    const onFetchDemo = () => {
        FetchDemo.main();
    }

    const onObjectDemo = () => {
        ObjectDemo.main();
    }

    const onArrayDemo = () => {
        ArrayDemo.main();
    }

    return (
        <>
        <button onClick={onProxyTest}>proxydemo</button>
        <button onClick={onPromiseDemo}>PromiseDemo</button>
        <button onClick={onFetchDemo}>FetchDemo</button>
        <button onClick={onObjectDemo}>ObjectDemo</button>
        <button onClick={onArrayDemo}>ArrayDemo</button>
        </>
    );
}
