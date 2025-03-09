import React from 'react';

const Next = ({nextClick}) => {
    return (
        <div className='flex flex-row'>
            <button onClick={nextClick}>Next</button>
        </div>
    )
}

export default Next;