const initState = 0
export default function reducer(state= initState,action) {
    switch (action.type) {
        case 'addN':
            return state + action.payload
        case 'sub':
            return state - 1
        default:
            return state
    }
}