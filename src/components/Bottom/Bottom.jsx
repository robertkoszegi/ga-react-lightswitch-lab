import React from "react";

function Bottom(props) {
    return (
        <div className='Bottom'>Bottom
            <button onClick={()=>props.flipSwitch()}>{props.position}</button>
            {/* <button>Off</button> */}
        </div>    
    );
}

export default Bottom;