import React from 'react';
import InteratorTest from './Iterator';
import FlyWeidhtTest from './FlyWeight';
import MementoTest from './Memento';
import InterpreterPatternDemo from './Expression';

export default function PatternDemo() {

    const onInteratorTest = () => {
        InteratorTest.main();
    }

    const onFlyWeightTest = () => {
        FlyWeidhtTest.main();
    }

    const onMementoTest = () => {
        MementoTest.main();
    }

    const onExpression = () => {
        InterpreterPatternDemo.main();
    }

    return (
        <>
        <button onClick={onInteratorTest}>Interator</button>
        <button onClick={onFlyWeightTest}>FlyWeight</button>
        <button onClick={onMementoTest}>Memento</button>
        <button onClick={onExpression}>Expression</button>
        </>
    );
}
