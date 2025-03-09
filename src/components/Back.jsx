import React from 'react';

const Back = ({backClick}) => {
    return (
        <div className='flex flex-row'>
            <button onClick={backClick}>Back</button>
        </div>
    )
}

export default Back;