import React, { useState } from 'react'
import store from './store'

export default function Son() {
    const [n, setN] = useState(12)
    
    const add = () => {
        store.dispatch()
    }
}