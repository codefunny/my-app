import React, {useState} from 'react';

type Props = {
    label: string;
    count: number,
    onIncrement: () => void;
};

export const FCCounter: React.FC<Props> = props => {
    const {label, count, onIncrement} = props;

    const handleIncrement = () => {
        onIncrement();
    }

    return (
        <div>
            <span>
                {label} : {count}
            </span>
            <button type='button' onClick={handleIncrement}>
                {`Increment`}
            </button>
        </div>
    );
}

export default class extends React.Component<{},{count: number}> {
    state = {count: 0};

    render() {
        return (
            <FCCounter 
                label='SFCCounter'
                count={this.state.count}
                onIncrement={()=>{ this.setState({count: this.state.count + 1});}} 
            />
        );
    }
}

type clsProps = {
    label: string;
    initialCount: number;
};

type clsState = {
    count: number;
};

export class ClassCounter extends React.Component<clsProps,clsState> {
    // readonly state: clsState = {
    //     count: 0,
    // };

    static defaultProps = {
        initialCount: 0,
    };

    readonly state: clsState = {
        count: this.props.initialCount,
    };

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    }

    render(): React.ReactNode {
        const {label} = this.props;
        const {count} = this.state;

        return (
            <div>
                <span>
                    {label} : {count}
                </span>
                <button type='button' onClick={this.handleIncrement}>
                    {`Increment`}
                </button>
            </div>
        );
    }
}

type fcProps = { initialCount: number};
export function fcCounter({initialCount} : fcProps) {
    const [count, setCount] = useState(initialCount);

    return (
        <>
        Count: {count}
        <button onClick={()=>{ setCount(initialCount) }}>Reset</button>
        <button onClick={()=>{ setCount(prevCount => prevCount + 1) }}>+1</button>
        <button onClick={()=>{ setCount(prevCount => prevCount - 1) }}>-1</button>
        </>
    );
}