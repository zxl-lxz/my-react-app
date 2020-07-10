import React from 'react'

function BoilingVerdict(props) {
    if (props.celsius > 100) {
        return (
            <p>沸腾</p>
        )
    }
    return (
        <p>没沸腾</p>
    )
}

export default BoilingVerdict;
