import React from 'react'
import '../../App.css'

function FauxBatons(props) {
    const theClass = "col-" + props.colWidth
    return (
        <div className={"button-holder " + theClass}>
            <div className="faux-baxton"
                onClick={() => props.updateLife(props.adjustment, props.operation)}>
            {props.fauxLabel}
            </div>
        </div>
    )
}

export default FauxBatons