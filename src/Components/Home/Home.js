import React, { useEffect, useState } from 'react';
import Nature from './Nature';

const Home = () => {

    const [natures, setNatures] = useState([]);

    useEffect(() => {
        fetch('https://nature-server.vercel.app/items')
            .then(res => res.json())
            .then(data => setNatures(data))
    }, [natures])



    return (
        <div className='flex justify-center'>
            <div className='grid grid-cols-3 gap-3'>
                {natures.map(n => <Nature
                    key={n._id}
                    n={n}
                ></Nature>)}
            </div>

        </div>
    );
};

export default Home;