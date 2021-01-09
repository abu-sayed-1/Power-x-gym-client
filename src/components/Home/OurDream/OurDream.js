import React, { useEffect, useState } from 'react';

const OurDream = () => {
    const [ourDream, setOurDream] = useState(null);
    console.log(ourDream)
    const _id = 4;
    useEffect(() => {
        fetch(`http://localhost:4000/ourDream/${_id}`)
            .then(res => res.json())
            .then(data => setOurDream(data))
    }, [_id])
    return (
        <div>

        </div>
    );
};

export default OurDream;