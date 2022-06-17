import { useEffect,useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,asyncIncrement } from "./features/counterSlice";
import {loadData} from './features/moveSlice';

function Counter() {
    const {count} = useSelector((state)=> state.counter);
    const {list} = useSelector((store) => store.movie);
    const dispatch = useDispatch();

    const [amount, setAmount] = useState(0);

    return (
        <div>
            <button onClick={()=>{
                dispatch(increment({step: 2}));
            }}>{count}</button>
            <hr />
            <button onClick={()=>{
                dispatch(asyncIncrement({step: 1}));
            }}>{count}</button>
            <button onClick={()=>{
                dispatch(loadData());
            }}>getData</button>
            <hr />
            <ul>
                {
                    list.map((item) => {
                        return <li key={item.tvId}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default Counter;