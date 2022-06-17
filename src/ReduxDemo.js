import React from "react";
import {useState,useEffect,useReducer} from 'react';


export const loading = 'LOADING'
export const list = 'LIST'
export const dec = 'DEC'
export const requestState = 'REQUEST_LIST'

export const updateLoading = (data) => ({
    type: loading,
    data
})

export const requestList = () => ({
    type : requestState
})

export const updateList = (data) => ({
    type: list,
    data
})

export const updateDec = (data) => ({
    type: dec,
    data
})

const initialState = {
    loading : true,
    list: []
};

export const initReducer = (state, {type, data}) => {
    switch (type) {
        case list:
            return {
                ...state,
                list: data
            }
        case loading:
            return {
                ...state,
                loading: data
            }
        case requestState:
            return {
                ...state,
                loading : true
            }
        case dec: {
            return {
                ...state,
                list: data
            }
        }
        default:
            return state
    }
}

const ReduxDemo = (props) => {
    const [state, dispatch] = useReducer(initReducer, initialState);

    const [data, setData] = useState(null);

    useEffect(() => {
        getData();
    },[])
    const getData = () => {
        dispatch(updateList(['1','2','3']))
        dispatch(updateLoading(false))

        const fetchData = async () => {
            let res = await fetch(
              "https://api.github.com/users" //example and simple data
            );
            let response = await res.json();
            setData(response); // parse json
            console.log(response);
            dispatch(updateLoading(false));
        };
        fetchData();
    }


    const fetchJson = async (url) => {
        const response = await fetch(url);
        return response.json();
    };
      
    const Fetch = () => {
    useEffect(() => {
        fetchJson("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(({ disclaimer }) => setData(disclaimer));
    }, []);
    
    return <div>{data}</div>;
    };   

    const {list = [],loading} = state
    return (
        <div>
            { loading ? 
            <p>loading</p> : 
            <ul>
                {list.map((item,index) => <li key={index}>{item}</li>)}
            </ul> 
            
            }

            <button onClick={() => dispatch(updateList([...list,list.length+1]))}>add</button>
            <button onClick={() =>{ list.pop();dispatch(updateList(list)) }}>dec</button>
            <div><p>{JSON.stringify(data)}</p></div>
        </div>
    );
}

export default ReduxDemo;