import React from 'react';

const SingleMovie = (props) => {
    return (
        <div className='card'>
            <div className='container'>
                <h2>{props.name}</h2>
                <h4>{props.genero}</h4>

            </div>
        </div>
    )
}
export default SingleMovie