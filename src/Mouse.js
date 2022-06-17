import React, { Component } from 'react'
import { useState } from 'react';

// export const Mouse = (props) => {
//     const [position, setPosition] = useState({x:0,y:0});
//     const handleMouseMove = (e) => {
//         setPosition({x: e.clientX,y:e.clientY});
//     }
//     return (
//         <div onMouseMove={handleMouseMove}>{props.children(position)}</div>
//     )
// }

// export default class Cat extends Component {
//   render() {
//     return (
//       <Mouse>
//           { (position) => <h1>x:{position.x}, y:{position.y}</h1>}
//       </Mouse>
//     )
//   }
// }

function SayHello({children}) {
    const [visible, setVisible] = useState(false);
    const jsx = visible && (
        <h1 onClick={()=> setVisible(false) }> Hello Hook!</h1>
    );
    return children({setVisible,jsx});
}

export default class Cat extends Component {
  render() {
    return (
        <SayHello>{
            ({setVisible, jsx}) => {
                return (
                    <React.Fragment>
                        <button onClick={()=>setVisible(true)}>showChild</button>
                        {jsx}
                    </React.Fragment>
                );
            }    
        }</SayHello>
    )
  }
}

