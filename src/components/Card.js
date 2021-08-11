import React from 'react';

const Card = (props) => {
    const {name, email, id} = props;
    return(
    <div class='bg-light-green dib br3 pa3 ma2 grow shadow-5 tc'>
        <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>

    );
}

export default Card;