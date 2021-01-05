import React from 'react'

function Banner(props) {
    return(
        <div className="row justify-content-center notation">
            <div className="col-2"></div>
                <div className="col-8">
                {props.bannerInfo}
                </div>
            <div className="col-2"></div>
        </div>

    )
}

export default Banner