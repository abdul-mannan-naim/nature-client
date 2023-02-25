import React, { useEffect, useState } from 'react';
import Like from './Like';

const Likes = () => {

    const [likes, setLikes] = useState([]);

    useEffect(() => {
        fetch('https://nature-server.vercel.app/likes')
            .then(res => res.json())
            .then(data => setLikes(data))
    }, [likes])


    return (
        <div className='flex justify-center'>
            <div className='grid grid-cols-3 gap-3'>
                {likes.map(l => <Like
                    key={l._id}
                    l={l}
                ></Like>)}
            </div>
        </div>
    );
};

export default Likes;