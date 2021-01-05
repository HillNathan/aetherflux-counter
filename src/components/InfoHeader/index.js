import React from 'react'

function InfoHeader(props) {
    return(
        <div className="row">
        <div className="col-1 spacer"></div>  
        <div className="col-10 text-label-1">
          {props.label} = {props.info}
        </div>
        <div className="col-1 spacer"></div>  
      </div>

    )
}

export default InfoHeader