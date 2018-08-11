import React from 'react';


const Balance = (props) => {
    var style = {
        color: props.total > 0 ? 'green' : 'red'
    };

    return (
        <div>
            <h2>
                Balance: ${props.total.toFixed(2)}
            </h2>
        </div>
    )
}
export default Balance;
    