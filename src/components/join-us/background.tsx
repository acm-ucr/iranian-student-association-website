import React from 'react';
import Paisley1 from '@/public/join-us/paisley1.webp';
import Paisley2 from '@/public/join-us/paisley2.webp';

const BackgroundComponent = () => {
    return (
        <div className="relative w-full h-screen bg-beige-100">
            <img
                src={Paisley1.src}
                alt="Paisley Top Left"
                className="absolute top-10 left-0 w-60 h-auto"
            />

            <img
                src={Paisley2.src}
                alt="Paisley Bottom Right"
                className="absolute bottom-0 right-0 w-64 h-auto"
            />
        </div>
    );
};

export default BackgroundComponent;
