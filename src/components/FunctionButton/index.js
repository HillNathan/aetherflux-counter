import React from 'react'

function FunctionButton(props) {
    const myStyle = "faux-baxton-" + props.myStyle
    return(
        <div className="col-5 button-holder">
            <div className={myStyle}
                    onClick={() => props.doFunction()}>
                {props.label}
            </div>
        </div>
    )
}

export default FunctionButton